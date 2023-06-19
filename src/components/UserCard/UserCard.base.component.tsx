import React from 'react'

// ** Styles import
import styles from "./usercard.base.module.css"

// ** MUI Imports
import {Box, BoxProps} from '@mui/material'

// ** Types
import IUser from '@/types/user'

// ** UserCard Context
import UserCardContext from './UserCardContext'

type UserCardProps = React.PropsWithChildren & BoxProps & {
    user : IUser
}

const UserCard = (props: UserCardProps) => {
    const { user, children, ...rest } = props
    return (
        <UserCardContext.Provider value={user}>
            <Box component='div' {...rest} className={`card ${styles.card}`}>{children}</Box>
        </UserCardContext.Provider>
    )
}

export default UserCard