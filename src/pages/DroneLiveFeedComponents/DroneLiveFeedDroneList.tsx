import React from 'react'
import { useSelector } from 'react-redux';
import { drones } from '../DroneLiveFeed';

function DroneLiveFeedDroneList() {
  return (
    <div className='dronelivefeed_dronelist'>
        {drones.map((item) => {return <button className='dronelivefeed_dronelist_item'>
        <div className="dronelivefeed_dronelist_item_status"></div>
          {item.status == 'rest' ? (<div className="dronelivefeed_dronelist_item_status"></div>) 
          : (<div className="dronelivefeed_dronelist_item_status"></div>)}
          <p>{item.index}</p>
          <img src="public/assets/dji-phantom4.jpeg" className='drone_image'></img>
          <div>
            <p>{item.name}</p>
            <p>ID: {item.id}</p>
            <p>Current location: {item.location}</p>
          </div>
        </button>;})}
      </div>
  )
}

export default DroneLiveFeedDroneList