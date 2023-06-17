import { useQuery } from '@tanstack/react-query';
const ManageClasses = () => {

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {

        const res = await fetch('https://draing-club-server.vercel.app/classes')
        return res.json();

    });

    const handelState = (state, id) => {
        fetch(`http://localhost:5000/classes/state/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(state),
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    };


    return (
        <div className='space-y-3'>

            {/* You can open the modal using ID.showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                <div method="dialog" className="modal-box">


                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        {/* if there is a button in div, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </div>
            </dialog>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='bg-purple-400 border-b-4 border-white text-white '>
                        <tr>
                            <th>Index</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th> Seats</th>
                            <th>Price</th>
                            <th>state</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((c, index) => {
                            const { class_name, class_photo, instructor_name, instructor_email, seat, price, _id, state } = c;
                            return <tr key={_id} className='bg-purple-200 '>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={class_photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {class_name}

                                </td>
                                <td>{instructor_name}</td>
                                <td>
                                    {instructor_email}
                                </td>
                                <td>
                                    {seat}
                                </td>
                                <td>
                                    {price} $
                                </td>
                                <td className={` ${state == "Approved" && 'text-green-600 underline'} ${state == "Denied" && 'text-red-600 underline'} ${state == "pending" && 'text-green-400 underline'}`}>{state}</td>
                                <td className='text-white space-x-2' >

                                    <button className={`px-2 py-1 rounded bg-green-600 ${state == "Approved" || state == "Denied" ? ' btn-disabled bg-opacity-40' : ''}`} onClick={() => handelState({ state: "Approved" }, _id)}>Approved</button>
                                    {/* <button onClick={() => handelState({ state: 'Pending' }, _id)} className='px-2 py-1 rounded bg-green-300'>Pending</button> */}
                                    <button onClick={() => window.my_modal_5.showModal()} className={`px-2 py-1 rounded bg-red-500  ${state == "Approved" || state == "Denied" ? '  bg-opacity-40' : ''}`}>Denied</button>
                                    {/* Open the modal using ID.showModal() method */}

                                </td>
                            </tr>

                        })}

                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default ManageClasses;