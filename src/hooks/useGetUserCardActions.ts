// ** Icon Imports
import { FavoriteBorder, BorderColorOutlined, Delete } from '@mui/icons-material';

// ** Types
import { UserActionsItem } from '@/types/userActions';
import SvgIcon from '@mui/material/SvgIcon';
type SvgIconType= typeof SvgIcon;

const useGetUserCardActions = () => {

    // ** Can import functions individually
    const handleFavoriteClick = ( id : number ) => {
        alert(`Favorite User #${id}`)
    }

    const handleEditClick = ( id : number ) => {
        alert(`Edit User #${id}`)
    }

    const handleDeleteClick = ( id : number ) => {
        alert(`Delete User #${id}`)
    }

    // ** Import as array for user card
    const actionsWithIconsArray : UserActionsItem<SvgIconType>[] = [
        {
            icon : FavoriteBorder,
            action : handleFavoriteClick,
            description : 'Heart icon to add to favorite',
            sx : { color : 'red'}
        },
        {
            icon : BorderColorOutlined,
            action : handleEditClick,
            description : 'Pencil icon for editing action',
        },
        {
            icon : Delete,
            action : handleDeleteClick,
            description : 'Trash icon for deleting action',
        },
    ]

    return { actionsWithIconsArray, handleFavoriteClick, handleEditClick, handleDeleteClick }
}

export default useGetUserCardActions