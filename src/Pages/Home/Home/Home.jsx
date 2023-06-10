import HomeSlider from "../../../Components/HomeSlider/HomeSlider";
import Event from "../Event/Event";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>

            <HomeSlider></HomeSlider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Event></Event>
        </div>

    );
};

export default Home;