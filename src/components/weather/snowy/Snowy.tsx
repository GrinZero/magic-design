import React from 'react';

import type { ComponentProps } from '@/types';

import styles from './Snowy.module.scss';

const Snowy: React.FC<ComponentProps> = ({ className = '' }) => {
	return (
		<div className={`${styles.snowy} ${className}`}>
			<ul>
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
			</ul>
			<span className={styles.snowe} />
			<span className={styles.snowex} />
			<span className={styles.stick} />
			<span className={styles.stick2} />
		</div>
	);
};

export default Snowy;
