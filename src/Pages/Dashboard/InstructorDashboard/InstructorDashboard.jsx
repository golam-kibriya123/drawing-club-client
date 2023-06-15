import SectionHeader from '../../../Components/SectionHeader';
import img from '../../../assets/popular/c1.jpeg'
const InstructorDashboard = () => {
    return (
        <div className="h-full w-full flex flex-col md:flex-row justify-center items-center px-4">

        <div className=" bg-purple-300  lg:h-1/2 w-1/2  border-b-4 md:border-b-0 md:border-e-4  border-purple-600 flex flex-col justify-center items-center space-y-4 py-4">
            <img src={img} alt="" className='w-1/2 h-1/2 rounded-lg border-4 ' />

            <h1 className='text-white font-bold text-4xl'>User name </h1>
        </div>



        <div className="bg-purple-200  lg:h-1/2 w-1/2  text-purple-600 flex flex-col items-center  ">
            <SectionHeader header={'Your Activity'}> </SectionHeader>
            <ul className='space-y-5 font-bold py-4'>
                <li className='border-s-4 border-2 border-purple-600 bg-purple-300  ps-2 p-1 relative'>Selected class
                    <span className='bg-purple-600  text-white absolute h-full top-0 -right-6 p-1 rounded-e-md'>
                        10</span></li>
                <li className=' border-s-4 border-purple-600 ps-2 bg-purple-300 p-1 relative border-2'>Enrolled Class <span className='bg-purple-600  text-white absolute h-full top-0 -right-6 p-1 rounded-e-md'>
                    10</span> </li>
                <li className='border-s-4 border-purple-600 ps-2 bg-purple-300 p-1 border-2 relative'>Payment History <span className='bg-purple-600  text-white absolute h-full top-0 -right-6 p-1 rounded-e-md'>
                    10</span> </li>
            </ul>
        </div>
    </div>
    );
};

export default InstructorDashboard;