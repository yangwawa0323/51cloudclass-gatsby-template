/** @format */

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import VideoJS from '../../utils/Video';
import CheckCircle from '@mui/icons-material/CheckCircle';
import HighlightOff from '@mui/icons-material/HighlightOff';
import PlayCircle from '@mui/icons-material/PlayCircle';
// import { useKeypress } from "../../utils/key";

const videoJsOptions = {
	autoplay: false,
	controls: true,
	responsive: true,
	muted: false,
	// fluid: true,
	width: 1080,
	// preferFullWindow: true,
	loop: true,
	sources: [
		{
			// src: 'https://vjs.zencdn.net/v/oceans.mp4',
			// src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
			src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
			type: 'video/mp4',
		},
	],
};

const WatchVideo = () => {
	const [backdropOpen, setBackdropOpen] = React.useState(false);
	const playerRef = React.useRef(null);
	const [playing, setPlaying] = React.useState(false);

	// React.useEffect(() => {
	//   const unbind = useKeypress("Escape", () => {
	//     if (playerRef.current) {
	//       const player = playerRef.current;
	//       player.pause();
	//       setBackdropOpen(false);
	//     }
	//   });
	//   return () => unbind();
	// }, []);

	const playVideo = () => {
		if (playerRef.current) {
			playerRef.current.play();
			setBackdropOpen(true);
		}
	};

	const handlePlayerReady = (player) => {
		playerRef.current = player;
		player.on('playing', () => {
			setPlaying(true);
		});
		player.on('pause', () => {
			setPlaying(false);
		});
	};

	const handleBackdropClick = () => {
		if (!playing) {
			setBackdropOpen(false);
		}
		return;
	};

	const handleCloseIconClick = () => {
		playerRef.current.pause();
		setBackdropOpen(false);
	};

	return (
		<div className='watch-the-video bg-[#f6f4ff] flex flex-col overflow-hidden p-24 justify-center items-center'>
			<div className='flex flex-row gap-24 max-w-[1200px] w-full justify-center items-center'>
				<div className='video-content flex-[1.3] flex flex-col gap-10 xs:px-4'>
					<div className='flex flex-col gap-6   justify-start items-start  max-w-[530px]'>
						<div>
							<p className='uppercase text-purple-700 font-extrabold text-sm'>
								complete toolkit
							</p>
						</div>
						<div>
							<h2 className='-tracking-wide'>
								Complete pages for your project.
							</h2>
						</div>
						<div>
							<p className='text-sm text-gray-600 font-medium'>
								Build a unique experience by mixing and matching components.
								Make your brand shine.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-4 justify-start items-start'>
						<div className='flex flex-row gap-3 justify-center items-center'>
							<CheckCircle htmlColor='rgb(136,0,255)' />
							<h5>25+ Prebuilt Pages</h5>
						</div>
						<div className='flex flex-row gap-3 justify-center items-center'>
							<CheckCircle htmlColor='rgb(136,0,255)' />
							<h5>60 Building Blocks</h5>
						</div>
						<div className='flex flex-row gap-3 justify-center items-center'>
							<CheckCircle htmlColor='rgb(136,0,255)' />
							<h5>Comprehensive Styleguide</h5>
						</div>
					</div>
				</div>
				<div className='z-[1] flex-1 flex flex-col justify-center items-center h-[360px] p-12 relative rounded-xl shadow-md overflow-hidden'>
					<div className='absolute inset-0  select-none pointer-events-none'>
						<img
							className='h-full w-full'
							src='https://framerusercontent.com/images/d1xv23lohWIezwkwQogANBdUFa0.jpg'
							alt=''
						/>
					</div>
					<div className='z-[2]'>
						<div className='cursor-pointer py-2 px-4 rounded-md shadow-md bg-white flex flex-row gap-3 justify-center items-center'>
							<PlayCircle
								fontSize='12px'
								onClick={playVideo}
							/>
							<p className='text-sm font-medium'>Watch the video</p>
						</div>
						<div>
							<Backdrop
								className='relative'
								// sx={{
								//   pointerEvents: 'none',
								// }}
								/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
								onClick={handleBackdropClick}
								open={backdropOpen}
							>
								<VideoJS
									className='rounded-lg overflow-hidden'
									options={videoJsOptions}
									onReady={handlePlayerReady}
								>
									<div className='text-gray-300 font-medium text-sm absolute -bottom-9 right-1/3 z-[9999]'>
										[
										<span className='text-white font-extrabold text-sm'>
											51cloudclass
										</span>
										] Press 'ESC' or click the X to close the video{' '}
									</div>
								</VideoJS>
								{/* <HighlightOff htmlColor='white' fontSize='medium'
                  onClick={handleCloseIconClick}
                  className='z-20 absolute top-[160px] right-10 pointer-events-auto' /> */}
								<HighlightOff
									htmlColor='white'
									fontSize='large'
									onClick={handleCloseIconClick}
									className='z-20 absolute bottom-[60px] right-1/2 pointer-events-auto'
								/>
							</Backdrop>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WatchVideo;
