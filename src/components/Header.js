import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, ButtonGroup, Container, makeStyles, Typography } from '@material-ui/core';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import PagesRoundedIcon from '@material-ui/icons/PagesRounded';
// import {useMedia} from '../hooks/useMedia';

const useStyles = makeStyles(() => ({
	header: {
		height: '100px',
	},
	root: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	top: {
		display: 'flex'
	},
	logo: {
		flexGrow: 1
	},
	btns: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		
	},
}));

const Header = () => {

	const classes = useStyles();
	// const {matchesHD} = useMedia();
	return (
		<AppBar className={classes.header} position='sticky'>
			<Container className={classes.root}>
				<Box className={classes.top}>
					<Typography className={classes.logo}>React MaterialUI App</Typography>
					<Button component={ Link } to='/' variant='outlined' color='inherit' startIcon={<AppsRoundedIcon/>}>Главная</Button>
				</Box>
				<Box className={classes.btns}>
					<ButtonGroup variant='contained' color='secondary' size='small' >
						<Button component={ Link } to='/page1' endIcon={<PagesRoundedIcon/>}>useState</Button>
						<Button component={ Link } to='/page2' endIcon={<PagesRoundedIcon/>}>useEffect</Button>
						<Button component={ Link } to='/page3' endIcon={<PagesRoundedIcon/>}>useRef</Button>
						<Button component={ Link } to='/page4' endIcon={<PagesRoundedIcon/>}>useMemo</Button>
						<Button component={ Link } to='/page5' endIcon={<PagesRoundedIcon/>}>useCallback</Button>
						<Button component={ Link } to='/page6' endIcon={<PagesRoundedIcon/>}>useContext & useReducer</Button>
						<Button component={ Link } to='/page7' endIcon={<PagesRoundedIcon/>}>user`s hook</Button>
					</ButtonGroup>
				</Box>	
			</Container>
		</AppBar>
	);
};

export default Header;
