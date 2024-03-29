import { Link } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader";
import { useEffect, useState } from "react";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch(`https://draing-club-server.vercel.app/instructor`)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <SectionHeader header={'Instructors'}>

            </SectionHeader>

            <div className="grid mg:grid-cols-2 lg:grid-cols-3 p-10 gap-10">


                {instructors.map(instructor => {

                    return (
                        <div className="card card-side shadow-xl border border-primary p-5 text-white bg-primary bg-opacity-75" key={instructor._id}>

                            <figure>
                                <div className="avatar ">
                                    <div className="w-24 mask mask-hexagon" >
                                        <img src={instructor.photo} alt="Movie" className="" />
                                    </div>
                                </div>

                            </figure>
                            <div className="card-body relative">
                                <div className="my-5">
                                    <h2 className="card-title">{instructor.name}</h2>
                                    <p>{instructor.email}</p>
                                </div>
                                <Link className="absolute -bottom-3 shadow-lg  p-1 rounded-md hover:text-primary hover:bg-white bg-primary bg-opacity-70  text-white ">
                                    Go For more
                                </Link>
                            </div>
                        </div>
                    )
                })}


                {/* 

                <div className="card card-side shadow-xl border border-primary p-5 text-white bg-primary bg-opacity-75">

                    <figure>
                        <div className="avatar ">
                            <div className="w-24 mask mask-hexagon" >
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600
" alt="Movie" />
                            </div>
                        </div>

                    </figure>
                    <div className="card-body relative">
                        <div className="my-5">
                            <h2 className="card-title">Instructors Name</h2>
                            <p>Instructors Email</p>
                        </div>
                        <Link className="absolute -bottom-3 shadow-lg  p-1 rounded-md hover:text-primary hover:bg-white bg-primary bg-opacity-70  text-white ">
                            Go For more
                        </Link>
                    </div>
                </div>


                <div className="card card-side shadow-xl border border-primary p-5 text-white bg-primary bg-opacity-75">

                    <figure>
                        <div className="avatar ">
                            <div className="w-24 mask mask-hexagon" >
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600
" alt="Movie" />
                            </div>
                        </div>

                    </figure>
                    <div className="card-body relative">
                        <div className="my-5">
                            <h2 className="card-title">Instructors Name</h2>
                            <p>Instructors Email</p>
                        </div>
                        <Link className="absolute -bottom-3 shadow-lg  p-1 rounded-md hover:text-primary hover:bg-white bg-primary bg-opacity-70  text-white ">
                            Go For more
                        </Link>
                    </div>
                </div>


                <div className="card card-side shadow-xl border border-primary p-5 text-white bg-primary bg-opacity-75">

                    <figure>
                        <div className="avatar ">
                            <div className="w-24 mask mask-hexagon" >
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600
" alt="Movie" />
                            </div>
                        </div>

                    </figure>
                    <div className="card-body relative">
                        <div className="my-5">
                            <h2 className="card-title">Instructors Name</h2>
                            <p>Instructors Email</p>
                        </div>
                        <Link className="absolute -bottom-3 shadow-lg  p-1 rounded-md hover:text-primary hover:bg-white bg-primary bg-opacity-70  text-white ">
                            Go For more
                        </Link>
                    </div>
                </div>


                <div className="card card-side shadow-xl border border-primary p-5 text-white bg-primary bg-opacity-75">

                    <figure>
                        <div className="avatar ">
                            <div className="w-24 mask mask-hexagon" >
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600
" alt="Movie" />
                            </div>
                        </div>

                    </figure>
                    <div className="card-body relative">
                        <div className="my-5">
                            <h2 className="card-title">Instructors Name</h2>
                            <p>Instructors Email</p>
                        </div>
                        <Link className="absolute -bottom-3 shadow-lg  p-1 rounded-md hover:text-primary hover:bg-white bg-primary bg-opacity-70  text-white ">
                            Go For more
                        </Link>
                    </div>
                </div>


                <div className="card card-side shadow-xl border border-primary p-5 text-white bg-primary bg-opacity-75">

                    <figure>
                        <div className="avatar ">
                            <div className="w-24 mask mask-hexagon" >
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600
" alt="Movie" />
                            </div>
                        </div>

                    </figure>
                    <div className="card-body relative">
                        <div className="my-5">
                            <h2 className="card-title">Instructors Name</h2>
                            <p>Instructors Email</p>
                        </div>
                        <Link className="absolute -bottom-3 shadow-lg  p-1 rounded-md hover:text-primary hover:bg-white bg-primary bg-opacity-70  text-white ">
                            Go For more
                        </Link>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Instructors;