import React from 'react';
import css from './ResponsiveImage.module.css';
import { getResponsiveImageUrl } from './getResponsiveImageUrl';

const getResponsiveSrcSet = (imagePath, sizes, effect) => {
  return sizes
    .map(size => `${getResponsiveImageUrl(imagePath, size, effect)} ${size}w`)
    .join(', ');
};

const defaultSizes = '100w';
const defaultVersions = [375, 800, 1280, 1536, 1920]; // Cloudinary image file size in px

const ResponsiveImage = props => {
  const {
    title = '',
    alt = '',
    path,
    sizes = defaultSizes,
    versions = defaultVersions,
    asBackgroundImage = false,
    effect,
    ...otherProps
  } = props;

  return (
    path && (
      <img
        {...responsiveImageProps(path, alt, versions, sizes, effect)}
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
  sizes = defaultSizes,
  effect
) {
  return {
    src: `${process.env.PUBLIC_URL}${path}`,
    srcSet: getResponsiveSrcSet(path, versions, effect),
    sizes: sizes,
    alt: alt,
  };
}

export default ResponsiveImage;
export { responsiveImageProps, getResponsiveImageUrl };
