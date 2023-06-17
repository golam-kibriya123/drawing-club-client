import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
const SelectedClass = () => {
    useEffect(() => {
        // ..
        AOS.init();
    }, []);
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch(`https://draing-club-server.vercel.app/selected`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (

        <div className='w-full grid gap-10'>
            {
                classes?.map(c => {
                    const { _id, price
                        , instructor_name
                        , class_photo
                        , class_name
                    } = c;
                    return (< div className='bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 w-[90%]  h-32 flex' key={_id}>
                        <div className='flex items-center h-full w-[80%] '>
                            <img src={class_photo} alt="" className='h-full w-[25%]' />
                            <div className='ps-5 text-white font-medium'>
                                <h1>{class_name}</h1>
                                <h1>{price}</h1>
                                <h1>{instructor_name}</h1>
                                <h1>Available seat</h1>
                            </div>
                        </div>
                        <div className=' border-2 border-s-0 border-purple-600 flex flex-col justify-between w-[20%] bg-white'>
                            <button className='h-1/2 border-b-2 p-2 bg-purple-100 w-full hover:bg-purple-500 hover:text-white'> delete</button>
                            <button className='h-1/2 p-2 bg-purple-100 w-full hover:bg-purple-500 hover:text-white' > pay</button>
                        </div>
                    </div >)
                })
            }
        </div>


    );
};

export default SelectedClass;