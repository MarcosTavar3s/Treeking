const db = require('../db');

buscarTodos = ()=>{
    return new Promise((aceito,rejeitado) =>{
        db.query('SELECT * from atual',(error, results) =>{
            if(error){
                 rejeitado(error);
                 return;
                }
                aceito(results);
        })
    })
}

buscarUser = (id) =>{
    return new Promise((aceito,rejeitado) =>{
        db.query('SELECT * from atual WHERE id = ?', [id], (error, results) => {
            if(error){
                rejeitado(error);
                return;
            }
            if(results.length > 0){
                aceito(results[0]);
            }
            else{
                aceito(false);
            } 


        });
    }
)
}

inserir = (user, id_cartao) =>{
    //checa se o usuário já existe
    return new Promise((aceito,rejeitado) => {
        db.query('SELECT COUNT(*) AS count FROM atual WHERE id_cartao = ?', [id_cartao], (error, results) =>{
            
            if(error){
                rejeitado(error);
                return;
            }

            //count > 0 significa que já tem dado registrado sobre isso no banco de dados
            const count = results[0].count;

            if (count > 0) {
                rejeitado("O dado já existe");
                return;
            }

            aceito(true);
        })
    }
).then(resultado => { 

     // Caso a Promise der certo (aceito(true) rodar), então o programa executará o bloco a seguir
     return new Promise((aceito, rejeitado) => {
        db.query('INSERT INTO atual (nome_corredor, id_cartao) VALUES (?,?)', [user, id_cartao], (error, results) => {
            if (error) {
                rejeitado(error); // Rejeita a Promise com o erro
                return;
            }

            console.log('Dado inserido no banco com sucesso');
            aceito(true);
            return;
        });
    });
    
}).catch(err => console.log(err));

}

//update dos dados do banco de dados
alterar = (id, user, id_cartao) =>{
    return new Promise((aceito, rejeitado) => {
      
        db.query('UPDATE atual SET nome_corredor = ?, id_cartao = ? WHERE id = ?', [user, id_cartao, id],(error, results) =>{
            if(error){
                rejeitado(error);
                return;
            }
            
            aceito(results.insertId);
        }
    )
    } 
)
}

//apaga os dados do banco de dados
apagar = (id) =>{
    return new Promise((aceito,rejeitado) => {
        db.query('DELETE FROM atual WHERE id = ?', [id], (error,results) => {
            if(error){
                rejeitado(error);
                return;
            }
            aceito(results);
        })
    }

)
}

module.exports = {
    buscarTodos,
    buscarUser,
    inserir,
    alterar,
    apagar
};

/*OBTENÇÃO DO TEMPO TOTAL 
UPDATE atual set tempo_total = 
CONCAT(FLOOR(TIMESTAMPDIFF(SECOND, tempo_de_chegada, tempo_de_largada)/3600), ':', FLOOR((TIMESTAMPDIFF(SECOND, tempo_de_chegada, tempo_de_largada)%3600)/60) , ':', FLOOR(TIMESTAMPDIFF(SECOND, tempo_de_chegada, tempo_de_largada)%60) )
WHERE id_cartao = 0010423000;
*/