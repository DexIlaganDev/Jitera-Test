import React from 'react'

// ** Styles import
import styles from "./card.module.css"


type Props = {}

const Card = (props: Props) => {
    return (
        <div className={`card ${styles.card}`}>card.component</div>
    )
}

export default Card