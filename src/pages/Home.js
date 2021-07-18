import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
	}
}));

function Home() {

	const classes = useStyles();

	return (
		<>
			<Typography variant='h2' color='primary'>React Hooks</Typography>
			<Box className={classes.root}>
				<Typography variant='h3' color='secondary'>useState</Typography>
				<Typography>
					Для изменения состояния можно воспользоваться встроенным в setState объектом prev (название можно менять).
				</Typography>
				<Typography>
					Если состояние является объектом, изменение через prev позволит изменить часть объекта, а не весь объект целиком.
				</Typography>
				<Typography>
					Если инит этого хука является вычисляемым значением (функцией) для оптимизации работы приложения следует передавать не саму функцию, а коллбэк на неё.
				</Typography>
				<Typography variant='h3' color='secondary'>useEffect</Typography>
				<Typography>
					Это коллбэк, который срабатывает при загрузке компнента
				</Typography>
				<Typography>
					При передаче в input юзЭффекта стэйта (чего-угодно) коллбэк будет выполнятся каждый раз, когда меняется этот input ([])
				</Typography>
				<Typography>
					Так же есть возможность выполнять какие-то действия между закрытием и открытием компонента передав их в коллбэк return юзЭффекта
				</Typography>
			</Box>
			

		</>
	);
}

export default Home;