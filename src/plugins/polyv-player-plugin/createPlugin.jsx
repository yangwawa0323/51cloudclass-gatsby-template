/** @format */

import PolyvPlayer from '../../components/polyv-player/PolyvPlayer';

const createPlugin = (settings) => {
	const mergedSettings = { ...settings };

	return {
		Renderer: mergedSettings.Renderer ?? PolyvPlayer,
		controls: {
			columnCount: 1,
			type: 'autoform',
			schema: {
				required: ['vid'],
				type: 'object',
				properties: {
					vid: {
						type: 'string',
						uniforms: {
							placeholder: mergedSettings.placeholder,
							label: mergedSettings.label,
						},
					},
				},
			},
		},
		id: 'polyv-player-plugin',
		version: 1,
		title: mergedSettings.title,
		description: mergedSettings.description,
		icon: mergedSettings.icon,
		isInlineable: mergedSettings.isInlineable,
		// createInitialData: () => ({
		// vid: '88083abbf5bcf1356e05d39666be527a_8'
		// })
	};
};

export default createPlugin;
