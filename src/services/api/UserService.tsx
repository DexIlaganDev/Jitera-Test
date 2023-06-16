import request from "@/lib/request"

// ** Types
import IUser, {GetUserParams} from "@/types/user"


const UserService = (props : GetUserParams = {}) => {

    const getUsers = () : Promise<IUser[]> => {
        const { params } = props
        return request ({
            url: "/users",
            method: "GET",
            params : params
        })
    }

    return { getUsers }
}

export default UserService