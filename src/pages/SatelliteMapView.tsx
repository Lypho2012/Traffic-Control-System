import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

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

  // dashboard tabs
  const [isCongestionListOpened, setIsCongestionListOpened] = useState(false);
  const [isAccidentsListOpened, setIsAccidentsListOpened] = useState(false);

  const congestionListItems = [
    {name: 'Satellite Map View', path: '/satellite-map-view', page: 'SatelliteMapView'}
  ]

  return (
    <div className="page">
      {/* Map */}
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
      <GoogleMap
        id="map-container"
        center={center}
        zoom={zoom}>
      </GoogleMap>
      
      )}

      <button id="recenter-button" onClick={() => recenter()}>Recenter</button>

      {/* Dashboard on right */}
      <div id="satellitemapview_dashboard">
        {/* Navigation Tabs */}
        <div id="satellitemapview_dashboard_tabs">
          <button onClick={() => {setIsCongestionListOpened(true); setIsAccidentsListOpened(false);}}>Congestion</button>
          <button onClick={() => {setIsCongestionListOpened(false); setIsAccidentsListOpened(true);}}>Accidents</button>
        </div>

        {/* Searchbar */}
        <TextField
          id="satellitemapview_dashboard_searchbar"
          variant="outlined"
          fullWidth
          label="Search"
        />

        {/* Display List*/} 
        {isCongestionListOpened ? 
        (<div>
          {congestionListItems.map((item) => {
            return <button className="satellitemapview_dashboard_item">{item.name}</button>
          })}
        </div>) : 
        (<div>
          
        </div>)}
        
      </div>
    </div>
  )
}
export default SatelliteMapView