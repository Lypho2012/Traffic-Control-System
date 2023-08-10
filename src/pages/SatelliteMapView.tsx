import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import SatelliteMapViewDashboard from "./SatelliteMapViewComponents/SatelliteMapViewDashboard";
import SatelliteMapViewKey from "./SatelliteMapViewComponents/SatelliteMapViewKey";

function SatelliteMapView() {
  /** 
   * Load satellite segmentation model 
  */
  async function loadModel() {
    return await tf.loadLayersModel("public/models/satellite_segmentation_30/model.json");
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
          setZoom(10);
        }
      );
    } else {
      // Browser doesn't support Geolocation
      throw Error("Error: Your browser doesn't support geolocation.");
    }
  }

  /**
   * Processes image to patches before predicting
   */
  async function process_image(image:tf.Tensor) {
    
    return image;
  }

  /**
   * Uses google maps current window to predict road segmentation and returns overlay
   */
  async function predict() {
    const model = loadModel();
    const currentMap = tf.browser.fromPixels(document.querySelector("#static-image") as HTMLImageElement);
    const prediction = (await model).predict(await process_image(currentMap));
    return prediction;
  }

  // update road segmentation overlay in real-time
  const [roadSegmentation,setRoadSegmentation] = useState(predict()); 

  useEffect(() => {
    setInterval(() => setRoadSegmentation(predict()), 1000)
  },[])
  
  // load google maps api
  const [center,setCenter] = useState({ lat: 37, lng: -122 });
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const [zoom,setZoom] = useState(10);

  return (
    <div>
      {/* Map */}
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
      <GoogleMap
        id="satellitemapcontainer"
        center={center}
        zoom={zoom}>
          <SatelliteMapViewKey></SatelliteMapViewKey>
      </GoogleMap>
      )}

      {/** Recenter button */}
      <button id="recenter-button" onClick={() => recenter()}>Recenter</button>

      {/* Dashboard on right */}
      <SatelliteMapViewDashboard/>
    </div>
  )
}
export default SatelliteMapView