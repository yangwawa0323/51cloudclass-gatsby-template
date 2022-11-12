import * as React from 'react';
import gsap from 'gsap';
import { Link } from 'gatsby';
import changelog from '../../assets/img/page-thumbnail/changelog.webp';
import page404 from '../../assets/img/page-thumbnail/page_404.webp';
import styleguide from '../../assets/img/page-thumbnail/styleguide.webp';
import booststart from '../../assets/img/page-thumbnail/boost_start.webp';
import legal from '../../assets/img/page-thumbnail/legal.webp';
import price2 from '../../assets/img/page-thumbnail/price.webp';

const boostSectionAnimation = (timeline) => {
	const wrapper = document.querySelector('.boost-section-wrapper')

	timeline = timeline || gsap.timeline();

	gsap.set(wrapper, { opacity: 0.3, })
	timeline.to(wrapper, {
		y: `20%`,
		duration: 1.5,
		opacity: 1,

	},);


	return timeline
}

const scrollingPagesAnimation = (timeline) => {
	// var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];

	timeline = timeline || gsap.timeline();

	const size = document.querySelectorAll('.box').length,

		blkHeight = 400,
		/*****IMPORTANT******
		 * Change the blkHeight 
		 * 
		 * */
		distance = size * blkHeight;

	//initially colorize each box and position in a row
	gsap.utils.toArray('.box').reverse().forEach((box, i) => {
		gsap.set(box, {
			// backgroundColor: () => colors[i % colors.length],
			y: () => i * blkHeight,
		});


		timeline.to(box, {
			duration: 25,
			ease: "none",
			y: `+=${distance}`, //move each box 500px to right
			modifiers: {
				y: gsap.utils.unitize(
					y =>
						distance - parseFloat(y) % distance
				),
			},
			repeat: -1
		}, "<");

	});
}


/**
 *   Has bugs 
*/
const scrollingPageHasBug = () => {

	const scrollingPages = document.querySelectorAll('.scrolling-page')
	const size = scrollingPages.length;
	// const cliHeight = scrollingPages[0].clientHeight
	const cliHeight = 50;
	const distance = size * cliHeight;

	gsap.utils.toArray('.scrolling-page').forEach(
		(page, i) => {
			gsap.set(page, {
				y: () => i * cliHeight,
			});

			gsap.to(page, {
				duration: 5,
				ease: 'none',
				y: `+=` + distance,
				modifiers: {
					y: gsap.utils.unitize(
						y => distance - parseFloat(y) % distance,
					)
				},
				repeat: -1,
				onComplete: () => console.log(page, "is completed"),
			})
		}
	);
}

const BoostSection = () => {
	const [timeline, setTimeline] = React.useState(null);
	React.useEffect(() => {

		const globalTimeline = gsap.timeline()
		setTimeline(globalTimeline)
		boostSectionAnimation(globalTimeline)
		scrollingPagesAnimation(globalTimeline)

	}, [])


	const pauseAnimation = () => {
		timeline.pause();
	}

	const resumeAnimation = () => {
		timeline.resume();
	}

	return (
		<div
			className='w-full overflow-hidden items-center justify-center flex flex-col'
			style={{
				// gap: '141px',
				height: '100vh',
				background: 'radial-gradient(106.9% 91.8% at 100% 100%, #b09eff 0%, var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255))  100%)',
			}}>
			<div className='w-4/5 border-red-400 items-center justify-center flex flex-row max-w-[1300px] overflow-visible relative gap-12'
			>
				{/* boost section   */}
				<div className='boost-section-wrapper  flex flex-col gap-4 overflow-visible h-min max-w-[451px]'>
					<div>
						<p
							className='text-purple-500 text-sm font-extrabold uppercase hover:underline'
						>Free Framer Template</p>
					</div>
					<div >
						<h2 className='inline-block'>
							<span
								className='gradient-text'
								style={{
									backgroundImage: 'linear-gradient(15deg, rgb(102, 0, 255) 0%, rgb(255, 0, 102) 100%)',

								}}>Boost your website.
							</span>
						</h2>
					</div>
					<div>
						<p className=' boost-pbtn text-xl font-medium text-gray-600'>Quickly assemble pages from various
							categories and customize them to your business's needs.</p>
					</div>
					<div className='flex gap-3 overflow-visible items-center justify-center'>
						<a >
							<div >
								<p className='boost-pbtn rounded-l-xl shadow-lg py-4 px-6 duration-1000 bg-purple-600 hover:bg-purple-800 text-white text-[18px] font-semibold tracking-tighter'>Use Template</p>
							</div>
						</a>
						<a >
							<div>
								<p className='rounded-r-xl shadow-lg py-4 px-6 bg-white duration-1000 hover:bg-slate-200 text-grey-600 text-[18px] font-semibold tracking-tighter'>Explore Pages</p>
							</div>
						</a>
					</div>
				</div>

				{/* vertical scrolling pages  */}
				<div className="wrapper" onMouseLeave={resumeAnimation} onMouseEnter={pauseAnimation}>
					<div className="boxes">
						<div className="box">
							<Link className='pointer-events-auto ' to="/404" >
								<img src={page404} alt="page 404" />
							</Link>
						</div>
						<div className="box">
							<Link className='pointer-events-auto' to="/">
								<img src={booststart} alt="Website preview" />
							</Link>
						</div>
						<div className="box">
							<Link className='pointer-events-auto' to="/styleguide">
								<img src={styleguide} alt="style guide Website preview" />
							</Link>
						</div>
						<div className="box">
							<Link className='pointer-events-auto' to="/changelog">
								<img src={changelog} alt="change log Website preview" />
							</Link>
						</div>
						<div className="box">
							<Link className='pointer-events-auto' to="/price2">
								<img src={price2} alt="price2 Website preview" />
							</Link>
						</div>F

						<div className="box">
							<Link className='pointer-events-auto' to="/legal">
								<img src={legal} alt="legal Website preview" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default BoostSection