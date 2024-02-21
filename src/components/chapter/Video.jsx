/** @format */

import React, { useContext } from 'react';
import { useEffect } from 'react';
import { globalContext, useGlobalContext } from '../../../wrap-with-provider';
import { easeIn } from '../../utils/animate';
import AsciinemaEditor from '../asciinema/AsciinemaEditor';

/***************************************************************
 * set video has some bugs, autoplay can not be set to false.
 * Now is change the file of react-page\plugins-html5-video\Renderer\Html5VideoHtmlRender.js
 */
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
		}
	};

	const { isLogin } = useContext(globalContext);

	const videoElement = document.querySelector('.gsap-video video');
	useEffect(() => {
		if (videoElement) easeIn('.gsap-video video');
		setVideoOptions(videoElement);
		videoElement?.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			return false;
		});

		if (!isLogin && videoElement) {
			videoElement.remove();
		}
	}, [isLogin, videoElement]);

	/*****************************************************************
	 * from globalContext get the single chapter
	 *****************************************************************/
	const { chapter } = useGlobalContext();

	return (
		<div className='gsap-video min-h-fit w-full flex flex-col '>
			{(!isLogin && (
				<div className='w-full mx-0 md:mx-4 border-purple-700 border-[12px] bg-black rounded-lg h-60 md:h-80 lg:h-96 text-white font-bold flex justify-center items-center'>
					请登录后方能观看视频
				</div>
			)) ||
				(chapter && (
					<AsciinemaEditor
						initialValue={JSON.parse(chapter?.content)}
						{...options}
					/>
				))}
		</div>
	);
};

export default Video;
