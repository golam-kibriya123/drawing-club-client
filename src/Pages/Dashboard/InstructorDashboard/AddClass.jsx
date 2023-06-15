import SectionHeader from "../../../Components/SectionHeader";

const AddClass = () => {
    return (
        <div className="w-full"> 
            <SectionHeader header={'Add a new class'}>

            </SectionHeader>
                <div className="hero bg-base-200 w-full">
                    <div className="hero-content w-full md:w-[70%] lg:w-[50%]">

                        <div className="card w-full shadow-2xl bg-base-100 rounded-none ">
                            <div className="card-body ">

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
                                    <button className="btn btn-primary bg-purple-400 border-none text-white hover:bg-purple-500">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default AddClass