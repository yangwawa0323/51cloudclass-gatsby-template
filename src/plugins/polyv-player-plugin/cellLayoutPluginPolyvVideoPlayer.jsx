/** @format */

import slate from '@react-page/plugins-slate';
import divider from '@react-page/plugins-divider';
import React from 'react';
import '@react-page/plugins-slate/lib/index.css';
import { debugLog } from 'utils/tools';
import polyvplayer from 'components/plugins/polyv-player-plugin';
import './styles.css';

const defaultSlate = slate();

const cellLayoutPluginPolyvPlayer = {
	// eslint-disable-next-line react/prop-types
	Renderer: ({ children }) => {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '24px',
				}}
			>
				{Array.isArray(children) ? (
					// eslint-disable-next-line react/prop-types
					children.map((child, index) => {
						return (
							<div
								key={index}
								className='video-salte-plugin'
							>
								{child}
							</div>
						);
					})
				) : (
					<div>{children}</div>
				)}
			</div>
		);
	},
	createInitialChildren: () => {
		return [
			[{ plugin: polyvplayer }],
			[{ plugin: divider }],
			[{ plugin: defaultSlate }],
		];
	},

	id: 'custom-layout-with-ployv-player-plugin',
	title: '自定义带保利威播放器布局的插件',
	description: '此插件带有一个保利威播放器和一个用于保存描述的Slate插件',
	version: 1,
};

export default cellLayoutPluginPolyvPlayer;
