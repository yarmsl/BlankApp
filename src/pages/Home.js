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
				<Typography variant='h3' color='secondary'>useRef</Typography>
				<Typography>
					Изменеие поля current этого хука не вызывает перерендеринг компнента
				</Typography>
				<Typography>
					Используется для получения HTML элементов через атрибут ref
				</Typography>
				<Typography>
					Можно использовать для сохранения предыдущих состояний useState
				</Typography>
				<Typography variant='h3' color='secondary'>useMemo</Typography>
				<Typography>
					Используется для кэширования дорогостоящих вычислений, синтаксис наподобие useEffect, в input передаётся стэйт (на который затрачиваются большие вычислительные мощности). При таком использовании остальные состояния не будут вызывать дорогостоящие вычисления.
				</Typography>
				<Typography variant='h3' color='secondary'>useCallback</Typography>
				<Typography>
					Используется для оптимизации работы состояний при работе с функциями / передаче функций через пропсы. Синтаксис как у useMemo
				</Typography>
				<Typography variant='h3' color='secondary'>useContext</Typography>
				<Typography>
					Используется для получения значений из провайдера 
				</Typography>
				<Typography>
					Для правильного офромления создаётся отдельный файл, в котором создаётся контекст, свой хук для передачи контекста и обёртка для провайдера
				</Typography>
				<Typography variant='h3' color='secondary'>useReducer</Typography>
				<Typography>
					Используется для изменения сложных состояний, принимает в себя функцию редюсер и начальное состояние, возвращает кортеж из состояния и функции диспатч для изменения этого состояния
				</Typography>
			</Box>
			

		</>
	);
}

export default Home;