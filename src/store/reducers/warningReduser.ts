import { WarningAction, WarningState, SET_WARNING } from '../types';

const initialState: WarningState = {
	message: ''
}

export default (state = initialState, action: WarningAction) : WarningState => {
	switch(action.type) {
		case SET_WARNING: 
			return {
				message: action.payload
			};
		default:
			return state;
	}
}