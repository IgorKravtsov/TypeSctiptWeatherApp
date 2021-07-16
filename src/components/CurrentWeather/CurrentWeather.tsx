import { FC } from 'react';
import { ICurrentWeatherProps } from './CurrentWeatherProps';



const CurrentWeather:FC<ICurrentWeatherProps> = ({ data }) => {
	const fahrenheit = (data.daily[0].temp.eve * 1.8 - 459.67).toFixed(2),
        celsius = (data.daily[0].temp.eve - 273.15).toFixed(2); 
	
	return(
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered" style={{marginBottom: 50}}>{data.lat}; {data.lon}</h1>
        <div className="level" style={{alignItems: 'flex-start'}}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{data.current.weather[0].description}</p>
              <p className="title"><img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`} alt=""/></p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">temp</p>
              <div className="title">
                <p className="mb-2">{data.current.temp}K</p>
                <p className="mb-2">{fahrenheit}<sup>&#8457;</sup></p>
                <p>{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">humidity</p>
              <p className="title">{data.current.humidity}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">pressure</p>
              <p className="title">{data.current.pressure}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">wind</p>
              <p className="title">{data.current.wind_speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;