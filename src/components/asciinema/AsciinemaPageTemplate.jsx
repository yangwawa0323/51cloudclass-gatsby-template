/** @format */

import React, { useEffect } from 'react';
import Editor from '@react-page/editor';

import { baseCellPlugins } from '../../plugins/cellPlugins';
import Frame from '../frame';
import { Link } from 'gatsby';
import { getTitle, formatDate, randomColor } from '../../utils/tools';
import ContentPasteGo from '@mui/icons-material/ContentPasteGo';

const AsciinemaPage = ({ pageContext }) => {
	const { content, relatives } = pageContext;

	useEffect(() => {
		console.log(relatives, pageContext);
	});

	return (
		<Frame>
			<div
				className='min-w-[425x] py-24 px-8 flex flex-col gap-2 relative lg:flex-row'
				style={{
					background:
						'radial-gradient(106.9% 91.8% at 100% 100%, #b09eff 0%, var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255))  100%)',
				}}
			>
				<div className='md:flex-2 lg:flex-[6] p-8'>
					<Editor
						cellPlugins={baseCellPlugins}
						value={content}
						readOnly
					/>
				</div>
				<div className='bg-[#f6f4ff] flex-1 ml-4 mt-10 right-4 top-1/2 py-12 px-6 h-full rounded-lg shadow-md  bg-slate-10 flex flex-col gap-2 '>
					<div className='flex flex-row text-purple-600 gap-2 items-center'>
						<div>
							<ContentPasteGo sx={{ fontSize: '1.2rem' }} />
						</div>
						<h6 className='text-purple-600 font-semibold uppercase'>
							Latest 10.
						</h6>
					</div>
					<div className='latest flex flex-col gap-2'>
						{relatives.map((ascii, index) => {
							let content = JSON.parse(ascii.content);
							return (
								<div key={ascii.ID}>
									<span className='text-gray-600 font-semibold text-sm'>
										{index + 1}:
									</span>
									<Link to={`/asciinemas/${ascii.ID}`}>
										{' '}
										{getTitle(content)}
									</Link>
									<p className='pl-2 text-xs text-gray-500'>
										{formatDate(new Date(ascii.CreatedAt), 'yyyy-mm-dd HH:MM')}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Frame>
	);
};

export default AsciinemaPage;
