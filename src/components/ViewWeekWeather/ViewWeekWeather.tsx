import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setWarning } from '../../store/actions/warningActions';
import { setError } from '../../store/actions/weatherActions';
import Warning from '../Warning/Warning';
import { WeekWeather } from '../WeekWeather/WeekWeather';


export const ViewWeekWeather: FC = () => {

	const dispatch = useDispatch();
	const {data: weatherData, loading, error} = useSelector((state: RootState) => state.weather);
	const {message} = useSelector((state: RootState) => state.alert);
	
	return (
		<>
			{loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <WeekWeather data={weatherData} />}

			{message && <Warning message={message} onClose={() => dispatch(setWarning(''))} />}
			{error && <Warning message={error} onClose={() => dispatch(setError())} />}
		</>
	);
}