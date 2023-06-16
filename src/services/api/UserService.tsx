import request from "@/lib/request"

const UserService = () => {

    const getUsers = () => {
        return request ({
            url: "/users",
            method: "GET",
        })
    }

    return { getUsers }
}

export default UserService