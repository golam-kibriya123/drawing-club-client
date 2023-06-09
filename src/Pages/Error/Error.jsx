import { Link } from "react-router-dom";
import errorBg from "../../assets/banner/error404.gif"

const Error = () => {
    return (
        <div className=" h-screen w-full bg-center bg-no-repeat  bg-fourth" style={{ backgroundImage: `url('${errorBg}')` }}>

            <div className="flex flex-col justify-center items-center pt-10 text-white">
                <Link to={'/'} className="border-primary border-2 p-2  hover:text-primary font-bold">
                    go back to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;