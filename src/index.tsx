import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundry';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
    <StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>,
);
