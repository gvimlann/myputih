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

const DEFAULT_CENTER = [3.315834, 101.559201];

async function getData() {
	axios
		.get(`http://localhost:8080/api/hello`)
		.then(function (response) {
			// console.log(response.data);
		})
		.catch(function (error) {
			// console.log(error);
		});

	return 0;
}

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.session = props.session;
		this.state = {
			username: props.session?.user.name,
			contactNumber: 0,
			food: false,
			groceries: false,
			money: false,
			medical: false,
			others: false,
			othersDetail: '',
			needHelp: false,
			userLocation: [0, 0],
			locationSwitchedOn: false,
		};
		this.toggleModal.bind(this);
		this.sendOptionToParent.bind(this);
		this.toggleErrorModal.bind(this);
		this.handleSubmit.bind(this);
	}
	// const [session, loading] = useSession();

	sendOptionToParent = (data) => {
		this.setState({ needHelp: data });
	};

	toggleModal = () => {
		// const body = document.querySelector('body');
		const modal = document.querySelector('.modal');
		modal.classList.toggle('opacity-0');
		modal.classList.toggle('pointer-events-none');
		// body.classList.toggle('modal-active');
		this.setState({
			username: this.session.user.name,
			contactNumber: 0,
			food: false,
			groceries: false,
			money: false,
			medical: false,
			others: false,
			othersDetail: '',
		});
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
		console.log('info: ', this.state);
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					userLocation: [position.coords.latitude, position.coords.longitude],
				});
				this.setState({ locationSwitchedOn: true });
				console.log('Location is on');
			},
			(error) => {
				this.setState({ error: "We can't get your location!" });
				this.setState({ locationSwitchedOn: false });
				console.log('Location is off');
			}
		);

		// user is logged in
		if (this.session?.user === undefined) {
			let user = this.session?.user;
			// axios
			// 	.get(`http://localhost:8080/api/hello`)
			// 	.then(function (response) {
			// 		alert();
			// 	})
			// 	.catch(function (error) {
			// 		console.log(error);
			// 	});
			getData();
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
												console.log('name: ', e.target.value);
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
					<Map
						className={styles.homeMap}
						center={this.state.userLocation}
						zoom={15}>
						{({ TileLayer, Marker, Popup }) => (
							<>
								<TileLayer
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								/>
								<Marker position={this.state.userLocation}>
									<Popup>
										A pretty CSS3 popup. <br /> Easily customizable.
										<a target="_blank" href="https://www.google.com">
											Google
										</a>
									</Popup>
								</Marker>
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
