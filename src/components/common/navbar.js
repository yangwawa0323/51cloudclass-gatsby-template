import * as React from "react";
import { Link } from "gatsby";
import '../../styles/index.scss';

const Navbar = (props) => {
	const { backgroundColor, textColor } = props;
	
	const [bgColor, setBgColor] = React.useState('white')
	const [txtColor, setTxtColor ] = React.useState('')

	React.useEffect(() => {
		setBgColor(backgroundColor ? backgroundColor : 'white');
		setTxtColor(textColor ? textColor : '')
	},[])
	

	return (
		<div className="navbar-container items-center place-content-center flex-col flex-nowrap overflow-visible relative">
			<div
				
				style={{ backgroundColor: bgColor, color : txtColor, }}
				className="fixed w-full flex z-50 flex-grow-0 flex-shrink-0 gap-0 -translate-x-1/2 left-1/2">
				<div className="w-full">
					<nav className="items-center flex overflow-hidden p-6 relative h-16">
						<div className="w-full flex flex-row items-center justify-between">
							<div className="logo">
								<div className="flex flex-row gap-3 items-center">
									<h1
										style={{ color: txtColor , }}
										className="text-sm">51cloudclass</h1>
								</div>
							</div>
							<div className="flex flex-row gap-5 pr-10 items-center text-xs font-semibold">
								<div>
									<p style={{
										color: txtColor,
									}}>
										<Link to="/">Overview</Link>
									</p>
								</div>
								<div>
									<p style={{
										color: txtColor,
									}}>
										<Link to="/#pages">Pages</Link>
									</p>
								</div>
								<div>
									<p style={{
										color:txtColor,
									}}>
										<Link to="/styleguide">
											Style Guide
										</Link>
									</p>
								</div>
								<div>
									<div>
										<div
											className="text-white rounded-md px-4 py-2 hover:opacity-75 duration-700"
											style={bgColor === 'white' ? { background: 'var(--primary)', filter: "brightness(1)" }
												: { background: 'white', filter: 'darkness(1)' }}
										>
											<p className="text-xs leading-5"
												style={{
													color: backgroundColor,
												}}
											>Use Template</p>
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
