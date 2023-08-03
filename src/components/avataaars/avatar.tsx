import React from 'react';
import { useLocation } from '@reach/router';
import { debugLog } from '51cloudclass-utilities/src/utils';

export type AvatarProps = {
	width?: string;
	height?: string;
	children?: React.ReactNode;
	src?: string;
};

const avataaarsWeb = 'https://avataaars.io';

const Avataaar: React.FC<AvatarProps> = (props: AvatarProps) => {
	const location = useLocation();

	const src = `${avataaarsWeb}/${location.search}`;

	debugLog(location);
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
