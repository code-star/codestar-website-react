import React from 'react';
import css from './ResponsiveImage.module.css';

const getResponsiveImageUrl = (imagePath, size = null) => {
	return (
		`${process.env.REACT_APP_CLOUDINARY_URLBASE}/` +
		`f_auto/w_${size}/` +
		`${process.env.REACT_APP_CLOUDINARY_ID}/` +
		`${process.env.REACT_APP_CLOUDINARY_IMAGES_DIRECTORY}` +
		`${imagePath}`
	);
};

const getResponsiveSrcSet = (imagePath, sizes) => {
	return sizes
		.map(size => `${getResponsiveImageUrl(imagePath, size)} ${size}w`)
		.join(', ');
};

const ResponsiveImage = props => {
	const {
		title = '',
		alt = '',
		path,
		sizes = '100vw',
		versions = [375, 800, 1280, 1536, 1920], // Cloudinary imagen file size in px
	} = props;

	return (
		path && (
			<img
				src={`${process.env.PUBLIC_URL}${path}`}
				srcSet={getResponsiveSrcSet(path, versions)}
				sizes={sizes}
				alt={alt}
				title={title}
				className={`${props.asBackgroundImage ? css.asBackgroundImage : ''} ${
					props.className
				}`}
			/>
		)
	);
};

export default ResponsiveImage;
