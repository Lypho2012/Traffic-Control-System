import React from 'react'
import { useParams } from 'react-router-dom';

function DroneLiveFeedVideo() {
  let { droneID } = useParams();
  return (
    <div>
      {/** Live Video Feed (placeholder image) */}
      {!(droneID)?
      <img src='/public/assets/default-image.jpeg' className='dronelivefeed_video'/> : 
      <>
      <img src='/public/assets/default-image.jpeg' className='dronelivefeed_video'/>
      <p>{droneID}</p>
      </>}
    </div>
  )
}

export default DroneLiveFeedVideo