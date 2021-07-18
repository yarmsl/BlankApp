import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useAlert } from '../contexts/AlertContext';

const Main = () => {

	const {show} = useAlert();

	return (
		<>
			<Typography variant='h4'>Привет в примере с useContext</Typography>
			<Button onClick={show} variant='contained' color='primary'>Показать alert</Button>
		</>
	);
};

export default Main;
