function Navbar({
	signedIn,
	googleSignIn,
	toggleModal,
	toggleErrorModal,
	sendDataToParent,
	locationSwitchedOn,
}) {
	const isActive = true;

	return (
		<div
			className={`${
				isActive ? 'show ' : 'hidden '
			}block fixed inset-x-0 bottom-0 z-50 shadow`}>
			{signedIn && (
				<div className={'flex space-x-4 justify-between'}>
					<a
						onClick={() => {
							// console.log('location switch on: ', locationSwitchedOn);
							if (locationSwitchedOn) {
								sendDataToParent(true);
								toggleModal();
							} else {
								toggleErrorModal();
							}
						}}
						href="#"
						className={
							'flex-1 block rounded-full bg-red-600 hover:bg-red-400 justify-center text-center p-5 mb-1'
						}>
						<span className={'block text-white text-lg'}>Need Help</span>
					</a>
					<a
						onClick={() => {
							// console.log('location switch on: ', locationSwitchedOn);
							if (locationSwitchedOn) {
								sendDataToParent(false);
								toggleModal();
							} else {
								toggleErrorModal();
							}
						}}
						href="#"
						className={
							'flex-1 block rounded-full bg-green-600 hover:bg-green-400 justify-center text-center p-5 mb-1'
						}>
						<span className={'block text-white text-lg'}>Give Help</span>
					</a>
					{/* <a
						href="#"
						className={
							'flex-1 block rounded-full bg-gray-600 hover:bg-gray-400 justify-center text-center p-5 mb-1'
						}>
						<span className={'block text-white text-lg'}>NGO</span>
					</a> */}
				</div>
			)}
			{!signedIn && (
				<div className={'flex space-x-4 justify-between'}>
					<a
						onClick={() => googleSignIn()}
						href="#"
						className={
							'flex-1 block rounded-full bg-red-500 hover:bg-red-300 justify-center text-center p-5 mb-1'
						}>
						<span className={'block text-white text-lg'}>
							Sign In With Google
						</span>
					</a>
				</div>
			)}
		</div>
	);
}

export default Navbar;
