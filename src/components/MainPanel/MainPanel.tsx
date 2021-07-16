import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CitiesWithCoords, CityCoords } from '../../store/types';
import { ViewCurrentWeather } from '../ViewCurrentWeather/ViewCurrentWeather';
import { ViewWeekWeather } from '../ViewWeekWeather/ViewWeekWeather';
import { helpGetWeather } from '../../helpers/GetWeatherFuncs';
import { IMainPanelProps } from './MainPanelProps';


const MainPanel: FC<IMainPanelProps> = ( {title} ) => {
	const citiesWithCoords: CitiesWithCoords[] = [
		{name: 'Харьков', coords: '50.00;36.10'},
		{name: 'Киев', coords: '50.45;30.51'},
		{name: 'Полтава', coords: '49.35;34.33'},
		{name: 'Одесса', coords: '46.47;30.73'},
	]
	const [cityCoords, setCityCoords] = useState<CityCoords>(parseCoords(citiesWithCoords[0].coords));

	const [currentWeather, setCurrentWeather] = useState<boolean>(false);
	const [weekWeather, setWeekWeather] = useState<boolean>(false);
	
	const dispatch = useDispatch();

	function parseCoords(coords: string): CityCoords {
		const lat = coords.substr(0, coords.indexOf(';')),
			  lon = coords.substr(coords.indexOf(';') + 1);
		return {
			lat,
			lon
		};
	}

	const changeCoords = (e: FormEvent<HTMLSelectElement>) => {
		const coords = e.currentTarget.value;
		setCityCoords(parseCoords(coords));
	}

	const GetCurrentWeatherHandler = (e: FormEvent<HTMLButtonElement>) => {
		helpGetWeather(e, cityCoords, dispatch);

		setCurrentWeather(true);
		setWeekWeather(false);
	}

	const GetWeekWeatherHandler = (e: FormEvent<HTMLButtonElement>) => {
		helpGetWeather(e, cityCoords, dispatch);
		
		setWeekWeather(true);
		setCurrentWeather(false);
	}

	return (
		<>
			<div className="hero is-light has-text-centered">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">{title}</h1>
							<div className="select is-success">
								<select onChange={changeCoords}>
									{
										citiesWithCoords.map(city => {
											return (
												<option key={city.coords} value={city.coords}>{city.name}</option>
											)
										})
									}
								</select>
							</div>
							<button 
								className="button is-primary is-fullwidth" 
								style={{maxWidth: 300, margin: '0 auto', marginTop: '15px'}}
								onClick={GetCurrentWeatherHandler}>Get current weather
							</button>
					
							<button 
								className="button is-primary is-fullwidth" 
								style={{maxWidth: 300, margin: '0 auto', marginTop: '15px'}}
								onClick={GetWeekWeatherHandler}>Get weather week forecast
							</button>
					</div>
				</div>
			</div>
			{currentWeather && <ViewCurrentWeather/>}
			{weekWeather && <ViewWeekWeather/>}
		</>
	);
}

export default MainPanel;