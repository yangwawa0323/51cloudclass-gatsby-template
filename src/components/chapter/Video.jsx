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
		readOnly: true,
	};

	const { isLogin, isExpired } = useContext(globalContext);

	useEffect(() => {
		const videoElement = document.querySelector('.gsap-video video');
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
			{!isLogin && (
				<div className='w-full mx-4 border-purple-700 border-[12px] bg-black rounded-lg h-[240px] text-white font-bold flex justify-center items-center'>
					请登录后方能观看视频
				</div>
			)}
			<AsciinemaEditor
				initialValue={JSON.parse(chapter.content)}
				{...options}
			/>
		</div>
	);
};

export default Video;
