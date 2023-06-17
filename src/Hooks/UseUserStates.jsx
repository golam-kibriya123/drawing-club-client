import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const UseUserStates = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const { data } = useQuery({
        queryKey: ['state', email],
        queryFn: async () => {
            const response = await fetch(`https://draing-club-server.vercel.app/users/email?email=${email}`)
            return response.json();
        }
    });
    let userState = ''
    if (data) {
        userState = data[0]?.role;
    }
    console.log(data)
    return [userState]
};

export default UseUserStates;