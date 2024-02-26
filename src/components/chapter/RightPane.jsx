/** @format */

import * as React from 'react';
import { useEffect } from 'react';
import { easeIn } from '../../utils/animate';
import ChapterList from './ChapterList';
import More from './More';
import Resource from './Resource';
import gsap from 'gsap';

const RightPane = () => {
	return (
		<div className='gsap-right'>
			<ChapterList />
		</div>
	);
};

export default RightPane;
