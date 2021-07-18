import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './UI/theme';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<MainLayout>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/page1' component={Page1} />
						<Route exact path='/page2' component={Page2} />
						<Route component={NotFound} />
					</Switch>
				</MainLayout>
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);