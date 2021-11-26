import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import Logo from './assets/img/frastyle-icon.svg';

import Navbar from './views/components/navbar';
import Footer from './views/components/footer';
import Home from './views/pages/home';
import Documentation from './views/pages/documentation';
import Template from './views/pages/template';
import Theme from './views/pages/theme';
import About from './views/pages/about';
import NotFound from './views/pages/404-not-found';
import NoResource from './views/pages/410-no-resource';
import ServerErrorFull from './views/pages/500-server-error-full';

const Router = () => {
	const [version, setVersion] = useState({ code: 500 });
	const [lastVersion, setLastVersion] = useState({ code: 500 });
	const [data, setData] = useState([]);
	const [loading, setloading] = useState(true);
	const [errors, setErrors] = useState(false);

	const url = 'https://dev.bagasnur.my.id/frastyle-dev/api/';

	const getResult = useCallback(async (e) => {
		try {
			await axios.get(`${url}last-version`).then((response) => {
				setLastVersion(response.data);
			});
			await axios.get(`${url}version`).then((response) => {
				setVersion(response.data);
			});
			await axios
				.get(`${url}content?v=${e}`)
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
		} catch {
			setErrors(true);
			setloading(false);
		}
	}, []);

	const splitLocation = window.location.href.split('/');

	useEffect(() => {
		if (splitLocation[3] === '' || splitLocation[3] === 'tema' || splitLocation[3] === 'template' || splitLocation[3] === 'tentang') {
			getResult('1');
		} else if (data.length === 0) {
			getResult(splitLocation[3]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<BrowserRouter>
			{errors ? (
				<Switch>
					<Route
						exact
						path={'/:version/error-500'}
						component={ServerErrorFull}
					/>
					{lastVersion.data ? (
						<Redirect
							exact
							to={'/' + lastVersion.data.number + '/error-500'}
						/>
					) : splitLocation[3] === '' ? (
						<Redirect exact to={'/1/error-500'} />
					) : (
						<Redirect
							exact
							to={'/' + splitLocation[3] + '/error-500'}
						/>
					)}
				</Switch>
			) : loading ? (
				<div className='preload'>
					<div className='container flex-column text-center'>
						<img src={Logo} alt='' style={{ margin: 'auto' }} />
						<p className='mt-2'>Memuat data...</p>
					</div>
				</div>
			) : data.code === 200 ? (
				<div>
					<Navbar />
					<Switch>
						<Redirect
							exact
							from='/'
							to={'/' + lastVersion.data.number + '/'}
						/>
						<Redirect
							from='/tema'
							to={'/' + lastVersion.data.number + '/tema'}
						/>
						<Redirect
							from='/template'
							to={'/' + lastVersion.data.number + '/template'}
						/>
						<Redirect
							from='/tentang'
							to={'/' + lastVersion.data.number + '/tentang'}
						/>
						<Route
							exact
							path={'/:version/'}
							render={(props) => (
								<Home lastVersion={lastVersion} {...props} />
							)}
						/>
						<Redirect
							exact
							from={'/' + splitLocation[3]}
							to={'/' + splitLocation[3] + '/'}
						/>
						<Redirect
							exact
							from={'/' + splitLocation[3] + '/docs'}
							to={'/' + splitLocation[3] + '/docs/introductions'}
						/>
						<Route
							exact
							path={'/:version/docs/:page'}
							render={(props) => (
								<Documentation
									version={version}
									data={data}
									{...props}
								/>
							)}
						/>
						<Route exact path='/:version/tema' component={Theme} />
						<Route
							exact
							path='/:version/template'
							component={Template}
						/>
						<Route
							exact
							path='/:version/tentang'
							component={About}
						/>
						<Route
							exact
							path={'/:version/error-404'}
							component={NotFound}
						/>
						<Redirect
							exact
							from='/:version/error-500'
							to={'/' + lastVersion.data.number + '/'}
						/>
						<Redirect
							exact
							from='/:version/*'
							to={'/' + splitLocation[3] + '/error-404'}
						/>
					</Switch>
					<Footer lastVersion={lastVersion} />
				</div>
			) : (
				<div>
					<Navbar lastVersion={lastVersion} />
					<Switch>
					{console.log(data)}
						<Route
							exact
							path={'/' + splitLocation[3] + '/error-404'}
							component={NotFound}
						/>
						<Route
							exact
							path={'/' + splitLocation[3] + '/error-410'}
							component={NoResource}
						/>
						<Redirect
							exact
							from='/*'
							to={'/' + splitLocation[3] + '/error-' + data.code}
						/>
					</Switch>
					<Footer lastVersion={lastVersion} />
				</div>
			)}
		</BrowserRouter>
	);
};

export default Router;
