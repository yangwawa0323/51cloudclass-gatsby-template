import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
	return (
		<div className="items-center place-content-center flex-col flex-nowrap overflow-visible relative">
			<div className="fixed w-full bg-white flex z-10 flex-grow-0 flex-shrink-0 gap-0 px-3 -translate-x-1/2 left-1/2">
				<div className="w-full">
					<nav className="items-center flex overflow-hidden p-6 relative h-16">
						<div className="w-full flex flex-row items-center justify-between">
							<div className="logo">
								<div className="flex flex-row gap-3 items-center">
									<h1 className="text-sm">51cloudclass</h1>
								</div>
							</div>
							<div className="flex flex-row gap-5 pr-10 items-center text-xs font-semibold">
								<div>
									<p>
										<a href="./">Overview</a>
									</p>
								</div>
								<div>
									<p>
										<a href="./#pages">Pages</a>
									</p>
								</div>
								<div>
									<p>
										<Link to="/styleguide">
										Style Guide
										</Link>
									</p>
								</div>
								<div>
									<div>
										<div
											className="text-white rounded-md px-4 py-2"
											style={{ background: 'var(--primary)', filter: "brightness(1)" }}
										>
											<p className="text-xs leading-5">Use Template</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
