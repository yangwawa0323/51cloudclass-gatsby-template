import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = (props) => {
	const videoRef = React.useRef(null);
	const playerRef = React.useRef(null);
	const { options, onReady, children } = props;
	// console.log(options);

	React.useEffect(() => {
		// Make sure Video.js player is only initialized once
		if (!playerRef.current) {
			const videoElement = videoRef.current;

			if (!videoElement) return;

			const player = (playerRef.current = videojs(videoElement, options, () => {
				videojs.log('player is ready');
				onReady && onReady(player);
			}));

			// You could update an existing player in the `else` block here
			// on prop change, for example:
		} else {
			// const player = playerRef.current;
			// player.autoplay(options.autoplay);
			// player.src(options.sources);
		}
	}, [options, videoRef, onReady]);

	// Dispose the Video.js player when the functional component unmounts
	React.useEffect(() => {
		const player = playerRef.current;

		return () => {
			if (player) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, [playerRef]);

	return (
		<div
			data-vjs-player
			className='relative'
		>
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<video
				autoPlay={false}
				muted={false}
				controls
				controlsList='nodownload'
				ref={videoRef}
				className='video-js vjs-big-play-centered'
			></video>
			{children}
		</div>
	);
};

export default VideoJS;
