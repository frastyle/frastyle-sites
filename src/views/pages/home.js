import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-feather';
import CodeBox from '../components/codeBox';
import Contribute from '../../views/components/contribute';

import ElementPreview from '../../assets/img/element-preview.png';
import ThemePreview from '../../assets/img/theme-preview.png';
import DokumentasiPreview from '../../assets/img/dokumentasi-preview.png';
import TemplateCollection from '../../assets/img/template-collection.png';
import '../../assets/css/pages/home.css';
// import '../../assets/css/pages/home.min.css';

const Home = (props) => {
	const lastVersion = props.lastVersion;
	const number = props.match.params.version;

	return (
		<div>
			<div
				className='hero py-4 py-m-8'
				style={{ marginBottom: '-1.75em' }}>
				<div className='container mb-1 mb-m-3'>
					<h1 className='text-center bold'>
						Bangun antarmuka website modern dan responsif lebih
						mudah
					</h1>
					<div className='row justify-center'>
						<a href='#instalasi-cepat' className='button-primary'>
							Instalasi Cepat
						</a>
						<Link
							to={'/' + number + '/docs/introductions'}
							className='button-secondary'>
							Dokumentasi &gt;
						</Link>
					</div>
				</div>
			</div>
			<div className='d-flex justify-center'>
				{lastVersion.code !== 200 ? (
					<span className='frastyle-version bg-white shadow-dark'>
						<b>Belum ada rilis versi</b>
					</span>
				) : lastVersion.data.stage === 'release' ? (
					<span className='frastyle-version bg-white shadow-dark'>
						Rilis terbaru <b>v{lastVersion.data.number}.x</b>
					</span>
				) : (
					<span className='frastyle-version bg-white shadow-dark'>
						Rilis terbaru{' '}
						<b>
							v{lastVersion.data.number}.x-
							{lastVersion.data.stage}
						</b>
					</span>
				)}
			</div>
			<div
				id='instalasi-cepat'
				className='gradient-blue pt-5 pb-9'
				style={{ marginTop: '-1.5em' }}>
				<div className='container'>
					<div className='row justify-center'>
						<div className='box-10 text-center white'>
							<h2>Instalasi Cepat</h2>
							<p>
								Anda cukup memasukkan kode program berikut ke
								dalam file <code>.html</code> untuk melakukan
								pemasangan framework melalui CDN (Content
								Delivery Network).
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container' style={{ marginTop: '-12em' }}>
				<div className='row justify-center'>
					<div className='box-11 mt-2'>
						<CodeBox lang='xml' className='my-1 shadow-large'>
							{`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyek Baru | Frastyle Framework</title>
    <!-- Frastyle CSS Framework -->
    <link rel="stylesheet" href="css/frastyle.min.css" >
    <!-- Simvle - Frastyle Theme -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@frastyle/simvle-theme/dist/css/simvle.min.css">
</head>
<body>
	<!-- Konten anda -->
    <div class="container">
        <div class="row items-center" style="height: 100vh;">
            <div class="card box-12 box-m-8 box-xl-6 bg-primary white text-center m-auto p-4">
            <h1>Halo, developer!</h1>
            <span>
                Terima kasih sudah menggunakan Frastyle CSS Framework, mari bersama
                ciptakan proyek website terbaik Anda.
            </span>
            </div>
        </div>
    </div>
</body>
</html>`}
						</CodeBox>
					</div>
				</div>
				<div className='row justify-center text-center'>
					<p className='box-11'>
						Alternatif metode untuk melakukan{' '}
						<Link to={'/' + number + '/docs/installations'}>
							Instalasi Frastyle
						</Link>
					</p>
				</div>
			</div>
			<div className='container pt-4 pb-6'>
				<div className='row justify-center'>
					<div className='box-10 text-center'>
						<h2 className='m-0'>Memperkenalkan</h2>
					</div>
				</div>
				<div className='row pt-1 py-m-2'>
					<div className='card box-12 box-m-4'>
						<Icons.Grid size={40} color='var(--primary)' />
						<h5 className=''>Grid responsif</h5>
						<p>Website responsif di ukuran layar yang berbeda.</p>
					</div>
					<div className='card box-12 box-m-4'>
						<Icons.Minimize2 size={40} color='var(--primary)' />
						<h5 className=''>File kecil</h5>
						<p>
							Ukuran file framework sudah melalui tahap kompresi.
						</p>
					</div>
					<div className='card box-12 box-m-4'>
						<Icons.Award size={40} color='var(--primary)' />
						<h5 className=''>Sumber Terbuka</h5>
						<p>
							Kode sumber terbuka dibawah{' '}
							<a href='https://github.com/frastyle/frastyle-css/blob/main/LICENSE'>
								lisensi MIT
							</a>
							.
						</p>
					</div>
				</div>
				<div className='row flex-column flex-m-row'>
					<img
						src={ElementPreview}
						alt=''
						className='box-12 box-m-6 d-none d-m-block fit-scale-down'
					/>
					<div className='introducing card box-m-6'>
						<Icons.Archive size={40} color='var(--primary)' />
						<h5 className=''>Elemen HTML Terformat</h5>
						<p>
							Elemen utama HTML yang Anda butuhkan tersedia dan
							terformat dengan baik. Bahkan Anda dapat mengubah
							gaya di setiap elemennya.
						</p>
						<Link to={'/' + number + '/docs/buttons-and-links'}>
							Menuju ke Elemen HTML{' '}
							<Icons.ExternalLink
								size={16}
								color='var(--primary)'
								style={{ marginBottom: '-2px' }}
							/>
						</Link>
					</div>
				</div>
				<div className='row flex-column flex-m-row mt-m-2 x-m-reverse'>
					<img
						src={ThemePreview}
						alt=''
						className='box-12 box-m-6 d-none d-m-block fit-scale-down'
					/>
					<div className='introducing card box-m-6'>
						<Icons.PenTool size={40} color='var(--primary)' />
						<h5 className=''>Beragam Pilihan Tema</h5>
						<p>
							Temukan dan jelajahi berbagai macam pilihan variasi
							tema yang kami sediakan. Pilih dan terapkan ke dalam
							proyek Anda.
						</p>
						<Link to={'/' + number + '/tema'}>
							Jelajahi beragam tema{' '}
							<Icons.ExternalLink
								size={16}
								color='var(--primary)'
								style={{ marginBottom: '-2px' }}
							/>
						</Link>
					</div>
				</div>
				<div className='row flex-column flex-m-row mt-m-2'>
					<img
						src={DokumentasiPreview}
						alt=''
						className='box-12 box-m-6 d-none d-m-block fit-scale-down'
					/>
					<div className='introducing card box-m-6'>
						<Icons.BookOpen size={40} color='var(--primary)' />
						<h5 className=''>Dokumentasi Indonesia</h5>
						<p>
							Kami memberikan Anda kemudahan dalam memahami
							Dokumentasi Frastyle dengan menyediakan dukungan
							Bahasa Indonesia.
						</p>
						<Link to={'/' + number + '/docs/introductions'}>
							Lihat dokumentasi{' '}
							<Icons.ExternalLink
								size={16}
								color='var(--primary)'
								style={{ marginBottom: '-2px' }}
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className='temp'>
				<div className='container py-6'>
					<div className='row justify-center'>
						<div className='box-10 text-center white'>
							<h2>Cepat dengan Template</h2>
							<p>
								Anda dapat menggunakan tata letak dari template
								yang tersedia untuk mempercepat Anda dalam
								proses pembangunan website.
							</p>
						</div>
					</div>
					<div className='row justify-center'>
						<img
							src={TemplateCollection}
							alt=''
							className='box-12 fit-contain'
						/>
					</div>
					<div className='row justify-center'>
						<Link
							to={'/' + number + '/template'}
							className='button-primary mx-auto mt-1'>
							Jelajahi Template
						</Link>
					</div>
				</div>
			</div>
			<Contribute />
		</div>
	);
};

export default Home;
