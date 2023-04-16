/** @format */

import React, { useContext } from 'react';
import { useEffect } from 'react';
import { easeIn } from '../../utils/animate';
import AsciinemaEditor from '../asciinema/AsciinemaEditor';
import { ChapterContext } from './ChapterContextProvider';

const Video = () => {
	const options = {
		hideEditorSidebar: true,
		readOnly: true,
	};

	useEffect(() => {
		easeIn('.gsap-video video')
	}, [])

	const { chapter } = useContext(ChapterContext);

	return (
		<div className='gsap-video px-8 min-h-fit w-[calc(100% - 60px)] flex flex-col '>
			<AsciinemaEditor
				initialValue={JSON.parse(chapter.content)}
				{...options}
			/>
		</div>
	);
};

export default Video;
