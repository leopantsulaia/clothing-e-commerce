import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { ReactComponent as HomeLogo } from "../../assets/Logo.svg";

import "./navigation.styles.scss";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<Fragment>
			<div className="navigation">
				<Link
					className="logo-container"
					to="/">
					<HomeLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link
						className="nav-link"
						to="/shop">
						SHOP
					</Link>

					{currentUser ? (
						<span className="nav-link">SIGN OUT</span>
					) : (
						<Link
							className="nav-link"
							to="/auth">
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
