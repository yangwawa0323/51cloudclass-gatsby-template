import React from 'react'
import Footer from '../common/footer'
import Navbar from '../common/navbar'

const CustomBlog = ({ pageContext }) => {
	const { blog, title, relatives } = pageContext
	return (
		<div className='flex flex-col justify-center items-center'>
			<Navbar />
			<main>
				<div className='flex flex-col gap-6 p-24 min-h-full w-auto justify-center items-center max-w-[1200px]'>
					<div >
						<p className='uppercase font-extrabold'>{blog.type}</p>
					</div>
					<div >
						<h1 >{blog.title}</h1>
					</div>
					<div >
						<p className='text-gray-600 font-medium' >{blog.description}</p>
					</div>
					<div >
						<p className='text-gray-400 '>Sep 1, 2022</p>
					</div>
					<div >
						<div className='rounded-2xl overflow-hidden'>
							<img src={blog.image} alt="" />
						</div>
					</div>
					<div className='max-w-[700px] text-gray-600'>
						<p >Aenean dolor sed non euismod ut erat id. Posuere metus, lorem mi, consequat et elementum. Ut in tristique justo, purus, facilisis proin neque. Pulvinar pharetra lacus placerat lorem id. In felis imperdiet gravida pellentesque eget. Nunc vitae ornare ut eget blandit. Ridiculus varius nibh purus suspendisse amet elit a id eget. At euismod faucibus mollis ipsum eget amet feugiat viverra. Tempus libero consectetur tempor amet dolor nulla varius. Adipiscing consequat habitasse urna id in nec egestas.</p>
						<p >Urna interdum sit consequat convallis risus a. Vitae, viverra nisl sapien mattis quis condimentum dictum. Molestie pulvinar tellus pharetra.</p>
						<p >
							<br />
						</p>
						<h2 >Improve Your Launch Campaign</h2>
						<p >Diam et sagittis varius vitae ac. Mi suscipit dignissim volutpat neque. Sed hendrerit nunc, arcu lacus, pellentesque mus egestas dignissim. Lectus a donec nunc enim duis lobortis in sit ornare.</p>
						<ul >
							<li  >
								<p >Est bibendum tempor enim mauris. Adipiscing congue porta vitae amet.</p>
							</li>
							<li  >
								<p >Montes, nullam est in id. Amet suscipit maecenas quisque.</p>
							</li>
							<li  >
								<p >Et dictum dis ut mi erat magnis amet. Lobortis phasellus.</p>
							</li>
						</ul>
						<p >Metus, sit lobortis risus non ipsum, a volutpat mi. Laoreet hendrerit massa neque, mauris odio aliquam aliquam. Libero, ut duis ac vitae viverra eleifend commodo pellentesque nunc. Eu id molestie odio dolor. Duis lectus velit dignissim tellus tempor elit aliquet mattis.</p>

						<h4 >Boost your website</h4>
						<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim aliquam enim. Nulla laoreet finibus nunc nec dictum. Duis leo nisi, ornare a justo vitae, facilisis molestie ex. Maecenas gravida euismod orci ac laoreet.</p>
						<p >Morbi nec dictum nisi. Aliquam erat volutpat. Ut porttitor turpis in pharetra tempor. Fusce at odio et quam facilisis blandit sit amet sit amet dolor. Proin vestibulum finibus erat quis rhoncus. Suspendisse placerat consectetur metus dictum accumsan.</p>
						<p >Nam varius iaculis ligula, quis faucibus ex ultrices eget. Nullam rutrum augue a risus ullamcorper bibendum. Aliquam sagittis porta interdum.</p>
					</div>
					<div className='flex flex-col flex-start gap-10'>
						<div >
							<h3 >Latest articles</h3>
						</div>
						<div className='flex flex-row gap-4  justify-center items-center'>
							{
								relatives?.length > 1 && relatives.map((rel, index) => {
									if (index >= 2) return
									return (
										<div key={rel.title} className="flex-1 ">
											<a className='flex-row flex gap-2  overflow-hidden  rounded-2xl border-gray-300 shadow-lg w-[503px] h-min'>
												<img className='h-[100px] w-[150px] ' src={rel.image} alt={rel.title} />
												<div className='flex flex-col gap-2 p-2'>
													<h5 className='text-xs text-purple-700 uppercase font-extrabold'> {rel.type}</h5>
													<p className='text-xs font-medium text-gray-700'>{rel.title}</p>
												</div>
											</a>
										</div>);
								})
							}

						</div>
					</div>
				</div>

			</main>
			<div
				className='w-full justify-center items-center flex flex-col gap-10 p-16'
				style={{
					backgroundColor: '#7421fc',
				}}>
				<div className='flex flex-col max-w-[500px] items-center justify-center text-white gap-8'>
					<div >
						<p className='text-gray-300 uppercase font-extrabold'>stay in the loop</p>
					</div>
					<div className='justify-center items-center flex flex-col'>
						<h2 className='text-[48px] text-white break-words font-extrabold'>Subscribe for more inspiration.</h2>
					</div>
					<div >
						<div >
							<form className='flex flex-row gap-10 items-center relative'>
								<div className='absolute hidden'>
									<input type="text" tabindex="-1" />
								</div>
								<input className='text-gray-600 p-[15px] text-sm rounded-lg font-medium outline-none' type="email" name="email" vaule="" placeholder="email@framer.com" />
								<div >
									<input
										className='p-[15px] border-none rounded-lg text-white bg-black text-sm duration-500  hover:text-gray-400' value="subscribe" type="submit" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default CustomBlog