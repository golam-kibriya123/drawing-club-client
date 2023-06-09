import { Link } from "react-router-dom";
import underLine from "../../../assets/Logo/PNG/under-line.png"
const NavBar = () => {
    const NavItem = <>
        <li>
            <Link>Home</Link>
        </li>
        <li>
            <Link>Instructors</Link>
        </li>
        <li>
            <Link>Classes</Link>
        </li>
        <li>
            <Link>Dashboard</Link>
        </li>


    </>


    return (
        <div className="navbar text-primary sticky top-0 z-50 bg-white bg-opacity-70">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        {NavItem}
                    </ul>
                </div>
                <Link className="text-xl text-primary relative font-bold" to={'/'}>
                    Drawing Club
                    <img src={underLine} alt="" className=" absolute -bottom-2 w-[90%]" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItem}
                </ul>
            </div>
            <div className="mb-3">
                <ul className="menu menu-sm  mt-3 p-2  flex flex-row">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link>Log Out</Link>
                    </li>
                    <li>
                        <img src="" alt="rtg" className="rounded-full border border-secondary" />
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;