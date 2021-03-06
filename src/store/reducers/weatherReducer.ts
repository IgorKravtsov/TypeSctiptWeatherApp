import { WeatherState, WeatherAction, GET_WEATHER_DATA, WEATHER_LOADING, WEATHER_ERROR } from '../types';

const initialState: WeatherState = {
	data: null,
	loading: false,
	error: ''
};

export default (state=initialState, action: WeatherAction): WeatherState => {
	switch(action.type) {
		case GET_WEATHER_DATA:
			return {
				data: action.payload,
				error: '',
				loading: false
			};
		case WEATHER_LOADING:
			return {
				...state,
			};
		case WEATHER_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		
		default:
			return state;
	}
}