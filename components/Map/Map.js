import { useEffect } from 'react';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.css';

const { MapContainer, useMap } = ReactLeaflet;

const Map = ({ children, className, center, zoom, ...rest }) => {
	let mapClassName = styles.map;

	if (className) {
		mapClassName = `${mapClassName} ${className}`;
	}

	function ChangeView({ center, zoom }) {
		const map = useMap();
		map.setView(center, zoom);
		return null;
	}

	useEffect(() => {
		delete L.Icon.Default.prototype._getIconUrl;

		L.Icon.Default.mergeOptions({
			iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
			iconUrl: require('leaflet/dist/images/marker-icon.png'),
			shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
		});
	}, []);

	return (
		<MapContainer
			className={mapClassName}
			center={center}
			zoom={zoom}
			{...rest}>
			<ChangeView center={center} zoom={zoom} />
			{children(ReactLeaflet)}
		</MapContainer>
	);
};

export default Map;
