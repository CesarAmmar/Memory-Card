import styles from '../Styles/Footer.module.css';

function Footer() {
    return ( 
        <div className={styles.container}>Copyright &#169; 2024 
         <a href='https://github.com/CesarAmmar'>{" "}<i className="fa-brands fa-github"></i></a>
         </div>
     );
}

export default Footer;