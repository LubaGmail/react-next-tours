import styles from './card.module.css'

const Card = (props) => {

    return (

        <>
            <div className={styles.item}>
                {props.children}
            </div>
        </>
    )
}

export default Card