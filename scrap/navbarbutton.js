import { NavLink } from 'react-router-dom';

function NavBarButton (props) {
    return(
        <NavLink to="/" activeClassName="active">
            <div className="navBarButton">
                <h2 className="navBarButtonText">{props.navContent}</h2>
            </div>
        </NavLink>
    )};

export default NavBarButton;


