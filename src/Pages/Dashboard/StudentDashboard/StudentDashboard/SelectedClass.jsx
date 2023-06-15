import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const SelectedClass = () => {
    useEffect(() => {
        // ..
        AOS.init();
    }, [])
    return (
        // <div className='bg-red-300  text-red-600 w-full text-center h-full flex justify-center  items-center'>
        //     <h1 className='border-2 inline  font-extrabold text-3xl border-red-600 p-5 bg-white'> No class added</h1>
        // </div>
        <div className='bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 w-[90%]  h-32 flex'>
            <div className='flex items-center h-full w-[80%] '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRlPMfDL-mDcQ25JOalzveKSVSjvV84dgNnQn9-JV04sUKJWaiNd0ddGjQAeAqgKu2JM&usqp=CAU" alt="" className='h-full w-[25%]'/>
                <div className='ps-5 text-white font-medium'>
                    <h1>Course Name</h1>
                    <h1>Price 500$</h1>
                    <h1>mentor</h1>
                    <h1>Available seat</h1>
                </div>
            </div>
            <div className=' border-2 border-s-0 border-purple-600 flex flex-col justify-between w-[20%] bg-white'>
                <button className='h-1/2 border-b-2 p-2 bg-purple-100 w-full'> delete</button>
                <button className='h-1/2 p-2 bg-purple-100 w-full' > pay</button>
            </div>
        </div>
    );
};

export default SelectedClass;