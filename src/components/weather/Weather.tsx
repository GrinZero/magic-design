import React from 'react';

import type { ComponentProps } from '@/types';

import Cloudy from './cloudy/Cloudy';
import Nighty from './nighty/Nighty';
import Rainy from './rainy/Rainy';
import Snowy from './snowy/Snowy';
import Sunny from './sunny/Sunny';
import styles from './Weather.module.scss';

enum WeatherType {
	sunny = 'sunny',
	cloudy = 'cloudy',
	rainy = 'rainy',
	snowy = 'snowy',
	nighty = 'nighty',
}

const WeatherTypeStore = {
	[WeatherType.sunny]: {
		class: styles['weather-sunny'],
		component: Sunny,
	},
	[WeatherType.cloudy]: {
		class: styles['weather-cloudy'],
		component: Cloudy,
	},
	[WeatherType.rainy]: {
		class: styles['weather-rainy'],
		component: Rainy,
	},
	[WeatherType.snowy]: {
		class: styles['weather-snowy'],
		component: Snowy,
	},
	[WeatherType.nighty]: {
		class: styles['weather-nighty'],
		component: Nighty,
	},
};

interface WeatherProps extends ComponentProps {
	type: WeatherType;
}

// TODO:add animation for weather Component change
const Weather: React.FC<WeatherProps> = ({ type }) => {
	const { class: typeClassName, component: Component } = WeatherTypeStore[type];
	return (
		<div className={`${styles['weather-container']} ${typeClassName}`}>
			<Component />
		</div>
	);
};

export default Weather;
