import { Link } from 'react-router-dom'

const Sidebar = () => {
  const sidebarItems = [
    {name: 'Satellite Map View', path: '/satellite-map-view', page: 'SatelliteMapView'},
    {name: 'Drone live feed', path: '/drone-live-feed', page: 'DroneLiveFeed'},
    {name: 'Manage drones', path: '/manage-drones', page: 'DroneManagement'},
  ]
  return (
    <div className="sidebar">
      <img src={"/assets/menu-button.png"} alt="menu button" id='menu_button'/>
      <p className="sidebar_items" id='menu_text'>Menu</p>
      <div className="sidebar_items">
        {sidebarItems.map((item) => {
          return <Link key={item.page} to={item.path}>{item.name}</Link>
        })}
      </div>
    </div>
  )
}

export default Sidebar