import Swal from "sweetalert2";
import SectionHeader from "../../../Components/SectionHeader";
import { useLoaderData } from "react-router-dom";

const UpdateClass = () => {
    const fetchUrl = (data) => {
        fetch(` https://draing-club-server.vercel.app/classes/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),


        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your toy has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
            .catch((e) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: e.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            )
    }
    const previousClass = useLoaderData();
    const { class_name, class_photo, seat, price, _id } = previousClass[0];
    // console.log(class_name, class_photo, seat, price, _id)
    const handelAddUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const class_name = form.className.value;
        const class_photo = form.classImage.value;
        const seat = parseInt(form.availableSeat.value);
        const price = parseInt(form.price.value);
        const updatedClass = { price, class_name, class_photo, seat };
        form.reset()
        fetchUrl(updatedClass)




    }
    return (
        <div className="w-full">
            <SectionHeader header={'Update your class '}>

            </SectionHeader>
            <div className="hero bg-base-200 w-full">
                <div className="hero-content w-full md:w-[70%] lg:w-[50%]">

                    <div className="card w-full shadow-2xl bg-base-100 rounded-none ">
                        <form className="card-body " onSubmit={handelAddUpdate}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" placeholder="Class Name" className="input input-bordered" name="className" defaultValue={class_name} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="text" placeholder="Class Image" className="input input-bordered" name="classImage" defaultValue={class_photo} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available seat</span>
                                </label>
                                <input type="number" placeholder="Available seat" className="input input-bordered" name="availableSeat" defaultValue={seat} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price" className="input input-bordered" name="price" defaultValue={price} />
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary bg-purple-400 border-none text-white hover:bg-purple-500">Update Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateClass;