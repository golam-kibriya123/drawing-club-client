import eventBg from '../../../assets/banner/event-bg.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import SectionHeader from '../../../Components/SectionHeader';
const Event = () => {
    return (
        <div className=''>
            <SectionHeader header={'Upcoming Event'}></SectionHeader>

            <div style={{ backgroundImage: `url('${eventBg}')` }} className='p-10 bg-no-repeat  grid grid-cols-5 gap-10 '>
               

                    
                        <div className="card   shadow-xl   bg-cover  bg-center " style={{ backgroundImage: `url('https://www.freejupiter.com/wp-content/uploads/2020/06/Why-Art-and-Creativity-Are-Important-2.jpg')` }}>

                            <div className="card-body rounded-xl bg-primary h-full py-16 bg-opacity-40 text-white">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    

                    
                        <div className="card   shadow-xl   bg-cover  bg-center" style={{ backgroundImage: `url('https://www.freejupiter.com/wp-content/uploads/2020/06/Why-Art-and-Creativity-Are-Important-2.jpg')` }}>

                            <div className="card-body rounded-xl bg-primary h-full py-16 bg-opacity-40 text-white">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    

                    
                        <div className="card   shadow-xl   bg-cover  bg-center" style={{ backgroundImage: `url('https://www.freejupiter.com/wp-content/uploads/2020/06/Why-Art-and-Creativity-Are-Important-2.jpg')` }}>

                            <div className="card-body rounded-xl bg-primary h-full py-16 bg-opacity-40 text-white">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    

                    
                        <div className="card   shadow-xl   bg-cover  bg-center" style={{ backgroundImage: `url('https://www.freejupiter.com/wp-content/uploads/2020/06/Why-Art-and-Creativity-Are-Important-2.jpg')` }}>

                            <div className="card-body rounded-xl bg-primary h-full py-16 bg-opacity-40 text-white">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    

                    
                        <div className="card   shadow-xl   bg-cover  bg-center" style={{ backgroundImage: `url('https://www.freejupiter.com/wp-content/uploads/2020/06/Why-Art-and-Creativity-Are-Important-2.jpg')` }}>

                            <div className="card-body rounded-xl bg-primary h-full py-16 bg-opacity-40 text-white">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    

              

            </div>
        </div>
    );
};

export default Event;