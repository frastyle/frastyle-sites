import React from 'react';
import { Link } from 'react-router-dom';

const Contribute = () => {
	return (
		<div className='gradient-blue'>
			<div className='container py-4 pb-s-5'>
				<div className='row justify-center mb-2'>
					<div className='box-10 text-center white'>
						<h2>Frastyle sedang Berkembang</h2>
						<p>
							Kami senang jika dapat membantu Anda dalam
							pengembangan website. Jadilah salah satu bagian dari
							komunitas untuk mendukung proyek ini agar terus
							berkembang.
						</p>
					</div>
				</div>
				<div className='row justify-center'>
					<Link
						to='//github.com/frastyle/frastyle-css'
						target='_blank'
						className='button-white m-1 my-m-0'>
						Berkontribusi
					</Link>
					<Link
						to='//github.com/frastyle/frastyle-css/discussions/categories/ideas'
						target='_blank'
						className='button-tertiary m-1 my-m-0'>
						Memberikan saran
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contribute;
