import { useContext } from "react";
import SectionHeader from "../../../Components/SectionHeader";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
const AddClasses = () => {
    const { user } = useContext(AuthContext);
    const handelAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const class_name = form.className.value;
        const class_photo = form.classImage.value;
        const instructor_name = user?.displayName;
        const instructor_email = user?.email;
        const seat = parseInt(form.availableSeat.value);
        const price = parseInt(form.price.value);
        const state = 'pending';
        const enrolled=0;
        const added_class = { class_name, class_photo, instructor_name, instructor_email, seat, price, state ,enrolled};
        form.reset();
        fetch(`https://draing-club-server.vercel.app/classes`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(added_class)
        })
            .then(res => res.json()
            ).then(data => {

                if (data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class sent to admin to review',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            });


    }
    return (
        <div className="w-full">
            <SectionHeader header={'Add a new class'}>

            </SectionHeader>
            <div className="hero bg-base-200 w-full">
                <div className="hero-content w-full md:w-[70%] lg:w-[50%]">

                    <div className="card w-full shadow-2xl bg-base-100 rounded-none ">
                        <form className="card-body " onSubmit={handelAddClass}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" placeholder="Class Name" className="input input-bordered" name="className" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="text" placeholder="Class Image" className="input input-bordered" name="classImage" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available seat</span>
                                </label>
                                <input type="number" placeholder="Available seat" className="input input-bordered" name="availableSeat" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price" className="input input-bordered" name="price" />
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary bg-purple-400 border-none text-white hover:bg-purple-500">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddClasses;