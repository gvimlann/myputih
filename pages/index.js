import Head from 'next/head';
import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import { signIn, signOut, getSession } from 'next-auth/client';
import axios from 'axios';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import styles from '../styles/Home.module.css';
import NumberFormat from 'react-number-format';

const DEFAULT_CENTER = [4.175975, 102.120976];

async function checkUserIfExists(user) {
	axios
		.post(`/api/user/get`, {
			email: user.email,
			name: user.name,
		})
		.then((res) => {
			// console.log(res);
		});
}

async function createOrUpdateData(user, state) {
	axios
		.post(`/api/info/createorupdate`, {
			name: user.name,
			email: user.email,
			contactNumber: state.contactNumber,
			food: state.food,
			groceries: state.groceries,
			money: state.money,
			medical: state.medical,
			others: state.others,
			othersDetail: state.othersDetail,
			needHelp: state.needHelp,
			location: state.userLocation,
			othersNeed: state.othersNeed,
		})
		.then((res) => {
			// console.log(res);
			// getAllInfo();
		});
}

// async function getAllInfo() {
// 	axios.get(`/api/info/get`).then((res) => {
// 		return res.data;
// 	});
// }

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.session = props.session;
		this.state = {
			username: props.session?.user.name,
			contactNumber: '',
			food: false,
			groceries: false,
			money: false,
			medical: false,
			others: false,
			othersDetail: '',
			needHelp: false,
			userLocation: DEFAULT_CENTER,
			locationSwitchedOn: false,
			mapZoom: 8,
			allPointsInfo: [],
		};
		this.toggleModal.bind(this);
		this.toggleInfoModal.bind(this);
		this.sendOptionToParent.bind(this);
		this.toggleErrorModal.bind(this);
		this.handleSubmit.bind(this);
		this.getAllInfo.bind(this);
	}
	// const [session, loading] = useSession();

	sendOptionToParent = (data) => {
		this.setState({ needHelp: data });
	};

	getAllInfo = async () => {
		axios.get(`/api/info/get`).then((res) => {
			this.setState({ allPointsInfo: res.data });
		});
	};

	toggleModal = () => {
		// const body = document.querySelector('body');
		const modal = document.querySelector('.modal');
		modal.classList.toggle('opacity-0');
		modal.classList.toggle('pointer-events-none');
		// body.classList.toggle('modal-active');
		this.setState({
			username: this.session.user.name,
			contactNumber: '',
			food: false,
			groceries: false,
			money: false,
			medical: false,
			others: false,
			othersDetail: '',
		});
	};

	toggleInfoModal = (props) => {
		// console.log(typeof props === 'number');
		const errorModal = document.querySelector('.info-modal');
		errorModal.classList.toggle('opacity-0');
		errorModal.classList.toggle('pointer-events-none');
	};

	toggleErrorModal = () => {
		// const body = document.querySelector('body');
		const errorModal = document.querySelector('.error-modal');
		errorModal.classList.toggle('opacity-0');
		errorModal.classList.toggle('pointer-events-none');
		// body.classList.toggle('modal-active');
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.toggleModal();
		createOrUpdateData(this.session.user, this.state);
		// console.log('info: ', this.state);
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					userLocation: [position.coords.latitude, position.coords.longitude],
				});
				this.setState({ locationSwitchedOn: true });
				console.log('Location is on');
				this.setState({ mapZoom: 15 });
			},
			(error) => {
				this.setState({ error: "We can't get your location!" });
				this.setState({ locationSwitchedOn: false });
				console.log('Location is off');
			}
		);

		// user is logged in
		if (this.session?.user !== undefined) {
			let user = this.session.user;
			checkUserIfExists(user);
			this.getAllInfo();
			// this.setState({ allPointsInfo: getAllInfo() });
			// console.log('all info');
			// console.log(this.state.allPointsInfo);
		}
	}

	render() {
		return (
			<div>
				<Head>
					<title>MyPutih</title>
				</Head>

				<main>
					<Header
						signedIn={this.session}
						username={this.session?.user.name}
						googleSignOut={signOut}
					/>
					<Navbar
						signedIn={this.session}
						googleSignIn={signIn}
						toggleModal={this.toggleModal}
						toggleErrorModal={this.toggleErrorModal}
						sendDataToParent={this.sendOptionToParent}
						locationSwitchedOn={this.state.locationSwitchedOn}
					/>
					<button className="block fixed z-20 shadow mt-2 mr-2 p-5 bg-gray-500 hover:bg-gray-400 text-white font-bold rounded-full right-0">
						NGO
					</button>
					{/* Error Modal-Start */}
					<div className="error-modal z-50 opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
						<div
							onClick={this.toggleErrorModal}
							className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
						<div className="modal-container bg-white md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto w-full max-w-xs p-5">
							<div className="flex justify-between items-center p-2 ml-2 mr-2">
								<p className="text-2xl font-bold">Location Not Found</p>
								<div
									onClick={this.toggleErrorModal}
									className="modal-close cursor-pointer z-50">
									<XIcon className="w-5 h-5" />
								</div>
							</div>
							<h1>Please switch on your location to access these features</h1>
						</div>
					</div>
					{/* Error Modal-End */}
					{/* Modal Start */}
					<div className="modal z-50 opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
						<div
							onClick={this.toggleModal}
							className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
						<div className="modal-container bg-white md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto w-full max-w-xs">
							<div className="flex justify-between items-center p-2 ml-2 mr-2">
								<p className="text-2xl font-bold">
									{this.state.needHelp ? 'Need Help' : 'Give Help'}
								</p>
								<div
									onClick={this.toggleModal}
									className="modal-close cursor-pointer z-50">
									<XIcon className="w-5 h-5" />
								</div>
							</div>
							{this.state.needHelp && (
								<form
									onSubmit={this.handleSubmit}
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
											value={this.state.username}
											placeholder="Your Name"
											onChange={(e) => {
												this.setState({ username: e.target.value });
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
											value={this.state.contactNumber}
											placeholder="Your Contact Number"
											onChange={(e) =>
												this.setState({
													contactNumber: e.target.value,
												})
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
															this.setState({
																food: e.target.checked,
															});
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
															this.setState({
																groceries: e.target.checked,
															});
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
															this.setState({
																money: e.target.checked,
															});
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
															this.setState({
																medical: e.target.checked,
															});
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
															this.setState({
																others: e.target.checked,
															});
														}}
													/>
													<span className="ml-2">Others</span>
												</label>
											</div>
											<div>
												<input
													type="text"
													className={`${
														this.state.others ? 'show' : 'hidden'
													} form-input mt-1 block w-full border-2`}
													placeholder="Please state your other needs"
													onChange={(e) => {
														this.setState({
															othersDetail: e.target.value,
														});
													}}
												/>
											</div>
										</div>
									</div>
									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="coordinates">
											Your Coordinates
										</label>
										<label
											className="block text-gray-500 text-sm font-medium mb-2"
											htmlFor="coordinates">
											<NumberFormat
												value={this.state.userLocation[0]}
												displayType={'text'}
												decimalScale={5}
											/>
											{` , `}
											<NumberFormat
												value={this.state.userLocation[1]}
												displayType={'text'}
												decimalScale={5}
											/>
										</label>
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
							{!this.state.needHelp && (
								<form
									onSubmit={this.handleSubmit}
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
											value={this.state.username}
											placeholder="Your Name"
											onChange={(e) => {
												this.setState({ username: e.target.value });
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
											value={this.state.contactNumber}
											placeholder="Your Contact Number"
											onChange={(e) =>
												this.setState({
													contactNumber: e.target.value,
												})
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
															this.setState({
																food: e.target.checked,
															});
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
															this.setState({
																groceries: e.target.checked,
															});
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
															this.setState({
																money: e.target.checked,
															});
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
															this.setState({
																medical: e.target.checked,
															});
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
															this.setState({
																others: e.target.checked,
															});
														}}
													/>
													<span className="ml-2">Others</span>
												</label>
											</div>
											<div>
												<input
													type="text"
													className={`${
														this.state.others ? 'show' : 'hidden'
													} form-input mt-1 block w-full border-2`}
													placeholder="Please state other things you are helping with"
													onChange={(e) => {
														this.setState({
															othersDetail: e.target.value,
														});
													}}
												/>
											</div>
										</div>
									</div>
									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="coordinates">
											Your Coordinates
										</label>
										<label
											className="block text-gray-500 text-sm font-medium mb-2"
											htmlFor="coordinates">
											<NumberFormat
												value={this.state.userLocation[0]}
												displayType={'text'}
												decimalScale={5}
											/>
											{` , `}
											<NumberFormat
												value={this.state.userLocation[1]}
												displayType={'text'}
												decimalScale={5}
											/>
										</label>
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
					{/* Modal Ends */}
					{/* Info Modal Start */}
					<div className="info-modal z-50 opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
						<div
							onClick={this.toggleInfoModal}
							className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
						<div className="modal-container bg-white md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto w-full max-w-xs">
							<div className="flex justify-between items-center p-2 ml-2 mr-2">
								<p className="text-2xl font-bold">Person Information</p>
								<div
									onClick={this.toggleInfoModal}
									className="modal-close cursor-pointer z-50">
									<XIcon className="w-5 h-5" />
								</div>
							</div>
							<form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="name">
										Name
									</label>
									<label
										className="block text-gray-500 text-medium font-medium mb-2"
										htmlFor="name">
										Username
									</label>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="contactNumber">
										Contact Number
									</label>
									<label
										className="block text-gray-500 text-medium font-medium mb-2"
										htmlFor="name">
										Contact Number
									</label>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="contactNumber">
										Items Needed
									</label>
									<div className="mt-2">
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													checked
													disabled
												/>
												<span className="ml-2 text-gray-500 text-medium font-medium mb-2">
													Food
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													disabled
												/>
												<span className="ml-2 text-gray-500 text-medium font-medium mb-2">
													Groceries
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													disabled
												/>
												<span className="ml-2 text-gray-500 text-medium font-medium mb-2">
													Money
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													disabled
												/>
												<span className="ml-2 text-gray-500 text-medium font-medium mb-2">
													Medical
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input
													type="checkbox"
													className="form-checkbox h-6 w-6 border-2 border-gray-300"
													disabled
												/>
												<span className="ml-2 text-gray-500 text-medium font-medium mb-2">
													Others
												</span>
											</label>
										</div>
										<div className="block">
											<input
												type="text"
												className={`${
													this.state.others ? 'show' : 'hidden'
												} form-input mt-1 block w-full border-2`}
												placeholder="Please state your other needs"
												disabled
											/>
										</div>
									</div>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="contactNumber">
										Open Google Maps
									</label>
									<a
										target="_blank"
										href={`https://www.google.com/maps/place/${this.state.userLocation[0]},${this.state.userLocation[1]}`}>
										<img src={require('../components/Map/map.png')} />
									</a>
								</div>
								<div className="flex items-center justify-between">
									<button
										onClick={this.toggleInfoModal}
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
										Close
									</button>
								</div>
							</form>
						</div>
					</div>
					{/* Info Modal Ends */}
					<Map
						className={styles.homeMap}
						center={this.state.userLocation}
						maxZoom={18}
						zoom={this.state.mapZoom}>
						{({ TileLayer, Marker, Popup }, icon, icon2, userIcon) => (
							<>
								<TileLayer
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								/>
								<Marker position={this.state.userLocation} icon={userIcon}>
									<Popup>Your Location</Popup>
								</Marker>
								{/* {points_need.map((marker, key) => (
									<Marker
										key={`marker-${key}`}
										position={[marker[0], marker[1]]}
										icon={icon}>
										<Popup>
											<button
												onClick={() => this.toggleInfoModal(key)}
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
												Open
											</button>
										</Popup>
									</Marker>
								))} */}
								{/* {console.log('allinfo')} */}
								{this.state.allPointsInfo?.map((marker, key) => {
									if (marker.needHelp) {
										return (
											<Marker
												key={`marker-${key}`}
												position={[marker.latitude, marker.longitude]}
												icon={icon2}>
												<Popup>
													<button
														onClick={() => this.toggleInfoModal(key)}
														className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
														Open
													</button>
												</Popup>
											</Marker>
										);
									} else {
										return (
											<Marker
												key={`marker-${key}`}
												position={[marker.latitude, marker.longitude]}
												icon={icon}>
												<Popup>
													<button
														onClick={() => this.toggleInfoModal(key)}
														className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
														Open
													</button>
												</Popup>
											</Marker>
										);
									}
								})}
							</>
						)}
					</Map>
				</main>
			</div>
		);
	}
}

export const getServerSideProps = async (context) => {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
};
