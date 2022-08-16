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
		config.resolve.alias['@/'] = path.resolve(__dirname, '../src');
		config.resolve.alias['@'] = path.resolve(__dirname, '../src');

		config.module.rules.push({
			test: /\.(png|gif|jpe?g|svg|bmp)$/i,
			type: 'asset/resource',
			generator: { filename: 'img/[hash:7].[ext][query]' },
		});
		console.log('configconfigconfig', config);
		return config;
	},
};
