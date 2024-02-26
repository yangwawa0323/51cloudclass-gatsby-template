/** @format */

import React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../../../wrap-with-provider';
import { easeIn } from '../../utils/animate';
import AsciinemaEditor from '../asciinema/AsciinemaEditor';
import { debugLog } from '51cloudclass-utilities/src/utils';
import { useState } from 'react';
import _ from 'lodash';

const loginRequiredObj = {
	id: 'roilkm',
	size: 12,
	plugin: {
		id: 'loginRequiredCellPlugin',
		version: 1,
	},
	dataI18n: {
		default: null,
	},
	rows: [],
	inline: null,
};

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

	const [data, setData] = useState(null);
	/*****************************************************************
	 * from globalContext get the single chapter
	 *****************************************************************/
	const { isLogin, chapter } = useGlobalContext();

	/* const setVideoOptions = function (videoEl) {
		if (videoEl) {
			videoEl.muted = false;
			videoEl.autoplay = false;
			videoEl.controlsList = 'nodownload';
		}
	}; 

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
	}, [isLogin, videoElement]); */

	useEffect(() => {
		let content = chapter?.content;
		if (!isLogin) {
			content = _.replace(
				content,
				'ory/sites/plugin/content/html5-video',
				'loginRequiredCellPlugin'
			);
		}
		setData(content);
	}, [chapter, isLogin]);
	return (
		<div className='gsap-video min-h-fit w-full flex flex-col '>
			{chapter && data && (
				<AsciinemaEditor
					initialValue={JSON.parse(data)}
					{...options}
				/>
			)}
			{/* ))} */}
		</div>
	);
};

export default Video;
