import React, {useState, useEffect, useRef} from 'react';
import { Button, Typography } from '@material-ui/core';

const Page3 = () => {

	const renderCount = useRef(1);
	const [value, setValue] = useState('init');
	const inputRef = useRef(null);
	const prevValue = useRef('');

	useEffect( () => {
		renderCount.current++;
		console.log(inputRef);
	});

	useEffect(() => {
		prevValue.current = value;
	}, [value]);

	const focus = () => inputRef.current.focus();

	return (
		<>
			<Typography variant='h2'>useRef</Typography>
			<Typography variant='h4'>Количество рендеров: {renderCount.current}</Typography>
			<Typography variant='h5'>Предыдущее состояние: {prevValue.current}</Typography>
			<input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
			<Button variant='contained' color='secondary' onClick={focus}>Фокус</Button>
		</>
	);
};

export default Page3;