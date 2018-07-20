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

const defaultSizes = '100w';
const defaultVersions = [375, 800, 1280, 1536, 1920]; // Cloudinary imagen file size in px

const ResponsiveImage = props => {
	const {
		title = '',
		alt = '',
		path,
		sizes = defaultSizes,
		versions = defaultVersions,
		asBackgroundImage = false,
		...otherProps
	} = props;

	return (
		path && (
			<img
				{...responsiveImageProps(path, alt, versions, sizes)}
				alt={alt}
				title={title}
				className={`
				  ${asBackgroundImage ? css.asBackgroundImage : ''}
				  ${props.className ? props.className : ''}
				`.trim()}
				{...otherProps}
			/>
		)
	);
};

function responsiveImageProps(
	path,
	alt,
	versions = defaultVersions,
	sizes = defaultSizes
) {
	return {
		src: `${process.env.PUBLIC_URL}${path}`,
		srcSet: getResponsiveSrcSet(path, versions),
		sizes: sizes,
		alt: alt,
	};
}

export default ResponsiveImage;
export { responsiveImageProps, getResponsiveImageUrl };
