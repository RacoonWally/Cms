import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { AuthPage } from './pages/AuthPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/Layout';
import { SimpleLayoutTemplate } from './components/Layout/SimpleLayoutTemplate';

const App = () => (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
        <Route path="/auth" element={<SimpleLayoutTemplate/>}>
            <Route index element={<AuthPage/>}/>
        </Route>
    </Routes>
);

export default App;
