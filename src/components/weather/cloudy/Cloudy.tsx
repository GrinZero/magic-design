import React from 'react';

import type { ComponentProps } from '@/types';

import styles from './Cloudy.module.scss';

const Cloudy: React.FC<ComponentProps> = ({ className = '' }) => {
	return (
		<div className={className}>
			<div className={styles.cloud} />
			<div className={styles.cloudx} />
		</div>
	);
};

export default Cloudy;
