import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const AlertContext = createContext();

export const useAlert = () => {     //Правильное оформление контекста
	return useContext(AlertContext);
};

const SHOW_ALERT = 'show';
const HIDE_ALERT = 'hide';

const reducer = (state, action) => {
	switch (action.type) {
	case SHOW_ALERT: 
		return true;
	case HIDE_ALERT: 
		return false;
	default: 
		return state;
	}
};

const AlertProvider = ({ children }) => {  //Правильное оформление провайдера

	const [state, dispatch] = useReducer(reducer, false);

	const show = () => dispatch({type: SHOW_ALERT});
	const hide = () => dispatch({type: HIDE_ALERT});

	return (
		<AlertContext.Provider value={{ state, show, hide }}>
			{children}
		</AlertContext.Provider>
	);
};

AlertProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default AlertProvider;