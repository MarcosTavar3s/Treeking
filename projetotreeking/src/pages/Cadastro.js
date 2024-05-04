import styles from './TitlesAligned.module.css';
import cadastroStyle from './Cadastro.module.css';
import Footer from '../components/Footer';
import Input from '../components/Input'
import GoBack from '../components/GoBack';

import axios from 'axios';
import { useState } from 'react';
import {FaUsersLine} from 'react-icons/fa6'

function Cadastro(){
    
    const [name, setName] = useState('');
    const [idcartao, setIdCartao] = useState('');

    //api usa req.params
    async function postCadastro(event){
        event.preventDefault();
       
        try{
            //resolver o problema dos campos vazios que dá CRASH no react --> USAR REQ.BODY
            const response = await axios.post('http://localhost:8000/api/registro',{
                user: name,
                id_cartao: idcartao
            });

            response.data.result !==''? alert(response.data.result) : alert(response.data.error);

            setName('');
            setIdCartao('');

        }
        catch(error){
            console.error('Erro ao obter dados do servidor:', error);
            throw error;
        }
        
    }



    return (
     <div >
        <GoBack /> 
        <div className={styles.aligned}> 
            <h1 className={cadastroStyle.title}><span className={cadastroStyle.icons}><FaUsersLine /></span>Cadastro</h1>
                <form onSubmit={postCadastro}>
                    <Input name="nome" labelName="Digite o nome:" typeOfInput="text" theme={1} value={name} change={(e) =>{setName(e.target.value)}}/>
                    <Input name="idcartao" labelName="Digite o id do cartão:" typeOfInput="number" theme={1} value={idcartao} change={(e) =>{setIdCartao(e.target.value)}}/>
                    <Input typeOfInput="submit"/>
                </form>
                
            <Footer menu={0}/>
        </div>
        
    </div>

    );
}

export default Cadastro;