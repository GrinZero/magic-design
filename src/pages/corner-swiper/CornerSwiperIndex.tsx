import { useState } from 'react';

import firstPng from '@/assets/images/stories/swiperBanner1.png';
import secondPng from '@/assets/images/stories/swiperBanner2.png';
import thirdPng from '@/assets/images/stories/swiperBanner3.png';
import { CornerSwiper, SwiperItem } from '@/components';

import styles from './CornerSwiperIndex.module.scss';

const imgList = [
	{
		src: firstPng,
		alt: 'firstPng',
	},
	{
		src: secondPng,
		alt: 'secondPng',
	},
	{
		src: thirdPng,
		alt: 'thirdPng',
	},
	{
		src: firstPng,
		alt: 'forthPng',
	},
];

const CornerSwiperIndex = ({ ...rest }) => {
	const [current, setCurrent] = useState(0);
	const handleClick = () => {
		setCurrent(current + 1 >= imgList.length ? 0 : current + 1);
	};
	return (
		<div className="mg-w-full mg-h-full mg-overflow-visible mg-flex mg-flex-col mg-items-center mg-justify-center">
			<CornerSwiper current={current} {...rest}>
				{imgList.map((item) => (
					<SwiperItem key={item.alt} className={styles.item} onClick={() => setCurrent(0)}>
						<img className={styles.img} alt={item.alt} src={item.src} />
					</SwiperItem>
				))}
			</CornerSwiper>
			<div
				className={`mg-mt-6 mg-transition-all mg-w-96 mg-flex mg-items-center mg-justify-center mg-px-2 mg-py-4 mg-rounded-xl mg-cursor-pointer mg-text-white hover:mg-shadow-md hover:mg-shadow-blue-300  ${styles.button}`}
				onClick={handleClick}
				onKeyDown={handleClick}
			>
				Click to change current
			</div>
		</div>
	);
};
export default CornerSwiperIndex;
