import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";

function Map() {
  /** 
   * Load satellite segmentation model 
  */
  async function loadModel() {
    return await tf.loadLayersModel("public/models/satellite_segmentation_30");
  }

  /**
   * Recenters map to user location
   */
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

  /**
   * Uses google maps current window to predict road segmentation and returns overlay
   */
  function predict() {
    const model = loadModel();
    const currentMap = document.getElementById("map-container");
    
  }

  // update road segmentation overlay in real-time
  const [roadSegmentation,setRoadSegmentation] = useState(predict()); // TODO: replace date with output of model

  useEffect(() => {
    setInterval(() => setRoadSegmentation(predict()), 1000)
  },[])
  
  // load google maps api
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
        id="map-container"
        center={center}
        zoom={10}
      />
      )}
      <button id="recenter-button" onClick={() => recenter()}>Recenter</button>
    </div>
  )
}
export default Map