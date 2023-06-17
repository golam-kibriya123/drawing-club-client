import { useEffect, useState } from 'react'
import SectionHeader from '../../../Components/SectionHeader'



const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch(`https://draing-club-server.vercel.app/classes`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>

            <SectionHeader header={'Popular Classes'}>

            </SectionHeader>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
                {classes.slice(0, 6).map(c => {
                    const { _id, class_name, instructor_name, price, seat, class_photo } = c;
                    return (<div className="card  glass" key={_id}>
                        <figure className='h-1/2'>
                            <img src={class_photo} alt="car!" className='w-full h-full border-b-2 border-primary ' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{class_name}</h2>

                            <div>
                                <p>Instructor:{instructor_name}</p>
                                <p>Instructor:{price}</p>

                            </div>
                            <p>Instructor:{seat}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>)
                })}


            </div>
        </div>
    );
};

export default PopularClasses;