import eventBg from '../../../assets/banner/event-bg.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Event.css";

// import required modules
import { Pagination } from "swiper";
import SectionHeader from '../../../Components/SectionHeader';
const Event = () => {
    return (
        <div className=''>
            <SectionHeader header={'Upcoming Event'}></SectionHeader>

            <div style={{ backgroundImage: `url('${eventBg}')` }} className='p-10 bg-no-repeat bg-fixed '>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >


                    <SwiperSlide>
                        <div className="card w-96  shadow-xl   bg-cover  bg-center" style={{ backgroundImage: `url('https://www.freejupiter.com/wp-content/uploads/2020/06/Why-Art-and-Creativity-Are-Important-2.jpg')` }}>

                            <div className="card-body rounded-xl bg-primary h-full py-16 bg-opacity-40 text-white">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card w-96  shadow-xl   bg-cover  bg-center" style={{ backgroundImage: `url('https://www.freejupiter.com/wp-content/uploads/2020/06/Why-Art-and-Creativity-Are-Important-2.jpg')` }}>

                            <div className="card-body rounded-xl bg-primary h-full py-16 bg-opacity-40 text-white">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card w-96  shadow-xl   bg-cover  bg-center" style={{ backgroundImage: `url('https://www.freejupiter.com/wp-content/uploads/2020/06/Why-Art-and-Creativity-Are-Important-2.jpg')` }}>

                            <div className="card-body rounded-xl bg-primary h-full py-16 bg-opacity-40 text-white">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card w-96  shadow-xl   bg-cover  bg-center" style={{ backgroundImage: `url('https://www.freejupiter.com/wp-content/uploads/2020/06/Why-Art-and-Creativity-Are-Important-2.jpg')` }}>

                            <div className="card-body rounded-xl bg-primary h-full py-16 bg-opacity-40 text-white">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card w-96  shadow-xl   bg-cover  bg-center" style={{ backgroundImage: `url('https://www.freejupiter.com/wp-content/uploads/2020/06/Why-Art-and-Creativity-Are-Important-2.jpg')` }}>

                            <div className="card-body rounded-xl bg-primary h-full py-16 bg-opacity-40 text-white">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </div>
    );
};

export default Event;