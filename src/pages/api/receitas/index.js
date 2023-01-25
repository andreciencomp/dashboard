export default function handler(req, res){

    let dados={
        receitaTotal:{
            total:312321.00,
            mediaPorCliente:67.20
        },
        lucroTotal:{
            total:74421.00,
            mediaPorCliente:42.20
        },
        lucroPorVenda:{
            total:3.12,
            mediaPorCliente:12.40
        }
    }


    res.status(200).json(dados);
    


}