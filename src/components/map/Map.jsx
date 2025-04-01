import React, {useEffect, useRef, forwardRef} from "react";
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function Map({ coordinates, onMapImageUrl }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // Inicializar mapa

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.80603, 10.97587],
      zoom: 10.3
    });

    markerRef.current = new mapboxgl.Marker()
      .setLngLat([-74.80603, 10.97587])
      .addTo(map)
    
    mapRef.current = map;

    return () => map.remove()
  }, []);

  useEffect(() => {
    if(coordinates && mapRef.current && markerRef.current) {
      mapRef.current.flyTo({
        center: coordinates,
        essential: true,
        zoom: 16,
        speed: 1.2
      });
      markerRef.current.setLngLat(coordinates)
      const [lng, lat] = coordinates;
      const markerStyle = "pin-s-l+000";
      //const staticImageUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lng},${lat},15,0/400x400@2x?access_token=${mapboxgl.accessToken}`;
      const staticImageUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${markerStyle}(${lng},${lat})/${lng},${lat},14/500x300?access_token=${mapboxgl.accessToken}`
      onMapImageUrl(staticImageUrl);
    }
  }, [coordinates]);

  return (
    <div id='map-container' ref={mapContainerRef} style={{height: "250px", width: "100%", margin: "0 auto"}}>

    </div>
  );
};

export default Map;
