import { WarningAction, SET_WARNING } from '../types';


export const setWarning = (message: string): WarningAction => {
	return {
		type: SET_WARNING,
		payload: message
	}
}