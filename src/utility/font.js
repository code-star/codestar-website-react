import iconPaths from '../fonts/selection.json';

export const getPath = name => {
  const match = iconPaths.icons.find(icon => icon.properties.name === name);

  if (match) {
    return match.icon.paths.join(' ');
  } else {
    console.warn(`icon ${name} does not exist.`);
    return '';
  }
};
