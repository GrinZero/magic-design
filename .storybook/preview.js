import 'tailwindcss/tailwind.css';
import 'animate.css';
import './app.scss';
import React from 'react'; //有用，别删
import 'tdesign-react/es/style/index.css';
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	layout: 'centered',
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
