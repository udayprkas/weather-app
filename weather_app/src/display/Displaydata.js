import React from 'react';
import './displaydata.css';
const Displaydata = (props) => {
  return(
    <div className="body-container4">
      <div className="header">
        {props.cityinfo},{props.country},{props.date}
      </div>
      <div className="bdy-container">
      <div className="bdy-container1">
        {props.tmpmx}<sup className="sup1">0</sup>C
        <img src={props.icon} alt="icon"/>
      </div>
      <div className="bdy-container2">
        <div className="desc">
        Weather: {props.description}<br/>
      Wind: {props.wind} Km/hr
      </div>
      <div className="desc">
        Humidity: {props.humidity}%<br/>
      Pressure: {props.pressure}Pa
      </div>
      <div className="desc">
        Max Temp: {props.tmpmx}<sup className="sup">0</sup>C<br/>
      Min Temp: {props.tmpmn}<sup className="sup">0</sup>C
      </div>
      <div className="desc">
        Sunrise: {props.sunrise}<br/>
      Sunset: {props.sunset}
      </div>
      </div>
    </div>
  </div>
  )
}
export default Displaydata;
