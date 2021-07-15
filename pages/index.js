import Head from 'next/head';
import { useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { signIn, signOut, getSession } from 'next-auth/client';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import styles from '../styles/Home.module.css';

const DEFAULT_CENTER = [3.315834, 101.559201];

export default function Home({ session }) {
	const [needHelp, setNeedHelp] = useState();
	const [userLocation, setUserLocation] = useState([0, 0]);
	const [info, setInfo] = useState({
		username: session.user.name,
		contactNumber: 0,
		food: false,
		groceries: false,
		money: false,
		medical: false,
		others: false,
		othersDetail: '',
	});
	// const [session, loading] = useSession();

	function toggleModal() {
		// const body = document.querySelector('body');
		const modal = document.querySelector('.modal');
		modal.classList.toggle('opacity-0');
		modal.classList.toggle('pointer-events-none');
		// body.classList.toggle('modal-active');
		setInfo({
			username: session.user.name,
			contactNumber: 0,
			food: false,
			groceries: false,
			money: false,
			medical: false,
			others: false,
			othersDetail: '',
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('info: ', info);
		toggleModal();
	};

	const sendOptionToParent = (needHelp) => {
		// the callback. Use a better name
		setNeedHelp(needHelp);
	};

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				console.log({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
				setUserLocation([position.coords.latitude, position.coords.longitude]);
			});
		}
	}, []);

	// useEffect(() => {
	// var openmodal = document.querySelectorAll('.modal-open');
	// for (var i = 0; i < openmodal.length; i++) {
	// 	openmodal[i].addEventListener('click', function (event) {
	// 		event.preventDefault();
	// 		toggleModal();
	// 	});
	// }
	// const overlay = document.querySelector('.modal-overlay');
	// overlay.addEventListener('click', toggleModal);
	// var closemodal = document.querySelectorAll('.modal-close');
	// for (var i = 0; i < closemodal.length; i++) {
	// 	closemodal[i].addEventListener('click', toggleModal);
	// }
	// document.onkeydown = function (evt) {
	// 	evt = evt || window.event;
	// 	var isEscape = false;
	// 	if ('key' in evt) {
	// 		isEscape = evt.key === 'Escape' || evt.key === 'Esc';
	// 	} else {
	// 		isEscape = evt.keyCode === 27;
	// 	}
	// 	if (isEscape && document.body.classList.contains('modal-active')) {
	// 		toggleModal();
	// 	}
	// };
	// function toggleModal() {
	// 	const body = document.querySelector('body');
	// 	const modal = document.querySelector('.modal');
	// 	modal.classList.toggle('opacity-0');
	// 	modal.classList.toggle('pointer-events-none');
	// 	body.classList.toggle('modal-active');
	// }
	// });

	return (
		<div>
			<Head>
				<title>MyPutih</title>
			</Head>

			<main>
				<Header
					signedIn={session}
					username={session?.user.name}
					googleSignOut={signOut}
				/>
				<Navbar
					signedIn={session}
					googleSignIn={signIn}
					toggleModal={toggleModal}
					sendDataToParent={sendOptionToParent}
				/>
				{/* Modal-Start */}
				<div className="modal z-50 opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
					<div
						onClick={toggleModal}
						className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
					<div className="modal-container bg-white md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto w-full max-w-xs">
						<div className="flex justify-between items-center p-2 ml-2 mr-2">
							<p className="text-2xl font-bold">
								{needHelp ? 'Need Help' : 'Give Help'}
							</p>
							<div
								onClick={toggleModal}
								className="modal-close cursor-pointer z-50">
								<XIcon className="w-5 h-5" />
							</div>
						</div>
						{needHelp && (
							<form
								onSubmit={handleSubmit}
								className="bg-white shadow-md rounded px-8 pt-6 pb-8">
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="name">
										Name
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="name"
										type="text"
										value={info.username}
										placeholder="Your Name"
										onChange={(e) => {
											console.log('name: ', e.target.value);
											setInfo({ ...info, username: e.target.value });
										}}
									/>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="contactNumber">
										Contact Number
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="contactNumber"
										type="number"
										value={info.contactNumber}
										placeholder="Your Contact Number"
										onChange={(e) =>
											setInfo({ ...info, contactNumber: e.target.value })
										}
									/>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="contactNumber">
										What Do You Need
									</label>
									<div className="mt-2">
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													onChange={(e) => {
														setInfo({ ...info, food: e.target.checked });
													}}
												/>
												<span className="ml-2">Food</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													onChange={(e) => {
														setInfo({ ...info, groceries: e.target.checked });
													}}
												/>
												<span className="ml-2">Groceries</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													onChange={(e) => {
														setInfo({ ...info, money: e.target.checked });
													}}
												/>
												<span className="ml-2">Money</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													onChange={(e) => {
														setInfo({ ...info, medical: e.target.checked });
													}}
												/>
												<span className="ml-2">Medical</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													onChange={(e) => {
														setInfo({ ...info, others: e.target.checked });
													}}
												/>
												<span className="ml-2">Others</span>
											</label>
										</div>
										<div>
											<input
												type="text"
												className={`${
													info.others ? 'show' : 'hidden'
												} form-input mt-1 block w-full border-2`}
												placeholder="Please state your other needs"
												onChange={(e) => {
													setInfo({ ...info, othersDetail: e.target.value });
												}}
											/>
										</div>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<button
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
										type="submit">
										Submit
									</button>
								</div>
							</form>
						)}
						{!needHelp && (
							<form
								onSubmit={handleSubmit}
								className="bg-white shadow-md rounded px-8 pt-6 pb-8">
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="name">
										Name
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="name"
										type="text"
										value={info.username}
										placeholder="Your Name"
										onChange={(e) => {
											console.log('name: ', e.target.value);
											setInfo({ ...info, username: e.target.value });
										}}
									/>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="contactNumber">
										Contact Number
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="contactNumber"
										type="number"
										value={info.contactNumber}
										placeholder="Your Contact Number"
										onChange={(e) =>
											setInfo({ ...info, contactNumber: e.target.value })
										}
									/>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="contactNumber">
										What Do You Offer
									</label>
									<div className="mt-2">
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													onChange={(e) => {
														setInfo({ ...info, food: e.target.checked });
													}}
												/>
												<span className="ml-2">Food</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													onChange={(e) => {
														setInfo({ ...info, groceries: e.target.checked });
													}}
												/>
												<span className="ml-2">Groceries</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													onChange={(e) => {
														setInfo({ ...info, money: e.target.checked });
													}}
												/>
												<span className="ml-2">Money</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													onChange={(e) => {
														setInfo({ ...info, medical: e.target.checked });
													}}
												/>
												<span className="ml-2">Medical</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													onChange={(e) => {
														setInfo({ ...info, others: e.target.checked });
													}}
												/>
												<span className="ml-2">Others</span>
											</label>
										</div>
										<div>
											<input
												type="text"
												className={`${
													info.others ? 'show' : 'hidden'
												} form-input mt-1 block w-full border-2`}
												placeholder="Please state other things you are helping with"
												onChange={(e) => {
													setInfo({ ...info, othersDetail: e.target.value });
												}}
											/>
										</div>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<button
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
										type="submit">
										Submit
									</button>
								</div>
							</form>
						)}
					</div>
				</div>
				{/* Modal-End */}

				<Map className={styles.homeMap} center={userLocation} zoom={14}>
					{({ TileLayer, Marker, Popup }) => (
						<>
							<TileLayer
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							/>
							<Marker position={userLocation}>
								<Popup>
									A pretty CSS3 popup. <br /> Easily customizable.
								</Popup>
							</Marker>
						</>
					)}
				</Map>
			</main>
		</div>
	);
}

export const getServerSideProps = async (context) => {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
};
