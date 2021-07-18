import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './UI/theme';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';

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
						<Route exact path='/page3' component={Page3} />
						<Route exact path='/page4' component={Page4} />
						<Route exact path='/page5' component={Page5} />
						<Route exact path='/page6' component={Page6} />
						<Route exact path='/page7' component={Page7} />
						<Route component={NotFound} />
					</Switch>
				</MainLayout>
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);