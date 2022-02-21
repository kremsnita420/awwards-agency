import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav>
			<div className='container'>
				<div className='nav-columns'>
					{/* nav column 1 */}
					<div className='nav-column'>
						<div className='nav-label'>Menu</div>
						<ul className='nav-links'>
							<li>
								<NavLink to='/case-studies'>Case Studies</NavLink>
							</li>
							<li>
								<NavLink to='/aproach'>Approach</NavLink>
							</li>
							<li>
								<NavLink to='/services'>Services</NavLink>
							</li>
							<li>
								<NavLink to='/about-us'>About us</NavLink>
							</li>
						</ul>
					</div>
					{/* nav column 2 */}
					<div className='nav-column'>
						<div className='nav-label'>Contact</div>
						<div className='nav-infos'>
							{/* nav info 1 */}
							<ul className='nav-info'>
								<li className='nav-info-label'>Email</li>
								<li>
									<NavLink to='/contact'>Get in touch with us</NavLink>
								</li>
								<li>
									<NavLink to='/audit'>Get a free audit</NavLink>
								</li>
							</ul>
							{/* nav info 2 */}
							<ul className='nav-info'>
								<li className='nav-info-label'>Headquarter</li>
								<li>Route du Jura 49</li>
								<li>1700 Fribourg</li>
								<li>Switzerland</li>
							</ul>
							{/* nav info 3 */}
							<ul className='nav-info'>
								<li className='nav-info-label'>Phone</li>
								<li>+41 (0) 79 510 28 70</li>
							</ul>
							{/* nav info 4 */}
							<ul className='nav-info'>
								<li className='nav-info-label'>Legal</li>
								<li>Privacy & Cookies</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
