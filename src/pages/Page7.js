import React, { useState, useEffect } from 'react';
import {Button, TextField, Typography } from '@material-ui/core';

function useLogger(value) {
	useEffect(() => {
		console.log('value changed', value);
	}, [value]);
}

function useInput(initVal) {
	const [value, setValue] = useState(initVal);

	const onChange = e => {
		setValue(e.target.value);
	};

	const clear = () => setValue('');

	return {
		bind: {value, onChange},
		value,
		clear
	};
}

const Page7 = () => {

	const input = useInput('');
	const lastName = useInput('');
	useLogger(input.value);

	return (
		<>
			<Typography variant='h2'>user`s hook</Typography>
			<Typography variant='h4'>{input.value}</Typography>
			<Typography variant='h4'>{lastName.value}</Typography>
			<TextField
				variant='outlined'
				label='Введите имя'
				{...input.bind}
			/>
			<hr/>
			<TextField
				variant='outlined'
				label='Введите фамилию'
				{...lastName.bind}
			/>
			<hr/>
			<Button variant='outlined' color='secondary' onClick={() => input.clear()}>Очистить Имя</Button>
			<hr/>
			<Button variant='outlined' color='secondary' onClick={() => lastName.clear()}>Очистить Фамилию</Button>
		</>
	);
};

export default Page7;
