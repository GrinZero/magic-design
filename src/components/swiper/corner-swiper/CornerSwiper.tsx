import React, { useMemo, useState } from 'react';

import type { SwiperProps } from '../types';
import styles from './CornerSwiper.module.scss';

interface CornerSwiperProps extends SwiperProps {
	defaultMargin?: boolean;
	rotateX?: string;
	rotateY?: string;
	position?: number;
	perspective?: string;
	perspectiveOriginX?: string;
	perspectiveOriginY?: string;
}

const oneItem = 270;

const CornerSwiper: React.FC<CornerSwiperProps> = ({
	current,
	children,
	className = '',
	position = 0.2,
	// autoplay = false,
	// duration = 3000,
	rotateX = '0deg',
	rotateY = '-45deg',
	defaultCurrent = 0,
	defaultMargin = true,
	perspective = '1000px',
	perspectiveOriginX = '50%',
	perspectiveOriginY = '50%',
}) => {
	const [_currentIndex] = useState(defaultCurrent);
	const currentIndex = current ?? _currentIndex;

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
		<div className={`mg-w-full mg-h-full mg-flex-row mg-flex mg-flex-nowrap ${className}`}>
			{childrenList}
		</div>
	);

	const translatePercent = currentIndex / childrenList.length;

	const positionStr = `${(position + translatePercent) * 100}%`;

	const element3D = React.cloneElement(swiperElement, {
		...swiperElement.props,
		className: `mg-absolute mg-top-0 mg-left-0 mg-overflow-hidden ${styles['element-3d']} ${swiperElement.props.className}`,
		// eslint-disable-next-line @typescript-eslint/naming-convention
		style: { '--position': positionStr, '--rotate-x': rotateX, '--rotate-y': rotateY },
	});
	const element2D = React.cloneElement(swiperElement, {
		...swiperElement.props,
		className: ` mg-relative ${styles['element-2d']} ${swiperElement.props.className}`,
		// eslint-disable-next-line @typescript-eslint/naming-convention
		style: { '--position': positionStr, '--rotate-x': rotateX },
	});

	return (
		<div
			className={`${styles['swiper-container']}`}
			style={{ transform: `translatex(${-translatePercent * oneItem * childrenList.length}px)` }}
		>
			<div
				className={`mg-w-full mg-h-full mg-relative ${styles['corner-swiper']}`}
				style={{ perspective, perspectiveOrigin: `${perspectiveOriginX} ${perspectiveOriginY}` }}
			>
				{element3D}
				{element2D}
			</div>
		</div>
	);
};

export default CornerSwiper;
