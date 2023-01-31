/** @format */

import * as React from 'react';
import { gradientColor } from '../../utils/tools';

const CompleteToolkit = () => {
	return (
		<div className='building-block flex flex-col justify-start content-center items-center gap-3 h-min max-w-[600px] overflow-hidden w-full '>
			<div>
				<p className='text-purple-700 text-center font-extrabold uppercase'>
					三大优势
				</p>
			</div>
			<div>
				<h2
					className='text-center tracking-[-1px]'
					style={gradientColor}
				>
					学习不再盲目,告别学习复杂.
				</h2>
			</div>
		</div>
	);
};

export default CompleteToolkit;
