import { Link } from "react-router-dom";
import underLine from "../../../assets/Logo/PNG/under-line.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const NavItem = <>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to='/instructors'>Instructors</Link>
        </li>
        <li>
            <Link to='/classes'>Classes</Link>
        </li>
        <li>
            <Link to='dashboard'>Dashboard</Link>
        </li>
        {
            user?   <li onClick={logOut}>
            <Link>Log Out</Link>
        </li>:<li>
            <Link to="/login">Login</Link>
        </li>
        }
     


    </>;

    return (
        <div className="navbar text-primary sticky top-0 z-50 bg-white bg-opacity-70 border-b border-primary">
            <div className="navbar-start w-full ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        {NavItem}
                    </ul>
                </div>
                <Link className="text-xl text-primary relative font-bold " to={'/'}>
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
                <ul className="    ">
                    <li>

                        {
                            user ? <img src={user?.photoURL} alt="rtg" className="rounded-full border border-secondary h-12 w-10 lg:w-20" /> : <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full  h-12 w-10 lg:w-12">
                                    <span className="text-xs text-white">No User</span>
                                </div>
                            </div>
                        }
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;