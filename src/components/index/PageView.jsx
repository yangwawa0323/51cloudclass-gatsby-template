import { Link } from 'gatsby';
import * as React from 'react';


const PageView = (props) => {

	const [active, setActive] = React.useState(false);


	const { image, route, title } = props
	return (
		<div >
			<div className="flex flex-col gap-4">
				<div className='relative border shadow-lg rounded-md overflow-hidden h-[420px] aspect-[4/5] object-cover pointer-events-none'>
					<div className='pointer-events-auto' onPointerEnter={()=> setActive(true)}  >
						<div >
							<img src={image} />
						</div>
					</div>
					{/* hover show the following content up  */}
					<div className='pointer-events-auto w-full left-0 flex flex-col justify-end items-center gap-2 h-full overflow-hidden absolute top-0 z-10 view-page-wrapper' style={{
						backgroundColor: 'rgba(0, 0, 0, 0.3)',
						opacity: active ? 1 : 0,
						padding: '20px 20px 5px',
						transition: 'all 1.25s',
					}}
						
						onPointerEnter={()=>setActive(true)} onPointerLeave={()=> setActive(false)}
					>
						<div className='w-full'>
							<div className='bg-white text-sm font-bold rounded-lg'
								style={{
									filter: `brightness(${active ? 0.9 : 1 })`,
									boxShadow: 'rgba(0, 0, 0, 0.18) 0px 0.60323px 0.60323px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.29021px 2.29021px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px',
								}}
							>
								<Link to={route || '/'}>
									<div className='flex py-2 px-5 items-center justify-center'>
										<p>
											View page
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div >
					<h3 className='text-sm leading-5 font-extrabold' style={{
						color: '#19154e',
					}}>{title}</h3>
				</div>
			</div>
		</div>
	)
}

export default PageView