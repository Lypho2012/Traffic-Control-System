import { Link } from 'react-router-dom'

const Sidebar = () => {
  const sidebarItems = [
    {name: 'Map', path: '/'}
  ]
  return (
    <>
    {sidebarItems.map((item) => {
      <Link key={item.name} to={item.path}>{item.name}</Link>
    })}
    </>
  )
}

export default Sidebar