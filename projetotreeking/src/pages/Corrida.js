import styles from './TitlesAligned.module.css';
import corridaStyle from './Corrida.module.css';
import Quadrado from '../components/Quadrados';
import Footer from '../components/Footer';
import quadradoStyle from '../components/Quadrado.module.css';
import Input from '../components/Input';
import GoBack from '../components/GoBack'
import axios from 'axios';

function Corrida(){
    
   async function abc(){    
        axios.get('http://localhost:8000/api/corrida/')
        .then(response => {
          alert(JSON.stringify(response.data.result));
        //   console.log(response.data);
        })
        .catch(error => {
          alert('555555555');
          console.error('Erro:', error);
        });
          
                
    }
    return (
        <div>
            <GoBack />
            <div className={styles.aligned}> 
                <h1 className={corridaStyle.title}>Corrida</h1> 
            
                <span className={quadradoStyle.aligned}>
                    <Quadrado />
                    <form onSubmit={abc}>
                        <Input name="leitura do cartao" labelName="Id do Cartão" typeOfInput="text" theme={2}/>
                        <Input name="Enviar" typeOfInput="submit"/> 

                    </form>
                    
                </span>

                <Footer menu={0}/>               
            </div>
        </div>
   
    );
}

export default Corrida;