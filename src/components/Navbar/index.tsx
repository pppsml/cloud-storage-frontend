import React from 'react';

import './Navbar.scss';
import logo from '../../assets/img/navbar-logo.svg';

type Props = {}

const Navbar:React.FC<Props> = (props) => {
	console.log(logo)
	return (
		<div className="navbar">
			<div className='container'>
				<img src={logo} alt="" className="navbar__logo" />
				<div className="navbar__header">CLOUD DISK</div>
				<div className="navbar__login">Войти</div>
				<div className="navbar__register">Регистрация</div>
			</div>
		</div>
	);
};

export default Navbar;
