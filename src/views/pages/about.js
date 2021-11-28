import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-feather';
import Contribute from '../../views/components/contribute';
import Logo from '../../assets/img/frastyle-logo-full.svg';

import '../../assets/css/pages/other.css';
// import '../../assets/css/pages/other.min.css';

const About = () => {
	return (
		<div className=''>
			<div className='container py-4'>
				<div className='row justify-center mb-2 mb-m-4 mt-m-3'>
					<div className='box-10 box-m-8'>
						<img src={Logo} alt='Logo Frastyle Framework' />
					</div>
				</div>
				<div className='row justify-center mb-1'>
					<div className='box-12'>
						<p className='text-justify'>
							Frastyle CSS Framework merupakan sebuah framework
							Cascading Style Sheets yang dibuat di Indonesia
							untuk dapat membantu developer dalam melakukan
							mengembangkan antarmuka website Modern dan
							Responsif. Dengan adanya didukungan dokumentasi
							bahasa Indonesia diharapkan developer di Indonesia
							dapat menggunakan framework ini dan mempercepat
							dalam memahaminya.
						</p>
						<p>
							&copy; 2020-{new Date().getFullYear()} Frastyle
							Framework.
						</p>
					</div>
				</div>
				<div className='row justify-center text-center'>
					<div className='box-12'>
						<h5>Pengembang</h5>
						<h6>Dirancang & Dibuat</h6>
						<a
							href='https://github.com/bagasnur'
							style={{ width: 'fit-content' }}
							className='card-secondary d-flex items-center mx-auto mb-2 py-1'>
							<img
								style={{ borderRadius: '20px' }}
								height='40px'
								width='40px'
								src='https://avatars.githubusercontent.com/u/44259946?v=4'
								alt=''
							/>
							<div className='text-m-left ml-1'>
								<p className='m-0'>@bagasnur</p>
							</div>
						</a>
						<h6>Daftar Kontributor</h6>
						<p>
							Lihat siapa saja yang telah berkontribusi ke
							Frastyle Framework.{' '}
							<Link to='//github.com/frastyle/frastyle-css/graphs/contributors'>
								Daftar kontributor{' '}
								<Icons.ExternalLink
									size={16}
									color='var(--primary)'
									style={{ marginBottom: '-2px' }}
								/>
							</Link>
						</p>
					</div>
				</div>
				<div className='row justify-center text-center'>
					<div className='box-12'>
						<a
							href='https://www.netlify.com'
							target='_blank'
							rel='noreferrer'>
							<img
								src='https://www.netlify.com/img/global/badges/netlify-color-bg.svg'
								alt='Deploys by Netlify'
							/>
						</a>
					</div>
				</div>
			</div>
			<Contribute />
		</div>
	);
};

export default About;
