import React, { useState, useCallback } from 'react';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import ItemsList from '../components/ItemsList_Page5';

const Page4 = () => {

	const [count, setCount] = useState(5);

	const [colored, setColored] = useState(false);

	const styles = () => colored ? 'primary' : 'secondary';

	const genItemsFromAPI = useCallback(() => {
		return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`);
	},[count]);

	return (
		<>
			<Typography variant='h2'>useCallback</Typography>
			<Typography variant='h4' color={styles()}>Количество элементов: {count}</Typography>
			<ButtonGroup>
				<Button variant='outlined' color='secondary' onClick={() => setCount(prev => prev + 1)}>Добавить</Button>
				<Button variant='contained' color='secondary' onClick={() => setColored(prev => !prev)}>Изменить цвет</Button>
			</ButtonGroup>
			<ItemsList getItems={genItemsFromAPI} />
		</>
	);
};

export default Page4;