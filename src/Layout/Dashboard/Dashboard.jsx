import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import underLine from '../../../src/assets/Logo/PNG/under-line.png'
import UseUserStates from "../../Hooks/UseUserStates";

const Dashboard = () => {
  const [userState] = UseUserStates();
 
  console.log(userState)
  const [open, setOpen] = useState(false);
  const adminItem = <>
    <li><Link to={'manageclasses'}>Manage Classes</Link></li>
    <li><Link to={'manageuser'}>Manage Users</Link></li>
  </>;
  const studentItem = <>
    <li> <Link to={'selectedclasses'}>My Selected Classes </Link></li>
    <li> <Link to={'enrolled'}>My Enrolled Classes</Link></li>
    <li> <Link to={'payment'}>Payment</Link></li>
    <li> <Link to={'paymenthistory'}>Payment History</Link></li></>
  const instructorItem = <>

    <li>
      <Link to={'addclass'}>Add Class</Link>
      <Link to={'myclass'}>My Class</Link>
    </li>
  </>
  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-start mt-14 lg:mt-0">
        {/* Page content here */}
        <Outlet></Outlet>
        <label onClick={() => { setOpen(!open) }} htmlFor="my-drawer-2" className="btn btn-primary text-primary  drawer-button lg:hidden absolute left-0 top-0 rounded-none bg-white z-40 border-2 border-purple-500 hover:text-white w-full hover:bg-purple-400 hover:border-purple-500 font-bold ">{open ? 'Close Sidebar' : 'Open Sidebar '}</label>

      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 h-full  text-white font-bold bg-purple-400 pt-16  lg:pt-0">
          {/* Sidebar content here */}
          <Link className="text-xl text-primary relative font-bold mb-5 hover:bg-purple-500 hover:text-primary ms-4" to={'/'}>Drawing Club   <img src={underLine} alt="" className=" absolute -bottom-3 w-[70%]" />  </Link>
          <li> <Link>User Home</Link></li>
          {userState === 'admin' && adminItem}
          {userState === 'instructor' && instructorItem}
          {userState === 'student' && studentItem}

          <li className="border-t-2 mt-5"> <Link to={'/'}>Home</Link></li>
          <li> <div className="dropdown dropdown-bottom ">
            <label tabIndex={0} className="  border-0">Menu</label>
            <ul tabIndex={0} className="dropdown-content menu mt-2  border-s p-1 ">

              <li>
                <Link to='/instructors'>Instructors</Link>
              </li>
              <li>
                <Link to='/classes'>Classes</Link>
              </li>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link>Log Out</Link>
              </li>
            </ul>
          </div></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;