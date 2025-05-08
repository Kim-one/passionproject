import {Link, Outlet} from "react-router-dom";
// import './stylesheets/navbar.scss';
import './styles/nav.scss';
const Navbar=()=>{
    return (
        <>
            {/*<h1>NavBar</h1>*/}
            <nav>
                <ul>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <Link to={'/signin'}>Register</Link>
                    </li>
                </ul>
                <Outlet></Outlet>
            </nav>
        </>
    );
};

export default Navbar;