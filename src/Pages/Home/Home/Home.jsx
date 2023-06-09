import HomeSlider from "../../../Components/HomeSlider/HomeSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
       
            <HomeSlider></HomeSlider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>

    );
};

export default Home;