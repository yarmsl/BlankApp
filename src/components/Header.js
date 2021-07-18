import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, ButtonGroup, Container, makeStyles, Typography } from '@material-ui/core';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import PagesRoundedIcon from '@material-ui/icons/PagesRounded';

const useStyles = makeStyles(() => ({
	header: {
		height: '100px',
	},
	root: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		flexGrow: 1
	}
}));

const Header = () => {

	const classes = useStyles();

	return (
		<AppBar className={classes.header} position='sticky'>
			<Container className={classes.root}>
				<Typography className={classes.logo}>React MaterialUI App</Typography>
				<ButtonGroup variant='contained' color='secondary'>
					<Button component={ Link } to='/' startIcon={<AppsRoundedIcon/>}>Главная</Button>
					<Button component={ Link } to='/page1' endIcon={<PagesRoundedIcon/>}>Page1</Button>
					<Button component={ Link } to='/page2' endIcon={<PagesRoundedIcon/>}>Page2</Button>
				</ButtonGroup>
			</Container>
		</AppBar>
	);
};

export default Header;
