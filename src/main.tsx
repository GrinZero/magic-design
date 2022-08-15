import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

import ErrorFallback from '~sections/ErrorFallback';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ErrorBoundary>
	</>,
);
