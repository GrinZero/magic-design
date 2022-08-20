import React from 'react';

import type { ComponentProps } from '@/types';

import styles from './Nighty.module.scss';

const Nighty: React.FC<ComponentProps> = ({ className = '' }) => {
	return (
		<div className={className}>
			<div className={styles.night}>
				<span className={styles.moon} />
				<span className={styles.spot1} />
				<span className={styles.spot2} />
				<ul>
					<li />
					<li />
					<li />
					<li />
					<li />
				</ul>
			</div>
		</div>
	);
};

export default Nighty;
