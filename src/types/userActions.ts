// ** Types
import { SxProps } from "@mui/system"

export type UserActionsProps<T> = {
    userCardActions : UserActionsItem<T>[]
}

export type UserActionsItem<V> = {
    action : (id : number) => void
    icon : V
    sx? : SxProps
    description? : string
}