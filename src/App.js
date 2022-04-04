import './App.css';
import { React, useState } from 'react';



const App = () => {

//PSEUDOCODE TIME-~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~~_~
// TODO:
// 1. let users input their City, State, and Country
// 2. When they hit "get weather", we store that data in variables for later
// 3. AFTER they click weather we run our fetch
// 4. We display relevant data in a little box

// That should be it - it should function as a normal app

//here is how we fetch in Fahreinheit = https://api.openweathermap.org/data/2.5/weather?q={CITYNAME},{CITYCOUNTRY}&units=imperial&APPID=3826b8ffb7383777e79ffed16c81f6a4

//PSEUDOCODE TIME-~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~~_~

 const [city, setCity] = useState('');
 const [state, setState] = useState('');
 const [country, setCountry] = useState('');

 const [localData, setLocalData] = useState({});

 const SubmissionHandler = async (e) => {
   await
   e.preventDefault();
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&APPID={DONT TRY TO STEAL MY API KEY :( )}`)
   .then(response => response.json())
   .then(data => setLocalData(data))
   console.log(localData);
 }

 const setCityHandler = (e) => {
  setCity(e.target.value);
}

const setStateHandler = (e) => {
  setState(e.target.value);
}


 const setCountryHandler = (e) => {
   setCountry(e.target.value);
 }

  return (
    <div className="App">
      
      <header>
      <h1>Weathertime!</h1>  
      <form>
          <input value={city} onChange={setCityHandler} id="city-input" type="text" placeholder="Type your city here..."/>
          <input value={state} onChange={setStateHandler} id="state-input" type="text" placeholder="VA, CA, NY, etc..." />
          <input value={country} onChange={setCountryHandler} id="country-input" type="text" placeholder="US, UK, AUS, etc..." />
         <br /><button onClick={SubmissionHandler}><i className="fa-solid fa-magnifying-glass"></i></button>   
        </form>

      </header>

      <div className="info-display">
        {
            localData.id > 0 &&
            (
              <div className="general-info">
                <img src={`http://openweathermap.org/img/wn/${localData.weather[0].icon}@2x.png`} alt="current weather icon"></img>
            
              <div>
                <p>{localData.name + ", " + state}</p>
                <p>{Math.ceil(localData.main.temp)}° F</p>
                <p>{localData.weather[0].description}</p>
              </div>

              </div>
            )
          }
      </div>
      <footer>
      <a href="https://wesleyinsley.com/">Back To Main Page</a> | <a href="" target="_blank">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
