import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderTemplate = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/auth">Auth</Link>
        </header>
    );
};
