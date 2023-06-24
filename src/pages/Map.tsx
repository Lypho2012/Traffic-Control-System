import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

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
    </div>
  )
}

export default Map