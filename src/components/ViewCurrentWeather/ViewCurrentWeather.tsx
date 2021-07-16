import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setWarning } from '../../store/actions/warningActions';
import { setError } from '../../store/actions/weatherActions';
import Warning from '../Warning/Warning';
import CurrentWeather from '../CurrentWeather/CurrentWeather';


export const ViewCurrentWeather: FC = () => {
	const dispatch = useDispatch();
	const {data: weatherData, loading, error} = useSelector((state: RootState) => state.weather);
	const {message} = useSelector((state: RootState) => state.alert);

	// const {weatherData, loading, error, message} = props
	return (
		<>
			{loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <CurrentWeather data={weatherData} />}

			{message && <Warning message={message} onClose={() => dispatch(setWarning(''))} />}
			{error && <Warning message={error} onClose={() => dispatch(setError())} />}
		</>
	)
}
