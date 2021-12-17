import React from 'react';
import './Styles.css';

const ImagesList = (props) => {
	const imagesCard = props.images.map((img) => {
		return (
			<img
				className="card-wide card-tall"
				key={img.id}
				src={img.urls.regular}
			/>
		);
	});
	return <div className="photo-grid">{imagesCard}</div>;
};

export default ImagesList;
