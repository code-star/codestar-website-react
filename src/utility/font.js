import iconPaths from '../fonts/selection.json';

export const getPath = name => {
	const icon = iconPaths.icons.find(icon => icon.properties.name === name);

	if (icon) {
		return icon.icon.paths.join(' ');
	} else {
		console.warn(`icon ${name} does not exist.`);
		return '';
	}
};
