import PropTypes from 'prop-types'
import styles from "./Button.module.css"
import { FaAnglesRight } from "react-icons/fa6";


function Button({text}){
    return(
        <button className={styles.buttons}><span className={styles.icons}><FaAnglesRight /></span> {text}</button>
    );
}

Button.propTypes= {
    text: PropTypes.string,
}

export default Button;