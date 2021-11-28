import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import * as Icons from 'react-feather';
import Contribute from '../../views/components/contribute';
import Logo from '../../assets/img/frastyle-icon.svg';

import '../../assets/css/pages/other.css';
// import '../../assets/css/pages/other.min.css';

const Template = () => {
	const [data, setData] = useState([]);
	const [loading, setloading] = useState(true);
	const [errors, setErrors] = useState(false);

	const url =
		'https://raw.githubusercontent.com/frastyle/frastyle-template/main/list-template.json';

	const getResult = useCallback(async () => {
		await axios
			.get(url)
			.then((response) => {
				setData(response.data);
			})
			.catch(() => {
				setloading(false);
				setErrors(true);
			})
			.finally(() => {
				setloading(false);
			});
	}, []);

	useEffect(() => {
		if (data.length === 0) {
			getResult();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return errors ? (
		<div className='header py-3 py-m-4'>
			<div className='container text-center white'>
				<h1 className='bold m-0'>- 500 -</h1>
				<b className='m-0'>Server Error</b>
			</div>
		</div>
	) : loading ? (
		<div className='preload'>
			<div className='container flex-column text-center'>
				<img src={Logo} alt='' style={{ margin: 'auto' }} />
				<span className='mt-2'>Memuat data...</span>
			</div>
		</div>
	) : (
		<div className=''>
			<div className='header py-3 py-m-4'>
				<div className='container text-center white'>
					<p className='mb-1'>Memperkenalkan</p>
					<h1 className='bold m-0'>Koleksi Template</h1>
				</div>
			</div>
			<div className='container py-4'>
				<div className='row pb-3'>
					<div className='card box-12 box-m-4 p-2'>
						<Icons.DownloadCloud size={40} color='var(--primary)' />
						<h5 className=''>Unduh Template</h5>
						<p>Unduh untuk memulai proyek dari template</p>
					</div>
					<div className='card box-12 box-m-4 p-2'>
						<Icons.Layout size={40} color='var(--primary)' />
						<h5 className=''>Tata Letak Dasar</h5>
						<p>Sebagai fondasi dasar awal tata letak website.</p>
					</div>
					<div className='card box-12 box-m-4 p-2'>
						<Icons.Award size={40} color='var(--primary)' />
						<h5 className=''>Sumber Terbuka</h5>
						<p>
							Kode sumber terbuka dibawah{' '}
							<a href='https://github.com/frastyle/frastyle-template/blob/main/LICENSE'>
								lisensi MIT
							</a>
							.
						</p>
					</div>
				</div>
				<h3 className='text-center my-2'>Daftar Template</h3>
				<div className='row pb-m-3 gap-medium'>
					{Object.keys(data.template_list).map((i) => (
						<div className='card box-12 box-m-6 theme shadow'>
							<div className='image-theme'>
								<img
									src={data.template_list[i].preview_img}
									alt={
										data.template_list[i].title + ' Preview'
									}
									width='100%'
									height='100%'
								/>
								{/* <a target='_blank' href=''>
									Demo Template
								</a> */}
							</div>
							<div className='flex-column bg-white items-stretch items-m-start justify-between p-2'>
								<div className='box-12 mb-1 m-0'>
									<h5 className='mt-0'>
										{data.template_list[i].title}
									</h5>
									<p>{data.template_list[i].description}</p>
								</div>
								<a
									href={data.template_list[i].download_url}
									target='_blank'
									download
									className='button-success'
									rel='noreferrer'>
									Unduh
								</a>
							</div>
						</div>
					))}
					<div
						className='card flex-column box-12 box-m-6 justify-center items-center'
						style={{ minHeight: '300px' }}>
						<Icons.Clock size={40} color='var(--light-2)' />
						<span className='bold light-2 mt-1'>
							Akan segera hadir
						</span>
					</div>
				</div>
			</div>
			<Contribute />
		</div>
	);
};

export default Template;
