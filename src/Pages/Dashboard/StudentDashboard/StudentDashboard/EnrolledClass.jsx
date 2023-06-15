import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const EnrolledClass = () => {
    useEffect(() => {
        // ..
        AOS.init();
    }, [])
    return (
        <div className='md:w-[90%] w-full text-white space-y-8 '>
            <div className="card card-side bg-purple-500 bg-opacity-40  shadow-xl rounded-none flex flex-col md:flex-row "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="200"
            >
                <figure>
                    <img src="https://media.istockphoto.com/id/1183183783/photo/female-artist-works-on-abstract-oil-painting-moving-paint-brush-energetically-she-creates.jpg?s=612x612&w=0&k=20&c=JLPrSmpdzPklAVKycBJ83oPASPfFPS46XvN0TShfLwI=" alt="Movie" className=" w-[100%] -z-10" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Course Name!</h2>
                    <h2 className="card-title">Course Instructor name!</h2>

                    <p>Available seats.</p>
                    <p>$$ Price .</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-purple-500 border-none rounded-none">Enroll</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClass;