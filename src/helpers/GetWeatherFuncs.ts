import { FormEvent } from 'react';
import { setWarning } from '../store/actions/warningActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';
import { CityCoords } from '../store/types';


export const helpGetWeather = (e: FormEvent<HTMLButtonElement>, cityCoords: CityCoords, dispatch: any) => {
	e.preventDefault();

		if(!cityCoords.lon || !cityCoords.lat) {
			dispatch(setWarning('City must be chosen'));
		}
		
		dispatch(setLoading());
		dispatch(getWeather(cityCoords));
}

