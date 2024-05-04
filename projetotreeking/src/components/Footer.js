import styles from './Footer.module.css';
import {FaInstagram} from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

function Footer(){ 

    return(
        <footer className={styles.rodape}>
            <li className={styles.rodape_li}>
                <ul className={styles.rodape_li_title}>Desenvolvido por</ul>
                <ul><span className={styles.rodape_icons}><a href="https://www.instagram.com/marcostfilho_" target="_blank" rel="noreferrer" ><FaInstagram /></a>@marcostfilho_</span></ul>
                <ul><span className={styles.rodape_icons}><FaGoogle /></span> marcosfilho1411@gmail.com</ul>
            </li>
        </footer>
    );
}

export default Footer;