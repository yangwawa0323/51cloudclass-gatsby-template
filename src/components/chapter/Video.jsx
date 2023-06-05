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
		easeIn('.gsap-video video')
		const videoElement = document.querySelector('video');

		if (!isLogin && videoElement) {
			videoElement.remove()
		}
	}, [isLogin])




	const { chapter } = useContext(ChapterContext);

	return (
		<div className='gsap-video px-8  min-h-fit w-[calc(100% - 60px)] flex flex-col '>
			{!isLogin && <div className='min-w-[280px] m-12 border-purple-700 border-[12px] bg-black rounded-lg  w-auto h-[240px] text-white font-bold flex justify-center items-center' > 请登录后方能观看视频</div >}
			<AsciinemaEditor
				initialValue={JSON.parse(chapter.content)}
				{...options}
			/>
		</div>
	);
};

export default Video;
