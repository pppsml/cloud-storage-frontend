import React from 'react';

import './Navbar.scss';
import logo from '../../assets/img/navbar-logo.svg';
import { NavLink } from 'react-router-dom';
import { setLogout } from '../../redux/actions/user';
import useTypedDispatch from '../../hooks/useTypedDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';

type Props = {}

const Navbar:React.FC<Props> = (props) => {
	const isAuth = useTypedSelector(({ user }) => user.isAuth)
	const dispatch = useTypedDispatch()

	const logoutHandler = ():void => {
		dispatch(setLogout)
	}

	return (
		<div className="navbar">
			<div className='_container'>
				<div className="navbar__wrapper">
					<img src={logo} alt="" className="navbar__logo" />
					<div className="navbar__header">CLOUD DISK</div>
					{!isAuth
						? <>
							<div className="navbar__login"><NavLink to='login'>Войти</NavLink></div>
							<div className="navbar__register"><NavLink to='registration'>Регистрация</NavLink></div>
						</>
						: <div className="navbar__login" onClick={logoutHandler}>Выход</div>
					}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
