/** @format */

import gsap from 'gsap';

export const easeIn = (target: gsap.TweenTarget, options = {}, timeline: gsap.core.Timeline | null) => {
	timeline = timeline ? timeline : gsap.timeline();
	const defaultOptions = {
		opacity: 0,
		duration: 0.5,
		scale: 0.8,
		...options,
	};

	timeline.from(target, defaultOptions);
	return timeline;
};

// export const easeOut = (target, options = {}) => {
// 	tl = tl ? tl : gsap.timeline();
// 	const defaultOptions = {
// 		opacity: 1,
// 		duration: 0.5,
// 		scale: 1,
// 		...options,
// 	};

// 	tl.to(target, defaultOptions);
// };

const defaults = { easeIn };

export default defaults;
