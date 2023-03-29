/** @format */

import React, { useContext } from 'react';
import AsciinemaEditor from '../asciinema/AsciinemaEditor';
import { ChapterContext } from './ChapterContextProvider';

const Video = () => {
	const options = {
		hideEditorSidebar: true,
		readOnly: true,
	};

	const { chapter } = useContext(ChapterContext);

	return (
		<div className='px-8 min-h-fit w-[calc(100% - 60px)] flex flex-col '>
			<AsciinemaEditor
				initialValue={JSON.parse(chapter.content)}
				{...options}
			/>
		</div>
	);
};

export default Video;
