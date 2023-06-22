import { Link } from 'react-router-dom'

const Sidebar = () => {
  const sidebarItems = [
    {name: 'Map', path: '/'},
    {name: 'Drone Management', path: '/drone-management'},
  ]
  return (
    <div className="sidebar">
      <img src={"/assets/menu-button.png"} alt="menu button" onClick={onClickMenu} width="30" height="30" className='menu_button'/>
      <p className='sidebar_items menu_button'>Menu</p>
      <div className="sidebar_items">
      {sidebarItems.map((item) => {
        return <Link key={item.name} to={item.path}>{item.name}</Link>
      })}
      </div>
    </div>
  )
}

function onClickMenu() {

}

export default Sidebar