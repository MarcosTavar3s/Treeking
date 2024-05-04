const corridaService = require('../services/corridaService');

buscarTodos = async(req,res) =>{
    let json ={error:' ', result:[]};

    let corrida = await corridaService.buscarTodos();

    for(let i in corrida){
        json.result.push(
            corrida[i].id_cartao,
            corrida[i].nome_corredor
        )
    }
    res.json(json);
};

buscarUser = async(req, res) =>{
    let json ={error:' ', result:{}};
    
    let id = req.params.id;

    let user = await corridaService.buscarUser(id);

    if(user){
        json.result = user;
    }

    res.json(json);
    
};

inserir = async(req, res) => {
    let json = { error:'', result:''};
    
    let user = req.body.user;
    let id_cartao = req.body.id_cartao;
    
    if( id_cartao && user){
        let id = await corridaService.inserir(user, id_cartao);

        if(id===true){
            json.result = 'Inserido com sucesso!';
        }
        else{
            json.error = 'O ID do Cartão já foi cadastrado anteriormente, tente novamente.'
        }
    }
    else{
        json.error = 'Campos não enviados';
    }
   
    res.json(json);

};

alterar = async(req, res) => {
    let json = { error:'', results:{}};

    let user = req.body.user;
    let id = req.body.id;
    let id_cartao = req.body.id_cartao;

    if(id && id_cartao && user){
        await corridaService.alterar(id, user, id_cartao);
        json.return = 'Alterado! Cheque o banco para confirmar';
    }
    else{
        json.error = 'Campos não-preenchidos';
    }
    res.json(json);

}

apagar = async(req, res) =>{
    let json = {error:'', results:{}};

    let id = req.params.id;

    if(id){
        await corridaService.apagar(id);
        json.result = 'Deletado';
    }
    else{
        json.error = 'Não foi possível deletar'
    }
    res.json(json);
}

module.exports = {
    buscarTodos, 
    buscarUser,
    inserir,
    alterar,
    apagar
};
