import { useContext, useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    console.log(email)
    const [myClasses, setMyClasses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myclasses?email=${email}`)
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, [email])
    return (
        <div>
            {myClasses.map(c => {
                const { class_name, class_photo, state, enrolled, _id } = c
                return <div className=" text-white p-5 w-full md:w-[90%] " key={c._id}>

                    <div className="bg-violet-500 flex justify-between border border-violet-500">
                        <div className="w-[80%] flex ">
                            <img src={class_photo} alt="" className="w-[40%] h-32" />
                            <h1 className="w-1/2 text-xl font-bold uppercase ps-1">{class_name}</h1>
                        </div>
                        <div className="p-2 ">
                            <h1 className={`my-2 bg-white text-green-200 font-bold ps-1 ${state === "Denied" ? 'bg-red-600' : ''} ${state === "Approved" && 'bg-green-700 '

                                }'}`}>{state}</h1>

                            <h1 className="my-2">Enrolled : {enrolled}</h1>
                            <Link to={`updateclass/${_id}`} className=" my-2 bg-purple-600 p-1 hover:bg-purple-700 px-6 border-2 bo">Update</Link>

                        </div>
                    </div>
                    <div className={`bg-red-200  ${state === "Denied" ? '' : 'hidden'}`}>
                        <h1 className="text-red-600 font-bold p-2">Feedback : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda laboriosam sed modi, quo officia amet nam rem optio voluptates, cupiditate mollitia adipisci, harum obcaecati? Labore laborum odio voluptates doloribus at aliquam ea voluptate cum autem eius cupiditate minima harum repellendus neque doloremque, quia sapiente placeat suscipit id? Minus, deleniti dolor.</h1>
                    </div>
                </div>
            })
            }
        </div>

    );
};

export default MyClass;