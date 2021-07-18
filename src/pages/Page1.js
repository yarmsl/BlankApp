import React, {useState} from 'react';
import { Box, Button, ButtonGroup, Typography } from '@material-ui/core';

const computeInitCount = () => {
	console.log('cacl...');
	return Math.trunc(Math.random() * 20);
};

const Page1 = () => {

	const [counter, setCounter] = useState(computeInitCount); //для оптимизации вместо вызова функции, передать коллбэк

	const increment = () => setCounter(prev => prev + 1); //изменение предыдущего состояния
	const decrement = () => setCounter(counter - 1);

	const [data, setData] = useState({
		title: 'Счётчик',
		date: Date.now()
	});

	const updateTitle = () => setData(prev => { //изменение предыдущего состояния для состояний объектов
		return {
			...prev,
			title: 'Перерасчётчик'
		};
	});

	return (
		<>
			<Typography variant='h2'>useState</Typography>
			<Typography>Состояние: {counter}</Typography>
			<ButtonGroup>
				<Button variant='contained' color='primary' onClick={decrement}>Убавить</Button>
				<Button variant='contained' color='secondary' onClick={increment}>Добавить</Button>
			</ButtonGroup>
			<Box>
				<pre>
					{JSON.stringify(data, null, 2)}
				</pre>
			</Box>
			<Button variant='outlined' color='primary' onClick={updateTitle}>Изменить data.title</Button>
		</>
	);
};

export default Page1;
