import type { ComponentProps } from '@/types';

import type { SwiperItemProps } from './swiper-item/SwiperItem';

type SwiperItemNode = React.ReactElement<React.FC<SwiperItemProps> & { className?: string }>;
export interface SwiperProps extends ComponentProps {
	interval?: number;
	duration?: number;
	autoplay?: boolean;
	current?: number;
	defaultCurrent?: number;
	children: SwiperItemNode | SwiperItemNode[];
}
