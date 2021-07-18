import React from 'react';
import { Typography } from '@material-ui/core';
import Main from '../components/Main_Page6';
import AlertMessage from '../components/Alert_Page6';
import AlertProvider from '../contexts/AlertContext';

const Page6 = () => {

	return (
		<AlertProvider>
			<Typography variant='h2'>useContext</Typography>
			<Main/>
			<AlertMessage />
		</AlertProvider>
	);
};

export default Page6;