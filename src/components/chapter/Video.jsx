/** @format */

import React, { useContext } from 'react';
import { useEffect } from 'react';
import { globalContext } from '../../../wrap-with-provider';
import { easeIn } from '../../utils/animate';
import AsciinemaEditor from '../asciinema/AsciinemaEditor';
import { ChapterContext } from './ChapterContextProvider';
import { ReactDOM } from 'react';

const Video = () => {
	const options = {
		hideEditorSidebar: true,
		muted: false,
		autoplay: false,
		readOnly: true,
	};

	const setVideoOptions = React.useCallback(function () {
		let video = document.querySelector('video');
		video.muted = false;
		video.autoplay = false;
		console.log(video.muted + ',' + video.autoplay);
	});

	const { isLogin, isExpired } = useContext(globalContext);

	useEffect(() => {
		const videoElement = document.querySelector('.gsap-video video');
		setVideoOptions();
		videoElement && easeIn('.gsap-video video');
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
