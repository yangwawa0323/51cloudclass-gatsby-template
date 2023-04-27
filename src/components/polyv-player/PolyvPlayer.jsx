/** @format */

import React from 'react';
import './styles.css';

class PolyvPlayer extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (!window.polyvPlayer) {
			this.loadScript('https://player.polyv.net/script/player.js').then(() => {
				this.loadPlayer();
			});
		} else {
			this.player = null;
			this.loadPlayer();
		}
	}

	componentWillUnmount() {
		if (this.player) {
			this.player.destroy();
		}
	}

	loadPlayer() {
		this.player = window.polyvPlayer({
			wrap: '.player',
			width: '100%',
			height: '100%',
			vid: this.props.data?.vid,
		});
	}

	loadScript(src) {
		const headElement =
			document.head || document.getElementsByTagName('head')[0];
		const _importedScript = {};

		return new Promise((resolve, reject) => {
			if (src in _importedScript) {
				resolve();
				return;
			}
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.onerror = (err) => {
				headElement.removeChild(script);
				reject(new URIError(`The Script ${src} is no accessible.`));
			};
			script.onload = () => {
				_importedScript[src] = true;
				resolve();
			};
			headElement.appendChild(script);
			script.src = src;
		});
	}

	render() {
		return (
			<div className='wrap polyv-wrap xs:w-[360px]'>
				<div className='player polyv-player xs:w-[320px]'></div>
			</div>
		);
	}
}

export default PolyvPlayer;
