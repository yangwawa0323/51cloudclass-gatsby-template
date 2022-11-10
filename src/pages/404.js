import { Link } from 'gatsby';
import * as React from 'react'
import Footer from '../components/common/footer';
import Navbar from '../components/common/navbar';
import '../styles/index.scss';
import gsap from 'gsap'



const Page404 = () => {

	React.useEffect(() => {
		gsap.from('.error-content-wrapper', {
			y: '80%vh',
			opacity: 0,
			ease: 'power1.inOut',
			duration: 1.8,
		})
	},[])

	return (
		<div>
			<Navbar />
			<main className='items-center' >
				{/* Error 404 content  */}
				<div className='error-content-wrapper justify-center
				 items-center flex flex-col gap-24 
				 relative p-24 w-full z-20 h-[100vh]
				 '
					style={{
					background: 'linear-gradient(0deg,  #f6f4ff  0%, hsl(0, 0%, 100%) 100%)',
				}}>
					<div className="gap-5
				items-center flex flex-col
				overflow-visible relative w-4/5
				h-min max-h-[700px] justify-start content-center">
						<div className='outline-none flex flex-col justify-start items-center'>
							<div className="text-[145px] font-extrabold -tracking-[10px]"
								style={{ color: 'var(--purple)' }}>404</div>
						</div>
						<div className='gap-5 flex flex-col flex-wrap justify-center items-center'>
							<div >
								<h1 >Page not found.</h1>
							</div>
							<div >
								<p className='text-xl'>The page you are looking for doesn't
									exist or has been moved.<br/>
									Please go back to the homepage.
								</p>
							</div>
							<div >
								<div className='pointer-events-auto cursor-pointer px-6 py-4  text-white rounded-lg'
									style={{ backgroundColor: 'var(--purple)', borderColor: 'white', filter: 'brightness(0.89937)'}}>
									<Link to="/">
										<div >
											<p className='font-bold text-sm leading-4' 
											>Go back home</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Page404