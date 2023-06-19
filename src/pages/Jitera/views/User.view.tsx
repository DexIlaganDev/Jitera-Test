// ** MUI Imports
import { Typography} from '@mui/material'

// ** Custom imports
import UserCard from '@/components/UserCard/UserCard.base.component';
import UserMedia from '@/components/UserCard/UserMedia/UserMedia.component';
import UserInfo from '@/components/UserCard/UserInfo/UserInfo.component';
import UserFooter from '@/components/UserCard/UserFooter/UserFooter.component';
import UserInfoList from '@/components/UserCard/UserInfoList/UserInfoList';
import UserActions from '@/components/UserCard/UserActions/UserActions';
import Avatar from '@/components/Avatar/Avatar.component';


// ** Type imports
import IUser from '@/types/user'

// ** Hook action imports
import useGetUserCardActions from '@/hooks/useGetUserCardActions';
import useGetUserInfo from '@/hooks/useGetUserInfo';

type UserViewProps = {
    user : IUser
}

const User = (props: UserViewProps) => {
    const {user} = props

    // for the user information
    const { getInfoListItems } = useGetUserInfo({user})
    // for action items
    const { actionsWithIconsArray } = useGetUserCardActions()


    return (
        <UserCard user={user}>
            <UserMedia>
                <Avatar alt={user.name} username={user.username} />
            </UserMedia>
            <UserInfo>
                <Typography fontWeight='700' component='h2'>{user.name}</Typography>
                <UserInfoList 
                    infoListItems={getInfoListItems} 
                />
            </UserInfo>
            <UserFooter>
                <UserActions userCardActions={actionsWithIconsArray} />
            </UserFooter>
        </UserCard>
    )
}

export default User