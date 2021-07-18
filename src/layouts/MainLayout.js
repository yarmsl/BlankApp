import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { Box, Container, makeStyles } from '@material-ui/core';
import Footer from '../components/Footer';

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	main: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}
}));

const MainLayout = ({children}) => {

	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Header/>
			<Container  className={classes.main}>
				{children}
			</Container>
			<Footer/>
		</Box>
	);
};

MainLayout.propTypes = {
	children: PropTypes.node.isRequired
};

export default MainLayout;