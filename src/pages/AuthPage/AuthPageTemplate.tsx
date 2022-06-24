import React from 'react';
import Helmet from 'react-helmet';

import './index.scss';

export const AuthPageTemplate = () => {
    const ROOT_CLASS = 'auth-page';

    return (
        <>
            <Helmet title="Авторизация"/>
            <div className={ROOT_CLASS}>
                <div className={`${ROOT_CLASS}__container`}>
                    <div className={`${ROOT_CLASS}__title`}>
                        Авторизация
                    </div>
                    <div className={`${ROOT_CLASS}__form`}>
                        <label className={`${ROOT_CLASS}__label`} htmlFor="login">
                            <p>Логин</p>
                            <input type="text" placeholder="Введите логин" name="login" required/>
                        </label>
                        <label className={`${ROOT_CLASS}__label`} htmlFor="pw">
                            <p>Пароль</p>
                            <input type="password" placeholder="Введите пароль" name="pw" required/>
                        </label>
                        <button type="submit">Логинимся</button>
                    </div>
                </div>
            </div>
        </>
    );
};
