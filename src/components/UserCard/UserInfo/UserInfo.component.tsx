import React from 'react'

// ** MUI Imports
import {Box, BoxProps} from "@mui/material"

// ** style
import { styles } from './userinfo.styles'

// ** Icon Imports

type UserInfoProps = React.PropsWithChildren & BoxProps & {}

const UserInfo = (props: UserInfoProps) => {
    const { children, ...rest } = props

    return (
        <Box sx={styles} {...rest}>{children}</Box>
    )
}

export default UserInfo