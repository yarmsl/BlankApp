import React from 'react';
import { Button, Container, makeStyles, Paper, Typography } from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';


const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '55px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	},
	mail: {
		position: 'absolute',
		right: '24px'
	}
}));

const Footer = () => {

	const classes = useStyles();

	return (
		<Paper component='footer' square>
			<Container className={classes.root}>
				<Typography>Blank App 2021</Typography>
				<Button 
					className={classes.mail}
					href={'https://t.me/Yaroslavmsl'} 
					startIcon={<EmailRoundedIcon/>}
					variant='contained'
					color='primary'>
						Yaroslav M.
				</Button>
			</Container>
		</Paper>
	);
};

export default Footer;
