import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";

function Map() {
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
    /*
    size_x=(image.shape[1]//patch_size)*patch_size
    size_y=(image.shape[0]//patch_size)*patch_size
    image=Image.fromarray(image)
    image=image.crop((0,0,size_x,size_y))
    image=np.array(image)
    patched_images=patchify(image,(patch_size,patch_size,3),step=patch_size)
    for i in range(patched_images.shape[0]):
      for j in range(patched_images.shape[1]):
        individual_patched_image = patched_images[i,j,:,:]
        individual_patched_image = minmaxscaler.fit_transform(individual_patched_image.reshape(-1,individual_patched_image.shape[-1])).reshape(individual_patched_image.shape)
        individual_patched_image = individual_patched_image[0]
        image_dataset.append(individual_patched_image)
    */
    /*
    class_building = '#3C1098'
    class_building = class_building.lstrip('#')
    class_building = np.array(tuple(int(class_building[i:i+2], 16) for i in (0,2,4)))

    class_land = '#8429F6'
    class_land = class_land.lstrip('#')
    class_land = np.array(tuple(int(class_land[i:i+2],16) for i in (0,2,4)))

    class_road = '#6EC1E4'
    class_road = class_road.lstrip('#')
    class_road = np.array(tuple(int(class_road[i:i+2],16) for i in (0,2,4)))

    class_vegetation = '#FEDD3A'
    class_vegetation = class_vegetation.lstrip('#')
    class_vegetation = np.array(tuple(int(class_vegetation[i:i+2],16) for i in (0,2,4)))

    class_water = '#E2A929'
    class_water = class_water.lstrip('#')
    class_water = np.array(tuple(int(class_water[i:i+2],16) for i in (0,2,4)))

    class_unlabeled = '#9B9B9B'
    class_unlabeled = class_unlabeled.lstrip('#')
    class_unlabeled = np.array(tuple(int(class_unlabeled[i:i+2],16) for i in (0,2,4)))
    */
  }

  /**
   * Uses google maps current window to predict road segmentation and returns overlay
   */
  async function predict() {
    const model = loadModel();
    const currentMap = tf.browser.fromPixels(document.querySelector("#static-image") as HTMLImageElement);
    const prediction = (await model).predict(preprocess(currentMap));
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
    <div className="page">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
      <GoogleMap
        id="map-container"
        center={center}
        zoom={zoom}>
      </GoogleMap>
      
      )}
      <img id="static-image" src={`https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=300x300&maptype=roadmap&key=${import.meta.env.VITE_GOOGLE_API_KEY}`}></img>

      <button id="recenter-button" onClick={() => recenter()}>Recenter</button>
    </div>
  )
}
export default Map