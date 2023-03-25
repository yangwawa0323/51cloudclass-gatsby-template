/** @format */

import React, { useContext } from 'react';
import { debugLog } from '../../utils/tools';
import AsciinemaEditor from '../asciinema/AsciinemaEditor';
import { ChapterContext } from './ChapterContextProvider';

const Video = () => {
	const options = {
		hideEditorSidebar: true,
		readOnly: true,
	};

	const { chapter } = useContext(ChapterContext);

	return (
		<div
			style={{
				height: 'min-content',
				width: 'calc(100% - 60px)',
				minWidth: '500px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<AsciinemaEditor
				style={{ minWidth: 400 }}
				initialValue={JSON.parse(chapter.content)}
				{...options}
			/>
		</div>
	);
};

export default Video;
