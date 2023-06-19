import React from 'react'

// ** MUI Imports
import {Box,BoxProps} from "@mui/material"

type UserFooterProps = React.PropsWithChildren & BoxProps & {}

const UserFooter = (props: UserFooterProps) => {
    const {children, ...rest} = props

    return (
        <Box {...rest}>{children}</Box>
    )
}

export default UserFooter