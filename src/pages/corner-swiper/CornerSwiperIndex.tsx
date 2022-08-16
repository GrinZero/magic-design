import { useState } from 'react';

import firstPng from '../../assets/images/stories/swiperBanner1.png';
import secondPng from '../../assets/images/stories/swiperBanner2.png';
import thirdPng from '../../assets/images/stories/swiperBanner3.png';
import { CornerSwiper, SwiperItem } from '../../components';

const CornerSwiperIndex = () => {
	const [current, setCurrent] = useState(0);
	return (
		<CornerSwiper current={current}>
			<SwiperItem className="item" onClick={() => setCurrent(0)}>
				<img className="img" alt="firstPng" src={firstPng} />
			</SwiperItem>
			<SwiperItem className="item" onClick={() => setCurrent(1)}>
				<img className="img" alt="secondPng" src={secondPng} />
			</SwiperItem>
			<SwiperItem className="item" onClick={() => setCurrent(2)}>
				<img className="img" alt="thirdPng" src={thirdPng} />
			</SwiperItem>
		</CornerSwiper>
	);
};
export default CornerSwiperIndex;
