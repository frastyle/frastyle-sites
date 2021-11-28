import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import * as Icons from 'react-feather';
import Contribute from '../../views/components/contribute';
import Logo from '../../assets/img/frastyle-icon.svg';

import '../../assets/css/pages/documentation.css';
// import '../../assets/css/pages/documentation.min.css';

const Documentation = (props) => {
	const [Content, setContent] = useState(null);
	const [version, setVersion] = useState({ code: 500 });
	const [data, setData] = useState([]);
	const [loading, setloading] = useState(true);
	const [errors, setErrors] = useState(false);
	const [delay, setDelay] = useState(null);
	let link = props.match.params.page;
	let number = props.match.params.version;

	const url = 'https://dev.bagasnur.my.id/frastyle-dev/api/';

	const getSearch = useCallback(
		async (key) => {
			let returnData;
			await axios
				.get(`${url}search?v=${number}&q=${key}`)
				.then((response) => {
					setData(response.data);
					returnData = response.data;
					setErrors(false);
				})
				.catch(() => {
					setErrors(true);
				})
				.finally(() => {
					setloading(false);
				});
			return returnData;
		},
		[number]
	);

	const search = (e) => {
		if (delay) {
			clearTimeout(delay);
			setDelay(null);
		}
		setDelay(
			setTimeout(async () => {
				await getSearch(e !== undefined ? e.target.value : '').then(
					(response) => {
						if (response === undefined) {
						} else if (
							response.code === 200 ||
							response.code === 404
						) {
							/* eslint-disable-next-line no-undef */
							menu_mobile(true);
						}
					}
				);
			}, 1000)
		);
	};

	useEffect(() => {
		if (data.length === 0) {
			setloading(false);
			setData(props.data);
			setVersion(props.version);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split('/');

	useEffect(() => {
		const page = React.lazy(() =>
			import(
				`!babel-loader!@mdx-js/loader!../docs/v${number}/${link}.mdx`
			).catch(() =>
				import(`!babel-loader!@mdx-js/loader!../docs/404.mdx`)
			)
		);
		setContent(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [link, number]);

	return errors ? (
		<div className='header py-3 py-m-4'>
			<div className='container text-center white'>
				<h1 className='bold m-0'>- 500 -</h1>
				<p className='bold'>Server Error</p>
				<span>Coba muat ulang halaman setelah beberapa saat lagi.</span>
			</div>
		</div>
	) : loading ? (
		<div className='preload'>
			<div className='container flex-column text-center'>
				<img src={Logo} alt='' style={{ margin: 'auto' }} />
				<b className='mt-2'>Memuat data...</b>
			</div>
		</div>
	) : (
		<div>
			<div className='container'>
				<div className='py-1'>
					<div className='row searching'>
						<div className='box-9 bg-white shadow-small'>
							<input
								placeholder='Pencarian...'
								onChange={search}
							/>
						</div>
						<div className='box-3 d-m-none d-flex justify-end'>
							<button
								// eslint-disable-next-line no-undef
								onClick={() => menu_mobile()}
								className='menu-button m-0 shadow-small'>
								<Icons.Menu />
							</button>
						</div>
						<div className='box-3 d-none d-m-block dropdown'>
							<button
								// eslint-disable-next-line no-undef
								onClick={() => myFunction('desktop-version')}
								className='dropbtn button-secondary shadow-small'>
								Versi {number}.x
							</button>
							<div
								id='desktop-version'
								className='dropdown-content'>
								{version.code !== 200 ? (
									<div>
										{version.code +
											': Terjadi kesalahan saat memuat data.'}
									</div>
								) : (
									Object.keys(version.data).map((i) => (
										<a
											href={
												'/' +
												version.data[i].number +
												'/docs/introductions'
											}
											key={i}>
											Versi{' '}
											{version.data[i].number +
												(version.data[i].stage ===
												'release'
													? '.x'
													: '.x-' +
													  version.data[i].stage)}
										</a>
									))
								)}
							</div>
						</div>
					</div>
				</div>
				<div className='row flex-column flex-m-row justify-between'>
					<div
						id='menu-mobile'
						className='sidebar box-12 box-m-4 box-l-3 bg-light d-none d-m-block mb-2'
						style={{ borderRadius: '.5em' }}>
						<div className='dropdown d-m-none px-0 m-1'>
							<button
								// eslint-disable-next-line no-undef
								onClick={() => myFunction('mobile-version')}
								className='dropbtn button-secondary'>
								Versi {number}.x
							</button>
							<div
								id='mobile-version'
								className='dropdown-content'>
								{version.code !== 200 ? (
									<div>
										{version.code +
											': Terjadi kesalahan saat memuat data.'}
									</div>
								) : (
									Object.keys(version.data).map((i) => (
										<a
											href={
												'/' +
												version.data[i].number +
												'/docs/introductions'
											}
											key={i}>
											Versi{' '}
											{version.data[i].number +
												(version.data[i].stage ===
												'release'
													? '.x'
													: '.x-' +
													  version.data[i].stage)}
										</a>
									))
								)}
							</div>
						</div>
						<h5 className='box-12 mx-1'>Dokumentasi</h5>
						<div className='sidebar-menu'>
							{data.code === 404 ? (
								<div>Hasil pencarian tidak ditemukan.</div>
							) : data.code !== 200 ? (
								<div>
									{data.code +
										': Terjadi kesalahan saat memuat data.'}
								</div>
							) : (
								Object.keys(data.data).map((sectionName, i) => (
									<div key={i}>
										<strong>{sectionName}</strong>
										<div className='list-link'>
											{Object.keys(
												data.data[sectionName]
											).map((i) => {
												let path =
													data.data[sectionName][
														i
													].content_file.split('.');

												return (
													<Link
														className={
															splitLocation[3] ===
															path[0]
																? 'active'
																: ''
														}
														to={
															'/' +
															number +
															'/docs/' +
															path[0]
														}
														key={i++}>
														{
															data.data[
																sectionName
															][i].title
														}
													</Link>
												);
											})}
										</div>
									</div>
								))
							)}
						</div>
					</div>
					<div className='box-12 box-m-8 box-l-9 documentation overflow-x-auto mb-4 pl-m-2'>
						<React.Suspense
							fallback={
								<div className='preload'>
									<div className='flex-column text-center'>
										<img src={Logo} alt='' />
										<b className='mt-2'>Memuat data...</b>
									</div>
								</div>
							}>
							<Content />
							<p className='pt-1'>
								Menemukan kesalahan kode atau dokumentasi? Bantu
								kami sempurnakan dokumentasi dengan memberikan{' '}
								<a href='https://github.com/frastyle/frastyle-docs/'>
									saran perubahan
								</a>
								.
							</p>
						</React.Suspense>
					</div>
				</div>
			</div>
			<Contribute />
		</div>
	);
};

export default Documentation;
