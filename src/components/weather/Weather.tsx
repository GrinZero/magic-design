import { usePrevious, useSetState } from 'ahooks';
import React, { useEffect } from 'react';

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
	duration?: number;
	iconDuration?: number;
}

const Weather: React.FC<WeatherProps> = ({ type, duration = 3600, iconDuration, className = '' }) => {
	const { class: typeClassName, component: Component } = WeatherTypeStore[type];
	const preType = usePrevious(type);
	const { component: PreComponent } = WeatherTypeStore[preType || type];

	const [animates, setAnimates] = useSetState({
		preClassName: '',
		curClassName: '',
	});

	useEffect(() => {
		if (!preType) {
			return;
		}
		// TODO:use different animations for different weather switches
		setAnimates({
			preClassName: 'animate__fadeOut',
			curClassName: 'animate__fadeIn',
		});
	}, [preType, type, setAnimates]);

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const style = { '--animate-duration': `${iconDuration ?? duration / 2}ms` };
	return (
		<div className={`${styles['weather-container']} ${typeClassName} ${className}`} style={style as any}>
			{preType ? <PreComponent className={`animate__animated ${animates.preClassName}`} /> : null}
			<Component className={`animate__animated ${animates.curClassName}`} />
		</div>
	);
};

export default Weather;
