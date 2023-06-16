import { useQuery } from "@tanstack/react-query"
import UserService from "@/services/api/UserService"

// ** Types
import { GetUserParams } from "@/types/user"

const useGetUsers = (props : GetUserParams = {}) => {

    const { getUsers } =  UserService(props)

    // Abstract useQuery in case we decide to no longer use this in the future
    const { data : users, isLoading } = useQuery({
        queryFn : getUsers,
        queryKey : ['users']
    })
    
    return { users, isLoading }
}  

export default useGetUsers