import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useAlert } from '../contexts/AlertContext';
import { Button } from '@material-ui/core';

const AlertMessage = () => {

	const {state, hide} = useAlert();

	if (!state) return null;

	return (
		<>
			<Alert severity='warning' >
				<AlertTitle>Осторожно!</AlertTitle>
				Важное сообщение
				<Button onClick={hide}>Закрыть</Button>
			</Alert>
		</>
	);
};

export default AlertMessage;
