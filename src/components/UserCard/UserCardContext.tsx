import React from 'react'

// ** Types
import IUser from '@/types/user'

const UserCardContext = React.createContext<IUser | null>(null)

export function useUserCard () {
    const context = React.useContext(UserCardContext)
    if( !context ) { 
        throw new Error(
            "UserCard.* component must be rendered inside UserCard component"
        ) 
    }
    return context
}

export default UserCardContext;