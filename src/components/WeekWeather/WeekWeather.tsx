import React, { FC } from 'react';
import { ICurrentWeatherProps } from '../CurrentWeather/CurrentWeatherProps';

import './WeekWeather.css';


export const WeekWeather: FC<ICurrentWeatherProps> = ({ data }) => {

	const days = data.daily;
	let celsious:string;
	
	function convertDayOfTheWeek (i: number): string {
		if(i > 6) {
			i -= 6;
		}

		switch (i) {
			case 0:
				return 'Monday';
			case 1:
				return 'Tuesday';
			case 2:
				return 'Wednesday';
			case 3:
				return 'Thursday';
			case 4:
				return 'Friday';
			case 5:
				return 'Saturday';
			case 6:
				return 'Sunday';
			default:
				return '';
		}
	}
	return (
		<div className="card__wrapper">
			{
				
				days.map((day, i) => {
					celsious = (day.temp.day - 273.15).toFixed(2);
					return (
						<div className="card__item">
							<div className="card__title">{convertDayOfTheWeek(new Date().getDay() + i)}</div>
							<div className="card__category">Temp: {celsious}<sup>&#8451;</sup></div>
							<div className="card__category">Humidity: <span>{day.humidity}</span></div>
							<div className="card__price">Pressure: {day.pressure}</div>
							<div className="card__price">Wind: <span>{day.wind_speed} m/s</span></div>
							{/* <img src={`http://openweathermap.org/img/wn/${day.weather[i].icon}.png`} alt="weather"/> */}
						</div>
					)
					
				})
			}
			
		</div>
	)
}