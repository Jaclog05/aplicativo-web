import React, {useEffect, useRef} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

function Map({ coords, bounds }) {
  const mapRef = useRef();
  const mapBounds = [
    [parseFloat(bounds[0]), parseFloat(bounds[2])],
    [parseFloat(bounds[1]), parseFloat(bounds[3])]
  ]

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitBounds(mapBounds)
    }
  }, [mapBounds]);

  return (
    <MapContainer
      ref={mapRef}
      center={coords}
      bounds={mapBounds}
      scrollWheelZoom={false}
      style={{height: "305px", width: "305px", gridArea: "map", margin: "0 auto"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords}>
        <Popup>
          Ubicación seleccionada
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
