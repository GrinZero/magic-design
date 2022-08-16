import type { SwiperItemProps } from './swiper-item/SwiperItem';

type SwiperItemNode = React.ReactElement<React.FC<SwiperItemProps>>;
export interface SwiperProps {
	interval: number;
	duration: number;
	autoplay: boolean;
	current?: number;
	defaultCurrent: number;
	children: SwiperItemNode | SwiperItemNode[];
}
