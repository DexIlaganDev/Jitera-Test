// ** MUI Imports
import { Grid } from '@mui/material';

// hoc wrapper
import { SectionWrapper } from '@/hoc'
import useGetUsers from '@/hooks/useGetUsers';

// ** User
import UserCol from '@/components/UserCard/UserCol/UserCol';

// ** Views
import User from '@/pages/Jitera/views/User.view';


// *********** Start Page **********//
const JiteraPage = () => {

    // Get User Hook
    const { users, isLoading } = useGetUsers()

    return (
        <Grid className='jitera-page' container spacing={3}>
            {
                users?.map( user => (
                    <UserCol key={user.id} sm={3}>
                        <User user={user} />    
                    </UserCol>
                ))
            }
            
        </Grid>
    )
}

export default SectionWrapper(JiteraPage)