import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/img/frastyle-logo.svg';

const Navbar = (props) => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split('/');

	let number = splitLocation[1];
	if (props.lastVersion) {
		number = props.lastVersion.data.number;
	}

	return (
		<nav id='navbar' className='navbar bg-white'>
			{props.lastVersion ? (
				<div className='container d-flex justify-center justify-m-between items-end'>
					<a href={'/' + number + '/'}>
						<img
							src={Logo}
							alt='Logo Frastyle CSS Framework'
							className='logo'
						/>
					</a>
					<div className='linkNavbar text-right overflow-x-visible overflow-y-hidden mt-1 mx-1 m-m-0'>
						<a
							href={'/' + number + '/docs/introductions'}
							className={
								splitLocation[2] === 'docs' ? 'active' : ''
							}>
							Dokumentasi
						</a>
						<a
							href={'/' + number + '/tema'}
							className={
								splitLocation[2] === 'tema' ? 'active' : ''
							}>
							Tema
						</a>
						<a
							href={'/' + number + '/template'}
							className={
								splitLocation[2] === 'template' ? 'active' : ''
							}>
							Template
						</a>
						<a
							href={'/' + number + '/tentang'}
							className={
								splitLocation[2] === 'tentang' ? 'active' : ''
							}>
							Tentang
						</a>
					</div>
				</div>
			) : (
				<div className='container d-flex justify-center justify-m-between items-end'>
					<Link to={'/' + number + '/'}>
						<img
							src={Logo}
							alt='Logo Frastyle CSS Framework'
							className='logo'
						/>
					</Link>
					<div className='linkNavbar text-right overflow-x-visible overflow-y-hidden mt-1 mx-1 m-m-0'>
						<Link
							to={'/' + number + '/docs/introductions'}
							className={
								splitLocation[2] === 'docs' ? 'active' : ''
							}>
							Dokumentasi
						</Link>
						<Link
							to={'/' + number + '/tema'}
							className={
								splitLocation[2] === 'tema' ? 'active' : ''
							}>
							Tema
						</Link>
						<Link
							to={'/' + number + '/template'}
							className={
								splitLocation[2] === 'template' ? 'active' : ''
							}>
							Template
						</Link>
						<Link
							to={'/' + number + '/tentang'}
							className={
								splitLocation[2] === 'tentang' ? 'active' : ''
							}>
							Tentang
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
