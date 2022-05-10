import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { AuthPage } from './pages/AuthPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/Layout';

const App = () => (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="auth" element={<AuthPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    </Routes>
);

export default App;
