import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderTemplate } from '../Header/HeaderTemplate';
import { Footer } from '../Footer';

export const LayoutTemplate = () => {
    return (
        <>
            <HeaderTemplate/>
            <Outlet/>
            <Footer/>
        </>
    );
};
