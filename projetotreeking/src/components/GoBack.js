import {Link} from 'react-router-dom';
import { FaBackward } from "react-icons/fa";
import style from './GoBack.module.css';

function GoBack(){
    return(
        <Link className={style.goback} to="/"><FaBackward/><p>Menu</p></Link> 
       );
    
}

export default GoBack;