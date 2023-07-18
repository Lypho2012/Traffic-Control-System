import {useEffect, useState} from "react";

const Header = () => {
  {/** Time */}
  const [time,setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  },[])

  {/** Weather */}
  const [temp, setTemp] = useState(0);
  const [lat, setLat] = useState(0); // TODO: sync this with position on map
  const [lon, setLon] = useState(0);
  const [theme, setTheme] = useState("");
  const [city, setCity] = useState("City");
  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aa3b70851ff3cfaab595923162142fe3
&units=metric`)
      .then(response => response.json())
      .then(data => {
        setTemp(Math.ceil(data?.main?.temp));
        setTheme(data.weather[0].main);
      });

  }, []);

  return (
    <div className="header">
      <p className="header_items" id="smart_city">City Traffic Report</p>
      <p className="header_items">{time.toLocaleTimeString()}</p>
      <p className="header_items">{time.toLocaleDateString()}</p>
      <p className="header_items">{temp}&deg; {theme}</p>
      <p className="header_items">{city}</p>

      <div className="profile">
        <img src={"/assets/profile-pic.png"}/>
        <div className="profile_text">
        <p>Name</p>
        </div>
      </div>
    </div>
  )
}

export default Header