import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { GET_WEATHER, SET_ALERT, SET_ERROR, SET_LOADING, WeatherAction, WeatherData, WeatherError } from '../types';


export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
	return async dispatch => {
		try {
			const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
			if(!res.ok) {
				throw new Error('An error occured');
			}
			const resData: WeatherData = await res.json();
			dispatch({
				type: GET_WEATHER,
				payload: resData
			});
		} catch(e) {
			dispatch({
				type: SET_ERROR,
				payload: e.message
			});
		}
	}
}

export const setLoading = (): WeatherAction => {
	return {
		type: SET_LOADING
	};
}

export const setError = (): WeatherAction => {
	return {
		type: SET_ERROR,
		payload: ''
		
	};
}