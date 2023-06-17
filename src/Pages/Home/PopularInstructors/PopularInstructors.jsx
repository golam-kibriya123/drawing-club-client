import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionHeader";

const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect(() => {
        fetch(`https://draing-club-server.vercel.app/instructor`)
            .then(res => res.json())
            .then(data => setPopularInstructors(data))
    }, [])
    return (
        <div>

            <SectionHeader header={'Popular Instructors'}>

            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">

                {popularInstructors.slice(0, 6).map(instructor => {
                    const { _id, email, name, photo } = instructor;
                    console.log(instructor)
                    return (<div className=" shadow-xl border border-primary  p-5" key={_id}>
                        <div className="">
                            <div className="w-full  h-[70%]">
                                <img src={photo} className="w-full h-72" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="font-bold text-xl">{name}</h1>
                            <p>{email}</p>
                            <button className="border border-primary p-1 text-primary hover:bg-primary hover:text-white">see more</button>
                        </div>
                    </div>)
                })}




            </div>
        </div>
    );
};

export default PopularInstructors;