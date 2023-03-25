/** @format */

import PolyvPlayer from '../../components/polyv-player/PolyvPlayer';
import createPlugin from './createPlugin';

const plugin = createPlugin({
	title: '保利威视频插件',
	description: '保利威视频播放器插件',
	label: '视频vid',
	placeholder: '请输入保利威视频vid',
	Renderer: PolyvPlayer,
});

export default plugin;
