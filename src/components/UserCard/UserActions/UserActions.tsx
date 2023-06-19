// ** MUI Imports
import { Button } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

// ** Types
import { UserActionsProps } from '@/types/userActions';

// ** User card hook import
import { useUserCard } from '../UserCardContext'


// USE MUI ICONS TYPE but could be any like fontawesome etc
type SvgIconComponent = typeof SvgIcon;

const UserActions = (props: UserActionsProps<SvgIconComponent>) => {
    
    // call from context
    const { id } = useUserCard()
    
    const { userCardActions } = props
    return (
        <div className='card__actions'>
            {
                userCardActions && userCardActions.map( (action,index) => (
                    <Button aria-label={action.description || ''} onClick={() => action.action(id) } key={index}>
                        {<action.icon className='card__actions-icon' sx={action.sx} />}
                    </Button>
                ))
            }
        </div>
    )
}

export default UserActions