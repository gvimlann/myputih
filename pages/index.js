import Head from 'next/head';
import { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { signIn, signOut, getSession } from 'next-auth/client';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import styles from '../styles/Home.module.css';

const DEFAULT_CENTER = [3.315834, 101.559201];

export default function Home({ session }) {
	const [option, setOption] = useState(true);
	// const [session, loading] = useSession();

	function toggleModal() {
		// const body = document.querySelector('body');
		const modal = document.querySelector('.modal');
		modal.classList.toggle('opacity-0');
		modal.classList.toggle('pointer-events-none');
		// body.classList.toggle('modal-active');
	}

	const sendOptionToParent = (option) => {
		// the callback. Use a better name
		console.log(option);
		setOption(option);
	};

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
								{option ? 'Need Help' : 'Give Help'}
							</p>
							<div
								onClick={toggleModal}
								className="modal-close cursor-pointer z-50">
								<XIcon className="w-5 h-5" />
							</div>
						</div>
						<form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="username">
									Username
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Username"
								/>
							</div>
							<div className="mb-6">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="password">
									Password
								</label>
								<input
									className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
								/>
								<p className="text-red-500 text-xs italic">
									Please choose a password.
								</p>
							</div>
							<div className="flex items-center justify-between">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button">
									Sign In
								</button>
							</div>
						</form>
					</div>
				</div>
				{/* Modal-End */}

				<Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={14}>
					{({ TileLayer, Marker, Popup }) => (
						<>
							<TileLayer
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							/>
							<Marker position={DEFAULT_CENTER}>
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
