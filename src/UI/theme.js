import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	breakpoints: {
		keys: {
			0: 'xs',
			1: 'sm',
			2: 'md',
			3: 'lg',
			4: 'xl',
		},
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920
		},
	},
	// palette: {
	// 	primary: {
	
	// 	},
	// 	secondary: {

	// 	},
	// 	error: {

	// 	},
	// 	background: {

	// 	},
	// 	text: {

	// 	}
	// },
	typography: {
		// h1: {

		// },
		// body1: {

		// },
		// body2: {

		// },
		button: {
			textTransform: 'none',
			textDecoration: 'none',
		}
	},
	// shadows: [
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// 	'none',
	// ],
	// shape: {
	// 	borderRadius: 8,
	// },
	overrides: {
		MuiCssBaseline: {
			'@global': {
				html: {
					width: '100%',
					height: '100%'
				},
				body: {
					width: '100%',
					height: '100%'
				},
				'#root': {
					width: '100%',
					height: '100%'
				}
			}
		},
	},
});

export default theme;