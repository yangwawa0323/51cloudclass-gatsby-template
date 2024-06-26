import React from 'react';
import gsap from 'gsap';
import PageView from './PageView';

import pictures from '../../utils/image';

import pageJsonData from '../../data/completed-page.json';

const animation = () => {
	gsap.from('.completed-pages', {
		scrollTrigger: {
			trigger: '.completed-toolkit',
			scrub: 1,
			start: 'bottom 75%',
			end: 'bottom 45%',
			// markers: true
		},
		//   x: 0,
		y: 100,
		opacity: 0,
		duration: 0.5,
		// transformOrigin: "center center",
		// ease: "Power2.easeInOut"
	});
};

const CompletedPages = () => {
	const [pages, setPages] = React.useState([]);

	React.useEffect(() => {
		let { pages } = pageJsonData;
		setPages(pages);
		// animation();
	}, []);
	return (
		<div className='hidden lg:flex flex-col md:flex-row gap-24 relative completed-pages'>
			<div className='z-10 flex flex-grow flex-col gap-5 max-w-[400px] md:sticky top-32 overflow-visible h-min'>
				<div>
					<p className='text-purple-500 font-extrabold uppercase text-sm'>
						Versatile pages
					</p>
				</div>
				<div>
					<h2 className='font-extrabold gradient-text'>网站已设计完成的页面</h2>
				</div>
				<div>
					<p>这些页面将用于视频录制后的整站的功能页面</p>
				</div>
			</div>
			<div
				className='grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[1000px] justify-center relative'
				style={
					{
						// gridTemplateColumns: 'repeat(2, minmax(100px, 1fr))',
						// gridTemplateRows: 'repeat(2, minmax(0px, 1fr))',
						// gridAutoRows: 'minmax(0px, 1fr)',
					}
				}
			>
				{/*  */}
				{pages.map((page, index) => {
					return (
						<div key={index}>
							<PageView
								route={page.route}
								image={
									pictures[
										page.route
											.replace(/\//, '')
											.replace(/404/, 'page404')
											.replace(/asciinema-list/, 'asciinema')
									]
								}
								title={page.title}
							/>
						</div>
					);
				})}
				{/*  */}
			</div>
		</div>
	);
};

export default CompletedPages;
