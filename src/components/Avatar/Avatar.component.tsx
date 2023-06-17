// ** Style Modules
import styles from "./avatar.module.scss";

// ** custom components
import constants from "@/constants";

type AvatarProps = {
    username? : string
}
const Avatar = (props : AvatarProps) => {

    const { username } = props;

    const getAvatar = (name? : string) => {
        
        const generateAvatarLink = `${constants.api.avatarUrl}/${name}.svg`;

        return generateAvatarLink
                ?? constants.api.brokenImageLink
    }

    return <img className={`${styles.parent}`} src={getAvatar(username)} />
}

export default Avatar