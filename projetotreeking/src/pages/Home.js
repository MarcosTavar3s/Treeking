import { Link } from 'react-router-dom';
import Button from '../components/events/Button';
import Footer from '../components/Footer';
import Menu from './TitlesAligned.module.css';
import {FaRunning} from 'react-icons/fa';

function Home(){

    return (
    <div className={Menu.aligned}> 
        <h1 className={Menu.title}><FaRunning /> Treeking</h1>   
        <span>
            <Link to="/cadastro">
                <Button text="CADASTRAMENTO DE USUÁRIOS"/>
            </Link>
        </span>
 
       <span>
            <Link to="corrida">
                    <Button text="MONITORAMENTO DA CORRIDA"/>
            </Link>
       </span>
        
        <span><Footer menu={1}/></span>       
    </div>

    );
}

export default Home;