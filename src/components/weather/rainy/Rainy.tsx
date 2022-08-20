import React from 'react';

import type { ComponentProps } from '@/types';

import styles from './Rainy.module.scss';

const Rainy: React.FC<ComponentProps> = ({ className = '' }) => {
	return (
		<div className={`${styles.rainy} ${className}`}>
			<ul>
				<li />
				<li />
				<li />
				<li />
				<li />
			</ul>
			<span className={styles['rainy-cloud']} />
		</div>
	);
};

export default Rainy;
