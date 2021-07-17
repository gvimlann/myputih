import { useEffect } from 'react';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';
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

		// L.Icon.Default.mergeOptions({
		// 	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
		// 	iconUrl: require('leaflet/dist/images/marker-icon.png'),
		// 	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
		// });
		// L.Marker.prototype.options.icon = L.icon({
		// 	iconUrl: require('leaflet/dist/images/marker-icon.png'),
		// 	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
		// });
	}, []);

	const icon = L.icon({
		iconUrl: require(`./team.png`),
	});

	const icon2 = L.icon({
		iconUrl: require(`./warning.png`),
	});

	const userIcon = L.icon({
		iconUrl: require(`./pin.png`),
	});

	return (
		<MapContainer
			className={mapClassName}
			center={center}
			zoom={zoom}
			{...rest}>
			<ChangeView center={center} zoom={zoom} />
			<MarkerClusterGroup>
				{children(ReactLeaflet, icon, icon2, userIcon)}
			</MarkerClusterGroup>
		</MapContainer>
	);
};

export default Map;
