import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>

            <ul className="flex space-x-32 font-bold text-2xl background-color: rgba(255, 255, 255, 0.4) padding:30px 40px width-50px border-radius: 0 20px 20px 0">
                <li>
                    <NavLink to="/">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Signup</NavLink>
                </li>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;