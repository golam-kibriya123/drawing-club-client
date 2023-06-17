import SectionHeader from "../../Components/SectionHeader";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Classes = () => {
    useEffect(() => {
        // ..
        AOS.init();
    }, []);
    
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/classes`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Drawing club | classes</title>
            </Helmet>
            <SectionHeader header={'Classes'}>
            </SectionHeader>

            <div className="p-10 space-y-8">
                {classes.map(c => {
                    const { _id, class_name, class_photo, instructor_name, price, seat } = c;
                    console.log(c)
                    return <div className={`card card-side bg-purple-500 text-white  shadow-xl border border-primary flex flex-col md:flex-row  justify-between h-56 ${seat===0 && 'bg-red-400'}`}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="100"
                        key={_id} >
                        <figure className="w-[30%]">
                            <img src={class_photo} alt="Movie" className=" w-[100%] h-full -z-10 " />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{class_name}</h2>
                            <h2 className="card-title">Instructor : {instructor_name}</h2>

                            <p>Available Seat : {seat}</p>
                            <p>Price : {price} $</p>
                            <div className="card-actions justify-end">
                                <button className={`btn btn-primary bg-white text-purple-500 hover:text-white ${seat===0&& 'btn-disabled bg-gray-400'}`}>Select</button>
                            </div>
                        </div>
                    </div>
                })}









            </div>
        </div>
    );
};

export default Classes;