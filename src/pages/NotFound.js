import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}
}));

const NotFound = () => {

	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Typography variant='h1'>404</Typography>
			<Typography>Такой страницы пока нет, она появится в ближайшее время, а пока</Typography>
			<Button component={ Link } to='/' color='primary'>вернитесь на главную</Button>
		</Box>
	);
};

export default NotFound;
