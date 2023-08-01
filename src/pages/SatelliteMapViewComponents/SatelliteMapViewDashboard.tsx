import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import SatelliteMapViewCongestionPage from './SatelliteMapViewCongestionPage';
import SatelliteMapViewAccidentPage from './SatelliteMapViewAccidentPage';

function SatelliteMapViewDashboard() {
  // dashboard tabs
  const [isCongestionListOpened, setIsCongestionListOpened] = useState(false);
  const [isAccidentsListOpened, setIsAccidentsListOpened] = useState(false);

  // dashboard list
  const congestionListItems = [
    {index: 1, location: 'Blossom Hill Rd Exit 4 to Almaden Expy Exit 6', time: '15:39', highways: ['85N','85S'], severity: '40', details: []},
    {index: 2, location: 'Blossom Hill Rd Exit 4 to Almaden Expy Exit 6', time: '15:39', highways: ['85N','85S'], severity: '40', details: []}
  ]

  const accidentListItems = [
    {index: 1, location: 'After Blossom Hill Rd Exit 4, right lane', time: '15:39', highways: ['85N'], details: []},
    {index: 2, location: 'After Blossom Hill Rd Exit 4, right lane', time: '15:39', highways: ['85N'], details: []}
  ]
  return (
    <div id="satellitemapview_dashboard">
      {/** Routes */}
      <Routes>
        <Route path="/satellite-map-view/accident/:accidentID" element={<SatelliteMapViewCongestionPage/>}></Route>
        <Route path="/satellite-map-view/congestion/:congestionID" element={<SatelliteMapViewAccidentPage/>}></Route>
      </Routes>

      {/* Navigation Tabs */}
      <div className="satellitemapview_dashboard_tabs">
        <button onClick={() => {setIsCongestionListOpened(true); setIsAccidentsListOpened(false);}}>Congestion</button>
        <button onClick={() => {setIsCongestionListOpened(false); setIsAccidentsListOpened(true);}}>Accidents</button>
      </div>

      {/* Searchbar */}
      <TextField
        id="satellitemapview_dashboard_searchbar"
        variant="outlined"
        label="Search"
      />

      {/* Display List*/} 
      {isCongestionListOpened ? 
      (<div>
        {congestionListItems.map((item) => {
          return <button className="satellitemapview_dashboard_item">
            <div className="satellitemapview_dashboard_item_contents">
              <p className="satellitemapview_dashboard_item_index">{item.index}</p>
              <div className="satellitemapview_dashboard_item_contents_middle">
                <p>{item.location}</p>
                <progress value={item.severity} max="100" color="red">{item.severity}</progress>
                <div className="satellitemapview_dashboard_item_contents_highwaylist">{item.highways.map((highway) => {return <p className="satellitemapview_dashboard_item_contents_highways">{highway}</p>})}</div>
              </div>
              <p className="satellitemapview_dashboard_item_time">{item.time}</p>
            </div>
          </button>
        })}
      </div>) : 
      (<div>
        {accidentListItems.map((item) => {
          return <button className="satellitemapview_dashboard_item">
            <div className="satellitemapview_dashboard_item_contents">
              <p className="satellitemapview_dashboard_item_index">{item.index}</p>
              <img src="./public/assets/traffic-accident-icon-black.png" width="30px" height="30px"></img>
              <div className="satellitemapview_dashboard_item_contents_middle">
                <p>{item.location}</p>
                <div className="satellitemapview_dashboard_item_contents_highwaylist">{item.highways.map((highway) => {return <p className="satellitemapview_dashboard_item_contents_highways">{highway}</p>})}</div>
              </div>
              <p className="satellitemapview_dashboard_item_time">{item.time}</p>
            </div>
          </button>
        })}
      </div>)}
      
    </div>
  )
}

export default SatelliteMapViewDashboard