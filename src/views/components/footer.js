import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/img/frastyle-logo.svg';

const Footer = (props) => {
	const lastVersion = props.lastVersion;

	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split('/');

	let number = splitLocation[1];
	if (props.lastVersion) {
		number = props.lastVersion.data.number;
	}

	return (
		<footer className='bg-light py-2'>
			<div className='container text-center text-m-left'>
				<div className='row flex-column flex-m-row justify-between self-align-baseline mt-3'>
					<div className='box-m-5'>
						<img
							className='logo mx-auto mx-m-0 mb-2'
							src={Logo}
							alt='Logo Frastyle CSS Framework'
						/>
						<p>
							Kode sumber dibawah{' '}
							<Link to='//github.com/frastyle/frastyle-css/blob/main/LICENSE'>
								lisensi MIT
							</Link>
							. Konten dalam website dibawah lisensi{' '}
							<Link to='//creativecommons.org/licenses/by-sa/2.0'>
								CC BY-SA 2.0
							</Link>
							.
						</p>
					</div>
					<div className='box-m-6 flex-row justify-end'>
						<div className='box box-m-5 my-m-0'>
							<h4>Dokumentasi</h4>
							<ul>
								<li>
									<Link
										to={
											'/' + number + '/docs/installations'
										}>
										Instalasi
									</Link>
								</li>
								<li>
									<Link
										to={'/' + number + '/docs/responsive'}>
										Tata Letak
									</Link>
								</li>
								<li>
									<Link
										to={'/' + number + '/docs/fonts-sizes'}>
										Tipografi
									</Link>
								</li>
								<li>
									<Link
										to={
											'/' +
											number +
											'/docs/buttons-and-links'
										}>
										Elemen HTML
									</Link>
								</li>
								<li>
									<Link to={'/' + number + '/docs/alerts'}>
										Komponen
									</Link>
								</li>
								<li>
									<Link to={'/' + number + '/docs/shadows'}>
										Peralatan
									</Link>
								</li>
							</ul>
						</div>
						<div className='box box-m-4 my-m-0'>
							<h4>Komunitas</h4>
							<ul>
								<li>
									<Link to='//github.com/frastyle/frastyle-css'>
										Berkontribusi
									</Link>
								</li>
								<li>
									<Link to='//github.com/frastyle/frastyle-css/discussions/categories/ideas'>
										Saran & Masukan
									</Link>
								</li>
								<li>
									<Link to='//github.com/frastyle/frastyle-css/issues'>
										Masalah & Bugs
									</Link>
								</li>
								<li>
									<Link to='//github.com/frastyle/frastyle-css/discussions'>
										Diskusi Forum
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='row flex-column flex-m-row justify-center mt-2 mt-m-5'>
					<div className='box'>
						<p>
							&copy; 2020-{new Date().getFullYear()} Frastyle
							Framework. Dibuat dan didesain oleh{' '}
							<Link to='//github.com/bagasnur'>@bagasnur</Link> di
							Indonesia.
						</p>
					</div>
					<div className='box text-m-right'>
						{lastVersion.code !== 200 ? (
							<p>Dokumentasi v0.x</p>
						) : lastVersion.data.stage === 'release' ? (
							<p>
								Dokumentasi terbaru v{lastVersion.data.number}.x
							</p>
						) : (
							<p>
								Dokumentasi terbaru v{lastVersion.data.number}
								.x-{lastVersion.data.stage}
							</p>
						)}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
