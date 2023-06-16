import request from "@/lib/request"

// ** Types
import IUser from "@/types/user"

const UserService = () => {

    const getUsers = () : Promise<IUser[]> => {

        return request ({
            url: "/users",
            method: "GET",
        })
    }

    return { getUsers }
}

export default UserService