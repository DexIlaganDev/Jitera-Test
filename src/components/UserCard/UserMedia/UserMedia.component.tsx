import React from 'react'

// ** MUI Imports
import {Box,BoxProps} from '@mui/material'

type UserMediaProps = React.PropsWithChildren & BoxProps & {}

const UserMedia = (props: UserMediaProps) => {
    const {children, ...rest} = props
    return (
        <Box {...rest}>{children}</Box>
    )
}

export default UserMedia