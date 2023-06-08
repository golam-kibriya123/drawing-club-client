import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import SliderBanner from "../SliderBanner/SliderBanner";

const Home = () => {
    return (
        <div>
            <div>
                Home
            </div>
            <SliderBanner></SliderBanner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>

    );
};

export default Home;