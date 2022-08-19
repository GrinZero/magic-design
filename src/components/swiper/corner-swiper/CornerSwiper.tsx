import React, { useMemo, useState } from 'react';

import type { SwiperProps } from '../types';
import styles from './CornerSwiper.module.scss';

interface CornerSwiperProps extends SwiperProps {
	defaultMargin?: boolean;
	rotate?: string;
	position?: number | string;
}

const CornerSwiper: React.FC<CornerSwiperProps> = ({
	defaultCurrent = 0,
	defaultMargin = true,
	children,
	position = '20%',
	rotate = '-45deg',
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

	const swiperElement = (
		<div
			className={`mg-w-full mg-h-full mg-flex-row  mg-overflow-hidden mg-flex mg-flex-nowrap ${className}`}
		>
			{childrenList}
		</div>
	);

	const translateDistance = -100;
	const element3D = React.cloneElement(swiperElement, {
		...swiperElement.props,
		className: `mg-relative ${styles['element-3d']} ${swiperElement.props.className}`,
		// eslint-disable-next-line @typescript-eslint/naming-convention
		style: { '--position': position, '--rotate': rotate },
	});
	const element2D = React.cloneElement(swiperElement, {
		...swiperElement.props,
		className: `mg-absolute mg-top-0 mg-left-0 ${styles['element-2d']} ${swiperElement.props.className}`,
		// eslint-disable-next-line @typescript-eslint/naming-convention
		style: { '--position': position },
	});

	return (
		<div
			className={`${styles['swiper-container']}`}
			style={{ transform: `translatex(${translateDistance * currentIndex}px)` }}
		>
			<div className={`mg-w-full mg-h-full mg-relative ${styles['corner-swiper']}`}>
				{element3D}
				{element2D}
			</div>
		</div>
	);
};

export default CornerSwiper;
