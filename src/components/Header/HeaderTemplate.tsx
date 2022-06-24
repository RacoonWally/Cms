import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export const HeaderTemplate = () => {
    const ROOT_CLASS = 'header';

    return (
        <header className={ROOT_CLASS}>
            <nav className={`${ROOT_CLASS}_container`}>
                <Link className={`${ROOT_CLASS}__link`} to="/">Home</Link>
                <Link className={`${ROOT_CLASS}__link`} to="/auth">Auth</Link>
            </nav>
        </header>
    );
};
