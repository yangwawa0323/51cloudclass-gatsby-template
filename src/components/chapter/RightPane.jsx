/** @format */

import * as React from 'react';
import { useEffect } from 'react';
import { easeIn } from '../../utils/animate';
import ChapterList from './ChapterList';
import More from './More';
import Resource from './Resource';
import gsap from 'gsap';

const RightPane = () => {
	useEffect(() => {
		const tl = gsap.timeline();
		var elements = document.querySelectorAll('.gsap-right');
		elements.forEach((element) => {
			easeIn(element, {}, tl);
		});
	});

	return (
		<div className='gsap-right'>
			<ChapterList />
		</div>
	);
};

export default RightPane;
