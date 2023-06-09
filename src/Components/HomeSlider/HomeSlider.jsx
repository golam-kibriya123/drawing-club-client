// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './HomeSlider.css'
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";


import slider1 from '../../assets/banner/home-s-1.jpg'
import slider2 from '../../assets/banner/home-s-2.jpg'
import slider3 from '../../assets/banner/home-s-3.jpg'

const HomeSlider = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full
       bg-primary ">
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div style={{ backgroundImage: `url('${slider1}')` }} className="bg-cover bg-no-repeat h-full  ">
                        <div className=" text-white font-bold text-8xl space-y-6 md:p-20  md:placeholder-violet-200 bg-black bg-opacity-30 h-full">
                            <h1>Never Stop</h1>
                            <h1>Printing</h1>
                            <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Pariatur, officia?</p>
                            <button className="text-xl bg-primary border-2 p-2 bg-opacity-30 hover:bg-opacity-100">
                                Explore More
                            </button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url('${slider2}')` }} className="bg-cover bg-no-repeat h-full  ">
                        <div className=" text-white font-bold text-8xl space-y-6 md:p-20  md:placeholder-violet-200 bg-black bg-opacity-30 h-full">
                            <h1>A Day For</h1>
                            <h1>Printing</h1>
                            <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Pariatur, officia?</p>
                            <button className="text-xl bg-primary border-2 p-2 bg-opacity-30 hover:bg-opacity-100">
                                Explore More
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url('${slider3}')` }} className="bg-cover bg-no-repeat h-full  ">
                        <div className=" text-white font-bold text-8xl space-y-6 md:p-20  md:placeholder-violet-200 bg-black bg-opacity-30 h-full">
                            <h1>Explore Your </h1>
                            <h1>Creativity</h1>
                            <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Pariatur, officia?</p>
                            <button className="text-xl bg-primary border-2 p-2 bg-opacity-30 hover:bg-opacity-100">
                                Explore More
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HomeSlider;