/**
 * Media query is OK.
 */

import * as React from "react";

const Footer = (props) => {
	const { extraStyles } = props;
	return (
		<div className="w-full min-w-[768px] h-auto relative flex flex-auto pointer-events-none">
			<div className="contents">
				<footer className=" items-center gap-[100px] h-min px-24 py-8 place-content-center flex-col w-full text-gray-300 text-xs"
					style={{ backgroundColor: 'rgb(79, 25, 166)' }}>
					<div className='gap-10 flex flex-col max-w-[1200px]'
						style={{
							extraStyles,
						}}
					>
						<div>
							<a href="#footer">
								<div>
									<h1 className="text-white text-base">51cloudclass</h1>
								</div>
							</a>
						</div>
						<div className="w-full flex justify-around gap-10">
							<div className="flex flex-col gap-1.5 flex-1 h-min overflow-hidden min-w-[200px]" >
								<div>
									<p className="font-bold text-white">Overview</p>
								</div>
								<div>
									<p>
										<a href="/">Overview</a>
									</p>
								</div>
								<div>
									<p>
										<a href="/">Pages</a>
									</p>
								</div>
								<div>
									<p>
										<a href="./styleguide">Style Guide</a>
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-1.5 flex-1 h-min overflow-hidden min-w-[200px]">
								<div>
									<p className="font-bold text-white">Pages</p>
								</div>
								<div>
									<p>
										<a href="./#pages" >
											All Pages
										</a>
									</p>
								</div>
								<div>
									<p>
										<a href="./landing1">
											Landing Page
										</a>
									</p>
								</div>
								<div>
									<p>
										<a href="./about-1">
											About
										</a>
									</p>
								</div>
								<div>
									<p>
										<a href="./contact-1">
											Contact
										</a>
									</p>
								</div>
								<div>
									<p>
										<a href="./blog-1">
											Blog
										</a>
									</p>
								</div>
								<div>
									<p>
										<a href="./features-1">
											Features
										</a>
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-1.5 flex-1 h-min overflow-hidden min-w-[200px]">
								<div>
									<p className="font-bold text-white">
										Template
									</p>
								</div>
								<div>
									<p>
										<a href="./changelog">
											Changelog
										</a>
									</p>
								</div>
								<div>
									<p>
										<a href="./styleguide">
											Styleguide
										</a>
									</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<p className="text-[11px]">
									<a href="https://www.51cloudclass.com/"
									>
										© Copyright by <strong>51cloudclass</strong>
									</a>
								</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
