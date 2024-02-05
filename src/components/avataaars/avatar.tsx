import React from 'react';
import { useLocation } from '@reach/router';

export type AvatarProps = {
	width?: string;
	height?: string;
	children?: React.ReactNode;
	src?: string;
	location?: any;
};

const avataaarsWeb = 'https://avataaars.io';

const Avataaar: React.FC<AvatarProps> = (props: AvatarProps) => {
	const location = useLocation();
	// const location = props.location.href;
	console.log('avatar location : ', location);

	const src = `${avataaarsWeb}/${location.search}`;

	return (
		<div>
			<img
				width={props.width || '300px'}
				src={src}
			/>
		</div>
	);
};

export default Avataaar;
