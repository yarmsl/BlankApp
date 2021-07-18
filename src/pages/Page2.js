import React, { useState, useEffect } from 'react';
import {Box, Button, ButtonGroup, Typography } from '@material-ui/core';

const Page2 = () => {

	const [type, setType] = useState('users');
	const [data, setData] = useState([]);
	const [pos, setPos] = useState({x: 0, y: 0});

	useEffect(() => {
		console.log('type changed', type);
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then(response => response.json())
			.then(json => setData(json));
		return () => console.log('clean type');
	}, [type]);

	const mouseMoveHandler = e => setPos({x: e.clientX, y: e.clientY});

	useEffect(() => {
		console.log('ComponentDidMount');

		window.addEventListener('mousemove', mouseMoveHandler);

		return () => {
			window.removeEventListener('mousemove', mouseMoveHandler);
		};

	}, []);

	return (
		<>
			<Typography variant='h2'>useEffect</Typography>
			<Typography variant='h4'>Состояние: {type}</Typography>
			<ButtonGroup>
				<Button variant='contained' color='primary' onClick={() => setType('users')}>Пользователи</Button>
				<Button variant='outlined' color='secondary' onClick={() => setType('todos')}>Todos</Button>
				<Button variant='contained' color='secondary' onClick={() => setType('posts')}>Посты</Button>
			</ButtonGroup>
			<Box>{JSON.stringify(pos, null, 2)}</Box>
			<Box>{JSON.stringify(data, null, 2)}</Box>
		</>
	);
};

export default Page2;
