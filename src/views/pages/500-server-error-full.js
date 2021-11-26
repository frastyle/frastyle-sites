import React from 'react';

const ServerError = () => {
	return (
		<div className=''>
			<div className='header py-3 py-m-4' style={{ height: '100vh' }}>
				<div className='container text-center white'>
					<div
						className='row flex-column justify-center items-center'
						style={{ minHeight: 'calc(100vh - 120px)' }}>
						<h1 className='bold m-0' style={{ lineHeight: '0.75' }}>
							- 500 -
						</h1>
						<h2 className='m-0'>Server Error</h2>
						<div className='box-8'>
							<span>
								Coba muat ulang halaman setelah beberapa saat
								lagi.
							</span>
						</div>
					</div>
					<div className='row flex-column'>
						<div className='box-12'>
							<span>
								&copy; 2020-{new Date().getFullYear()} Frastyle
								Framework.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServerError;
