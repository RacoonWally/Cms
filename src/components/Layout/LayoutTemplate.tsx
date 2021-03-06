import React from 'react';
import { Outlet } from 'react-router-dom';

import './index.scss';

import { HeaderTemplate } from '../Header/HeaderTemplate';
import { Footer } from '../Footer';

export const LayoutTemplate = () => {
    const ROOT_CLASS = 'template';

    return (
        <div className={ROOT_CLASS}>
            <HeaderTemplate/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
