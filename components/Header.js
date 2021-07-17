function Header({ signedIn, googleSignOut, username }) {
	return (
		<div
			className={
				'sticky top-0 z-10 bg-gray-200 flex items-center justify-between p-2 lg:px-5 shadow-md'
			}>
			<h1 className={'text-2xl'}>MyPutih App</h1>

			{signedIn && (
				<div className="flex items-center">
					<h1 className="text-md mr-5">Hey, {username}</h1>
					<button
						onClick={googleSignOut}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button">
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
}

export default Header;
