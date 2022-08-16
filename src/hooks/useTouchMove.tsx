import { useRef } from 'react';

enum SwiperFlags {
	stop,
	run,
}
const useTouchMove = () => {
	const mouseRef = useRef({
		flag: SwiperFlags.stop,
	});
	const handleTouchSwitch = (flag: SwiperFlags) => {
		mouseRef.current.flag = flag;
	};
	const handleTouchMove = (e: any) => {
		if (mouseRef.current.flag === SwiperFlags.stop) {
			return;
		}
		console.log('handleMouseMove', e);
	};

	return {
		onTouchStart: () => handleTouchSwitch(SwiperFlags.run),
		onTouchMove: handleTouchMove,
		onTouchEnd: () => handleTouchSwitch(SwiperFlags.stop),
	};
};

export default useTouchMove;
