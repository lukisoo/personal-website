import NavBarButton from "./navbarbutton";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return(
        <div className="navBar">
            <NavLink to="/" style={{float: "left", marginLeft: "2%"}}activeClassName="active">
                <div className="navBarButton">
                    <h2 className="navBarButtonText">Home</h2>
                </div>
            </NavLink>
            <NavBarButton navContent="Contact Me"/>
            <NavBarButton navContent="Projects"/>
            <NavBarButton navContent="Experience"/>
            <NavBarButton navContent="About Me"/>
        </div>
    )};

export default NavBar;