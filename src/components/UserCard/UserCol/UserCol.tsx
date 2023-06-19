import React from 'react'

// ** MUI Imports
import {Grid, GridProps} from '@mui/material'

import { styles } from './usercol.styles'

type UserColProps = React.PropsWithChildren & GridProps & {}

const UserCol = (props: UserColProps) => {
    const { children,sm, ...rest } = props
    return (
        <Grid sx={styles} item sm={sm} {...rest}>{children}</Grid>
    )
}

export default UserCol