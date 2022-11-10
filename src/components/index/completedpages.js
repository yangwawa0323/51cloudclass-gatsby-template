import React from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PageView from './pageview';

import page404 from '../../assets/img/page-thumbnail/page_404.webp';
import styleguide from '../../assets/img/page-thumbnail/styleguide.webp';
import changelog from '../../assets/img/page-thumbnail/changelog.webp';
import landing4 from '../../assets/img/page-thumbnail/landing4.webp';


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
	React.useEffect(() => {
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
				<div >
					<PageView route="/changelog" image={changelog} title="Change Log" />
				</div>
				<div >
					<PageView route="/404" image={page404} title="404 Error page"/>
				</div>
				<div >
					<PageView route="/styleguide" image={styleguide} title="Style Guide" />
				</div>
				<div >
					<PageView route="/landing4" image={landing4} title="Landing 4 page" />
				</div>
			</div>
		</div>
	)
}

export default CompletedPages