import { Links, LiveReload, Outlet } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import mainStylesheet from './styles/main.css';

export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: mainStylesheet }];
};

const App = () => {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<Links />
			</head>
			<body>
				<main className="container mx-auto text-center my-6">
					<Outlet />
				</main>
				<LiveReload />
			</body>
		</html>
	);
};

export default App;
