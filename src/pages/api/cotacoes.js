export default function handler(req,res){

    let dados= {
        cotacoesRealizadas:{
            valor:312321,
            infoPercentagem:15.3,
            infoIncremento:223,
        },
        vendasFinalizadas:{
            valor:212012,
            infoPercentagem:15.3,
            infoIncremento:223
        },
        cotacoesNaoConcluidas:{
            valor:42021,
            infoPercentagem:15.3,
            infoIncremento:223,

        },
        cotacoesNaoRespondidas:{
            valor:3122,
            detalheValor:3,
            infoPercentagem:15.3,
            infoIncremento:223
        }
    }

    res.status(200).send(dados)

}