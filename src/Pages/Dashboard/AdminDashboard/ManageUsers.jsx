import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {

        const res = await fetch('https://draing-club-server.vercel.app/users')
        return res.json();

    });
    const handelMakeAdmin = id => {
        Swal.fire({

            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'make admin'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://draing-club-server.vercel.app/users/admin/${id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'He is admin from now',
                            showConfirmButton: false,
                            timer: 900
                        });
                        refetch();

                    })

            }
        })

    };
    const handelMakeInstructor = id => {

        Swal.fire({

            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Instructor!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://draing-club-server.vercel.app/users/instructor/${id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'He is Instructor from now',
                            showConfirmButton: false,
                            timer: 900
                        })
                        refetch();

                    })

            }
        })

    }
    return (
        <div>
            <Helmet>
                <title>DaShboard | Manage Users</title>
            </Helmet>
            <div className="">
                <div className="">
                    <table className="table table-zebra overflow-hidden">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>role</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                const { photo, _id, email, role, name } = user;
                                

                                return <tr key={user._id
                                }>
                                    <td>{index + 1}</td>

                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        <div className="font-bold">{name}</div>

                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{email}</span>
                                    </td>
                                    <td>
                                        <span className={`${role === "admin" && 'bg-green-500' || role === "instructor" && 'bg-green-300' || role === "student" && 'bg-green-200 text-black'} p-1 text-white font-bold rounded-md`}>
                                            {role}
                                        </span>
                                    </td>
                                    <th className="text-white">
                                        <button className={`btn btn-ghost btn-xs  ms-1 ${role === "admin" ? ' bg-green-600 btn-disabled' : 'bg-orange-500 '} `} onClick={() => { handelMakeAdmin(_id) }}>Make admin</button>
                                        <button className={`btn btn-ghost btn-xs  hover:bg-orange-600 ms-1 ${role === "instructor" ? ' bg-green-600 btn-disabled' : 'bg-orange-500'}`}
                                            onClick={() => { handelMakeInstructor(_id) }}>make Instructor</button>
                                    </th>
                                </tr>
                            })}


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;