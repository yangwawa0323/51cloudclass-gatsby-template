/**
 * Media query is OK.
 *
 * @format
 */

import { Link } from 'gatsby';
import * as React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import gsap from 'gsap';

const animation = () => {
	const tl = gsap.timeline();
	let tweenEntireBlog = gsap.from('.entire-blog', {
		opacity: 0.8,
		y: '+10%',
		duration: 1.5,
	});

	let tweenStayInTheLoopForm = gsap.from('.stay-in-the-loop-form', {
		scrollTrigger: {
			trigger: '.blogs-grid',
			// scrub: 1,
			start: 'bottom 90%',
			end: 'bottom 60%',
			toggleActions: 'play none none reverse',
			// markers: true,
		},
		ease: 'power4.inOut',
		duration: 1.5,
		y: '+60%',
		opacity: 0,
	});
	tl.add(tweenEntireBlog);
	tl.add(tweenStayInTheLoopForm);
};

const Blog2 = ({ pageContext }) => {
	const { blogs } = pageContext;
	const [firstBlog, ...remainings] = blogs;

	React.useEffect(() => {
		animation();
	}, []);

	return (
		<div>
			<Navbar />
			<div
				style={{
					background:
						'linear-gradient(0deg,var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, #f6f4ff) 0%,#fff 100%)',
				}}
				className='min-w-[425px] entire-blog pt-24 px-12 pb-24 flex flex-col gap-16 justify-center items-center'
			>
				<div className=' max-w-[470px] flex flex-col gap-4 justify-center items-center'>
					<div>
						<h1>Blog</h1>
					</div>
					<div>
						<p className='text-center font-medium text-[24px] text-gray-600 break-words'>
							Find all of our latest stories and subscribe to our newsletter for
							more.
						</p>
					</div>
				</div>

				{/*  */}
				<div>
					<div className='flex flex-row gap-10 h-min max-w-[1200px] overflow-visible'>
						<div className='flex-[1.5] flex gap-4 justify-center items-center h-min '>
							<Link
								to={`/blog/${firstBlog.title.toLowerCase().replace(/ /g, '-')}`}
								className='rounded-xl shadow-lg overflow-hidden relative'
							>
								<div>
									<div>
										<div>
											<img
												className='object-cover object-right-top  w-full h-full rounded-[inherit]'
												src={firstBlog.image}
												alt={firstBlog.title}
											/>
										</div>
									</div>
									<div className='absolute p-8 bottom-7 text-gray-300 hover:text-gray-400 duration-500'>
										<p>{firstBlog.type}</p>
										<h4 className='text-gray-300'>{firstBlog.title}</h4>
										<p>{firstBlog.description}</p>
									</div>
								</div>
							</Link>
						</div>
						<div className='flex-[0.8] flex flex-col  justify-start gap-4 h-full'>
							<div>
								<h4>Latest entries</h4>
							</div>
							<div className='flex flex-col gap-4 justify-start w-full'>
								{/*  */}
								{remainings.map((blog, index) => (
									<div
										key={index}
										className='rounded-lg hover:shadow-xl duration-500 shadow-md overflow-hidden flex flex-row gap'
									>
										<Link
											to={`/blog/${blog.title
												.toLowerCase()
												.replace(/ /g, '-')}`}
											className='flex flex-row max-w-[400px] h-14 justify-center items-center'
										>
											<div className='flex-[0.8]'>
												<img
													src={blog.image}
													alt={blog.title}
												/>
											</div>
											<div className='flex-1 p-4'>
												<h6>{blog.title}</h6>
											</div>
										</Link>
									</div>
								))}
								{/*  */}
							</div>
						</div>
					</div>
				</div>

				{/*  */}
				<div>
					<div className='blogs-grid grid grid-cols-[repeat(2,minmax(200px,1fr))] grid-rows-[repeat(2,min-content)] gap-4 auto-rows-min h-min justify-center max-w-[1200px] w-full'>
						{pageContext.blogs.map((blog) => (
							<div
								key={blog.title}
								className='rounded-2xl overflow-hidden border-[2px] shadow-md hover:shadow-lg hover:scale-105 duration-500  h-full w-full place-self-start'
							>
								<Link
									to={`/blog/${blog.title.toLowerCase().replace(/ /g, '-')}`}
								>
									<div className='h-[334px] overflow-hidden'>
										<img
											className='w-full h-full object-cover'
											src={blog.image}
											alt={blog.title}
										/>
									</div>
									<div className='flex flex-col p-8 gap-2'>
										<div>
											<p className='uppercase font-extrabold text-purple-700 text-sm'>
												{blog.type}
											</p>
										</div>
										<div>
											<h4>{blog.title}</h4>
										</div>
										<div>
											<p>{blog.description}</p>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
			{/*  
			<div className='stay-in-the-loop-form flex flex-col p-16 justify-center items-center bg-white'>
				<div className='flex flex-col justify-center items-center max-w-[500px] gap-4'>
					<div>
						<p className='uppercase text-purple-700 font-extrabold'>
							stay in the loop
						</p>
					</div>
					<div>
						<h2 className='break-words text-center'>
							Subscribe for more inspiration.
						</h2>
					</div>
					<div>
						<div>
							<form className='relative flex flex-row justify-center items-center h-min'>
								<div className='hidden absolute'>
									<input
										type='text'
										tabIndex='-1'
									/>
								</div>
								<input
									className='h-full p-[15px] focus:bg-gray-200   bg-gray-100 text-gray-800 rounded-l-lg border-none outline-none'
									type='email'
									name='email'
									placeholder='email@framer.com'
								/>
								<div>
									<input
										className='h-full p-[15px] border-none rounded-r-lg text-white bg-purple-700 hover:bg-purple-600 text-sm duration-500  hover:text-gray-400'
										value='subscribe'
										type='submit'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			*/}
			<Footer />
		</div>
	);
};

export default Blog2;
