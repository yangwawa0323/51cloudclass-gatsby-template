import MarkdownEditor from '@uiw/react-markdown-editor';
import '../../styles/pages/_reactpage.scss';
import React, { useState } from 'react';

const CommentEditor = () => {
	const [markdown, setMarkdown] = useState('');

	return (
		<div className='m-12 flex flex-col gap-4'>
			<MarkdownEditor
				className='min-w-[320px] min-h-[400px]'
				toolbarBottom
				value={markdown}
				toolbars={['bold', 'italic', 'header']}
				onChange={setMarkdown}
			/>
		</div>
	);
};

export default CommentEditor;
