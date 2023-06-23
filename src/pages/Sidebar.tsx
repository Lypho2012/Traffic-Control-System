import { Link } from 'react-router-dom'

const Sidebar = () => {
  const sidebarItems = [
    {name: 'Map', path: '/'},
    {name: 'Drone Management', path: '/drone-management'},
  ]
  return (
    <div className="sidebar">
      <img src={"/assets/menu-button.png"} alt="menu button" id='menu_button'/>
      <p className="sidebar_items" id='menu_text'>Menu</p>
      <div className="sidebar_items">
        {sidebarItems.map((item) => {
          return <Link key={item.name} to={item.path}>{item.name}</Link>
        })}
      </div>
    </div>
  )
}

export default Sidebar