export const getResponsiveImageUrl = (
  imagePath: string,
  size: string | number | null = null,
  effect?: string
) => {
  const effectPath = effect ? `${effect}/` : '';
  return (
    `${process.env.REACT_APP_CLOUDINARY_URLBASE}/` +
    `f_auto/w_${size}/${effectPath}` +
    `${process.env.REACT_APP_CLOUDINARY_ID}/` +
    `${process.env.REACT_APP_CLOUDINARY_IMAGES_DIRECTORY}` +
    `${imagePath}`
  );
};
