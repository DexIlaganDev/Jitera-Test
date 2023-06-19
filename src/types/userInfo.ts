export type UserInfoListProps<T> = {
    infoListItems : UserInfoListItemProps<T>[]
}

export type UserInfoListItemProps<V> = {
    icon : V
    text : string
}