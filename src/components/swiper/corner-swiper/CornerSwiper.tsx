import React, { useMemo, useState } from 'react';

import type { SwiperProps } from '../types';
import styles from './CornerSwiper.module.scss';

interface CornerSwiperProps extends SwiperProps {
	defaultMargin?: boolean;
	rotate?: string;
}

const CornerSwiper: React.FC<CornerSwiperProps> = ({
	defaultCurrent = 0,
	defaultMargin = true,
	children,
	rotate = '45deg',
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
		return childList.map((child, index) => {
			const position = 10;
			const positionStr = `${position}%`;
			const element3D = React.cloneElement(child, {
				...child.props,
				key: `${child.key}-Left`,
				className: `mg-relative mg-overflow-hidden ${styles['element-3d']} ${child.props.className}`,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				style: { '--position': positionStr, '--rotate': rotate },
			});
			const element2D = React.cloneElement(child, {
				...child.props,
				key: `${child.key}-Right`,
				className: `mg-absolute mg-overflow-hidden mg-top-0 mg-left-0 ${styles['element-2d']} ${child.props.className}`,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				style: { '--position': positionStr },
			});

			const baseClassName = `${child.props.className || ''} mg-mr-5 mg-relative ${
				styles['swiper-item']
			}`;
			const element = (
				<div key={child.key || index} className={baseClassName}>
					{[element3D, element2D]}
				</div>
			);
			return element;
		});
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
