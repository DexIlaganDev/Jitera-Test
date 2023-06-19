// ** Icon Imports
import { EmailOutlined,PhoneOutlined,Language } from '@mui/icons-material';
import SvgIcon from '@mui/material/SvgIcon';

// ** Types
import { UserInfoListItemProps } from '@/types/userInfo';
import IUser from '@/types/user';

type SvgIconComponent = typeof SvgIcon;

type UserInfoProps = {
    user : IUser
}

const useGetUserInfo = (props : UserInfoProps) => {

    const {user} = props

    // we can keep on adding user icon and information here if we want
    const getInfoListItems : UserInfoListItemProps<SvgIconComponent>[] = [
        {icon : EmailOutlined, text : user.email},
        {icon : PhoneOutlined, text : user.phone},
        {icon : Language, text : user.website},
    ]


    return { getInfoListItems }
}

export default useGetUserInfo