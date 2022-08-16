import React, { useMemo, useState } from 'react';

import type { SwiperProps } from '../types';
import styles from './CornerSwiper.module.scss';

interface CornerSwiperProps extends SwiperProps {
	defaultMargin?: boolean;
}

const CornerSwiper: React.FC<CornerSwiperProps> = ({
	defaultCurrent = 0,
	defaultMargin = true,
	children,
	className = '',
	// autoplay,
	// duration,
}) => {
	const [currentIndex] = useState(defaultCurrent);

	const childrenList = useMemo(() => {
		const childList = Array.isArray(children) ? children : [children];
		if (!defaultMargin) {
			return childList;
		}
		return childList.map((child) =>
			React.cloneElement(child, {
				...child.props,
				className: `${child.props.className || ''} mg-mr-5`,
			}),
		);
	}, [children, defaultMargin]);

	return (
		<div
			className={`mg-w-full mg-h-full mg-flex-row mg-flex mg-flex-nowrap mg-relative ${styles.cornerSwiper} ${className}`}
			style={{
				transform: `translateX(-${currentIndex * 100}%)`,
			}}
		>
			{childrenList}
		</div>
	);
};

export default CornerSwiper;
