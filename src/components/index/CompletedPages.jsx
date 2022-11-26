import React from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PageView from './PageView';

import pictures from '../../utils/image';



import pageJsonData from '../../data/completed-page.json';

gsap.registerPlugin(ScrollTrigger)

const animation = () => {
	gsap.from(".completed-pages", {
		scrollTrigger: {
			trigger: ".completed-toolkit",
			scrub: 1,
			start: "bottom 75%",
			end: "bottom 45%",
			// markers: true
		},
		//   x: 0,
		y: 100,
		opacity: 0,
		duration: 3.5,
		// transformOrigin: "center center",
		// ease: "Power2.easeInOut"
	});
}


const CompletedPages = () => {
	const [pages, setPages] = React.useState([])

	React.useEffect(() => {
		let { pages } = pageJsonData
		setPages(pages);
		animation();
	}, [])
	return (
		<div className='flex flex-row gap-24 relative completed-pages'>
			<div className='z-10 flex flex-grow flex-col gap-5 max-w-[400px] sticky top-32 overflow-visible h-min'>
				<div >
					<p className='text-purple-500 font-extrabold uppercase text-sm'>
						Versatile pages
					</p>
				</div>
				<div >
					<h2 className='font-extrabold gradient-text'>Complete pages for your project.</h2>
				</div>
				<div >
					<p >Create beautiful pages within minutes directly in Framer.
						Easily customize images, content, and style to make it your own.</p>
				</div>
			</div>
			<div className='grid gap-5 max-w-[1000px] justify-center relative' style={{
				gridTemplateColumns: 'repeat(2, minmax(100px, 1fr))',
				gridTemplateRows: 'repeat(2, minmax(0px, 1fr))',
				gridAutoRows: 'minmax(0px, 1fr)',
			}}>
				{/*  */}
				{
					pages.map((page, index) => {
						return (
							<div key={index}>
								<PageView route={page.route}
									image={pictures[page.route.replace(/\//, '').replace(/404/, 'page404')]} title={page.title} />
							</div>
						)
					})
				}
				{/*  */}
			</div>
		</div>
	)
}

export default CompletedPages