
// ** MUI Imports
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon';

// ** styles
import { styles } from './userinfo.styles';

// ** Types
import { UserInfoListProps } from '@/types/userInfo';

// USE MUI ICONS TYPE but could be any like fontawesome etc
type SvgIconComponent = typeof SvgIcon;

const UserInfoList = (props: UserInfoListProps<SvgIconComponent>) => {

    const {infoListItems} = props
    
    return (
        <List sx={styles.listWrapper} disablePadding component='nav' role='list' aria-label={`List of information about user`}>

            {
                infoListItems && infoListItems.map( (info, index) => (
                    <ListItem alignItems='center' disablePadding key={index}>
                            <ListItemIcon sx={styles.listItemIconStyles}>
                                { <info.icon /> }
                            </ListItemIcon>
                            <ListItemText sx={styles.listItemText} primary={info.text} />
                    </ListItem>
                ) )
            }

        
        </List>
    )
}

export default UserInfoList