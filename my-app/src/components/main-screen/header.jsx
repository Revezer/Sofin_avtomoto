import React from 'react';
import logo from '../../img/logo.svg'

const Header = () => {

    return(
        <header className='header'>
            <div className='header__block'>
                <div className='header__conteiner'>
                    <img src={logo} className='header__logo' alt='логотип'/>
                </div>
                <ul className ='header__list'>
                    <li>
                        <a href='*' className='header__link'>Автомобили</a>
                    </li>
                    <li>
                        <a href='*' className='header__link'>Контакты</a>
                    </li>
                    <li>
                        <a href='*' className='header__link'>Услуги</a>
                    </li>
                    <li>
                        <a href='*' className='header__link'>Вакансии</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header