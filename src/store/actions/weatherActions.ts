import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { CityCoords, GET_WEATHER_DATA, WEATHER_ERROR, WEATHER_LOADING, WeatherAction, WeatherData } from '../types';

export const getWeather = (city: CityCoords): ThunkAction<void, RootState, null, WeatherAction> => {
	const { lon, lat } = city;
	return async dispatch => {
		try {
			const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&unit=metric&appid=${process.env.REACT_APP_API_KEY}`);
			if(!res.ok) {
				throw new Error('An error occured');
			}
			const resData: WeatherData = await res.json();
			dispatch({
				type: GET_WEATHER_DATA,
				payload: resData
			});
		} catch(e) {
			dispatch({
				type: WEATHER_ERROR,
				payload: e.message
			});
		}
	}
}

export const setLoading = (): WeatherAction => {
	return {
		type: WEATHER_LOADING
	};
}

export const setError = (): WeatherAction => {
	return {
		type: WEATHER_ERROR,
		payload: ''
		
	};
}