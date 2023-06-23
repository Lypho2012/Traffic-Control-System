const Header = () => {
  return (
    <div className="header">
      <p className="header_items">Smart City</p>
      <p className="header_items">Date</p>
      <div className="profile">
        <img src={"/assets/profile-pic.png"}/>
        <p>Name</p>
      </div>
    </div>
  )
}

export default Header