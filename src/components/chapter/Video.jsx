/** @format */

import React, { useContext } from 'react';
import { useEffect } from 'react';
import { globalContext } from '../../../wrap-with-provider';
import { easeIn } from '../../utils/animate';
import AsciinemaEditor from '../asciinema/AsciinemaEditor';
import { ChapterContext } from './ChapterContextProvider';

const Video = () => {
	const options = {
		hideEditorSidebar: true,
		muted: false,
		autoplay: false,
		readOnly: true,
	};

	const setVideoOptions = function (videoEl) {
		if (videoEl) {
			videoEl.muted = false;
			videoEl.autoplay = false;
			videoEl.controlsList = 'nodownload';
			console.log(`videoEl.controlsList: ${videoEl.controlsList}`);
		}
	};

	const { isLogin } = useContext(globalContext);

	useEffect(() => {
		const videoElement = document.querySelector('.gsap-video video');
		videoElement && easeIn('.gsap-video video');
		setVideoOptions(videoElement);
		videoElement?.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			return false;
		});

		if (!isLogin && videoElement) {
			videoElement.remove();
		}
	}, [isLogin]);

	const { chapter } = useContext(ChapterContext);

	return (
		<div className='gsap-video min-h-fit w-full flex flex-col '>
			{(!isLogin && (
				<div className='w-full mx-0 md:mx-4 border-purple-700 border-[12px] bg-black rounded-lg h-60 md:h-80 lg:h-96 text-white font-bold flex justify-center items-center'>
					请登录后方能观看视频
				</div>
			)) || (
				<AsciinemaEditor
					initialValue={JSON.parse(chapter.content)}
					{...options}
				/>
			)}
		</div>
	);
};

export default Video;
