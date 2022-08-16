import './VerticalSwiper.scss';

import React, { useMemo } from 'react';

import type { SwiperProps } from '../types';

interface VerticalSwiperProps extends SwiperProps {
	duration: number;
	autoplay: boolean;
}

const VerticalSwiper: React.FC<VerticalSwiperProps> = ({
	defaultCurrent = 0,
	current,
	children,
	autoplay,
	duration,
}) => {
	const childrenList = useMemo(() => (Array.isArray(children) ? children : [children]), [children]);
	const child = childrenList[current ?? defaultCurrent];

	console.log(autoplay, duration);
	return <div className="vertical-swiper">{child}</div>;
};

export default VerticalSwiper;
