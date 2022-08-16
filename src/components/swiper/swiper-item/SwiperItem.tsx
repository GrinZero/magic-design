import React from 'react';

export interface SwiperItemProps {
	children: React.ReactNode | React.ReactNode[];
}

const SwiperItem: React.FC<SwiperItemProps> = ({ children }) => <>{children}</>;
SwiperItem.displayName = 'SwiperItem';

export default SwiperItem;
