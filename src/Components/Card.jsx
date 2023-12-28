import styles from '../Styles/Card.module.css';


function Card({name,image,onClick}) {

    return ( 
        <div className={styles.container} onClick={onClick}>
            <div className={styles.name}>{name}</div>
            <div className={styles.image}><img src={image}/></div>
        </div>
     );
}

export default Card;