import React from 'react'

function SatelliteMapViewKey() {
  return (
    <div id="satellitemapcontainer_key">
      <p>Key</p>
      <div className="row">
        <img className="satellitemapcontainer_key_icons" src="./public/assets/traffix-accident-icon.png"></img>
        <p>Severe</p>
      </div>
      <div className="row">
        <img className="satellitemapcontainer_key_icons" src="./public/assets/traffix-accident-icon.png"></img>
        <p>Moderate</p>
      </div>
      <div className="row">
        <img className="satellitemapcontainer_key_icons" src="./public/assets/traffix-accident-icon.png"></img>
        <p>Animal on road</p>
      </div>
      <div className="row">
        <img className="satellitemapcontainer_key_icons" src="./public/assets/traffix-accident-icon.png"></img>
        <p>Car on fire</p>
      </div>
      <div className="row">
        <img className="satellitemapcontainer_key_icons" src="./public/assets/traffix-accident-icon.png"></img>
        <p>Car rollover</p>
      </div>
    </div>
  )
}

export default SatelliteMapViewKey