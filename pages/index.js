import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Map from '../components/Map';

import styles from '../styles/Home.module.css';

const DEFAULT_CENTER = [3.315834, 101.559201];

export default function Home() {
	return (
		<div>
			<Head>
				<title>MyPutih</title>
			</Head>

			<main>
				<Header />
				<Navbar />
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
