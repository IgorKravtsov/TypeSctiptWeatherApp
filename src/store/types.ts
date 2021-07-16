const GET_WEATHER_DATA = 'GET_WEATHER_DATA',
	  WEATHER_LOADING = 'WEATHER_LOADING',
	  WEATHER_ERROR = 'WEATHER_ERROR',
	  SET_WARNING = 'SET_WARNING';

export {
	GET_WEATHER_DATA,
	WEATHER_LOADING,
	WEATHER_ERROR,
	SET_WARNING
}

export interface WeatherData {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: Current
  daily: Daily[]
}

export interface Current {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: Weather[]
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Daily {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  temp: Temp
  feels_like: FeelsLike
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: Weather[]
  clouds: number
  pop: number
  uvi: number
  rain?: number
}

interface Temp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

interface FeelsLike {
  day: number
  night: number
  eve: number
  morn: number
}

export interface WeatherError {
	cod: string;
	message: string;
}

export interface WeatherState {
	data: WeatherData | null;
	loading: boolean;
	error: string;
}

interface GetWeatherAction {
	type: typeof GET_WEATHER_DATA;
	payload: WeatherData;
}

interface SetLoadingAction {
	type: typeof WEATHER_LOADING;
}

interface SetErrorAction {
	type: typeof WEATHER_ERROR;
	payload: string;
}

export type WeatherAction = GetWeatherAction | SetErrorAction | SetLoadingAction;

export interface WarningAction {
	type: typeof SET_WARNING;
	payload: string;
}

export interface WarningState {
	message: string;
}

export interface CityCoords {
	lon: string | null;
	lat: string | null;	
}

export interface CitiesWithCoords {
	name: string;
	coords: string;
}