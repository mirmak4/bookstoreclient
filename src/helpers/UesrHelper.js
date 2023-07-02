import { useSelector } from "react-redux";
import { getUserToken } from "../modules/user/UserSelector";

export const IsUserLoggedIn = () => {

    const token = useSelector(getUserToken);

    return token !== null && token !== '';
};