import React from 'react';

import './Navbar.scss';
import logo from '../../assets/img/navbar-logo.svg';
import { NavLink } from 'react-router-dom';

type Props = {}

const Navbar:React.FC<Props> = (props) => {
	return (
		<div className="navbar">
			<div className='_container'>
				<div className="navbar__wrapper">
					<img src={logo} alt="" className="navbar__logo" />
					<div className="navbar__header">CLOUD DISK</div>
					<div className="navbar__login">
						<NavLink to='registration'>Войти</NavLink>
					</div>
					<div className="navbar__register">
						<NavLink to='login'>Регистрация</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
