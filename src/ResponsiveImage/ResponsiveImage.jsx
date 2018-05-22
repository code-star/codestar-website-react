import React from 'react';
import css from './ResponsiveImage.module.css';

const getResponsiveImageUrl = (imagePath, size = null) => {
	return (
		`${process.env.REACT_APP_CLOUDINARY_URLBASE}/` +
		`f_auto/w_${size}/` +
		`${process.env.REACT_APP_CLOUDINARY_ID}/` +
		`${process.env.REACT_APP_CLOUDINARY_IMAGES_DIRECTORY}/` +
		`${imagePath}`
	);
};

const getResponsiveSrcSet = (imagePath, sizes) => {
	return sizes
		.map(size => `${getResponsiveImageUrl(imagePath, size)} ${size}w`)
		.join(', ');
};

const ResponsiveImage = props =>
	props.path && (
		<img
			src={`${process.env.PUBLIC_URL}/${props.path}`}
			srcSet={getResponsiveSrcSet(props.path, [375, 800, 1280, 1536, 1920])}
			sizes="100vw"
			alt=""
			className={css.asBackgroundImage}
		/>
	);

export default ResponsiveImage;
