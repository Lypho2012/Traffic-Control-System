import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

function Map() {
  function recenter() {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
  
          setCenter(pos);
        }
      );
    } else {
      // Browser doesn't support Geolocation
      throw Error("Error: Your browser doesn't support geolocation.");
    }
  }
  const [center,setCenter] = useState({ lat: 37, lng: -122 });
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  return (
    <div className="page">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={10}
      />
      )}
      <button id="recenter-button" onClick={() => recenter()}>Recenter</button>
    </div>
  )
}
export default Map