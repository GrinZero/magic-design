import 'tailwindcss/tailwind.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorFallback from './sections/ErrorFallback';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ErrorBoundary>
	</>,
);
