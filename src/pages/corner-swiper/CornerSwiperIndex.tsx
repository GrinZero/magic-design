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

const CornerSwiperIndex = () => {
	const [current, setCurrent] = useState(0);
	return (
		<CornerSwiper current={current}>
			{imgList.map((item) => (
				<SwiperItem key={item.alt} className={styles.item} onClick={() => setCurrent(0)}>
					<img className={styles.img} alt={item.alt} src={item.src} />
				</SwiperItem>
			))}
		</CornerSwiper>
	);
};
export default CornerSwiperIndex;
