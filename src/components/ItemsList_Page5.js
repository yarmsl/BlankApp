import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const ItemsList = ({getItems}) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const newItems = getItems();
		setItems(newItems);
		console.log('Items Render');
	}, [getItems]);

	return (
		<ul>
			{items.map((item, i) => <li key={i}>{item}</li>)}
		</ul>
	);
};

ItemsList.propTypes = {
	getItems: PropTypes.func
};

export default ItemsList;
