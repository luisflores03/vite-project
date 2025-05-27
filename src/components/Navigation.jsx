import logo from '../assets/icons_assets/Logo.svg';
import {Link} from "react-router-dom";
export default function Navigation() {
    return (
        <>
            <nav>
                <ul className="navigation">
                    <li>
                        <img src={logo} alt="Little Lemon Logo" />
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/bookings">Reservations</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </>
    );
}