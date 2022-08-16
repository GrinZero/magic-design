module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite',
	},
	staticDirs: ['../src/assets'],
	features: {
		storyStoreV7: true,
	},
	webpackFinal: async (config) => {
		config.resolve.alias['~'] = path.resolve(__dirname, '../src');
		config.resolve.alias['~components'] = path.resolve(__dirname, '../src/components');
		console.info(config);
		return config;
	},
};
