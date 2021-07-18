import React, { useState, useMemo, useEffect } from 'react';
import { Button, ButtonGroup, Typography } from '@material-ui/core';

function complexCompute(num) {
	let i = 0;
	while (i < 1000000000) i++;
	return num * 2;
}

const Page4 = () => {

	const [number, setNumber] = useState(42);

	const [colored, setColored] = useState(false);

	const styles = useMemo(() => {
		return colored ? 'primary' : 'secondary';
	}, [colored]); 

	const computed = useMemo(() => {
		return complexCompute(number);
	}, [number]);

	useEffect(() => {
		console.log('style changed');
	}, [styles]);

	return (
		<>
			<Typography variant='h2'>useMemo</Typography>
			<Typography variant='h4' color={styles}>Вычисляемое свойство: {computed}</Typography>
			<ButtonGroup>
				<Button variant='outlined' color='primary' onClick={() => setNumber(prev => prev - 1)}>Убавить</Button>
				<Button variant='outlined' color='secondary' onClick={() => setNumber(prev => prev + 1)}>Добавить</Button>
				<Button variant='contained' color='secondary'  onClick={() => setColored(prev => !prev)}>Изменить цвет</Button>
			</ButtonGroup>
		</>
	);
};

export default Page4;
