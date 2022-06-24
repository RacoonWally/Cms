import React from 'react';
import { Outlet } from 'react-router-dom';

import './index.scss';

export const SimpleLayoutTemplate = () => {
    const ROOT_CLASS = 'template';

    return (
        <div className={ROOT_CLASS}>
            <Outlet/>
        </div>
    );
};
