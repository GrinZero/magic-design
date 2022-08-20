import React from 'react';

import type { ComponentProps } from '@/types';

import styles from './Sunny.module.scss';

const Sunny: React.FC<ComponentProps> = ({ className }) => {
	return (
		<div className={className}>
			<div className={styles.sun} />
			<div className={styles.sunx} />
		</div>
	);
};

export default Sunny;
