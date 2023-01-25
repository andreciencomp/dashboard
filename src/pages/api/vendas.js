export default function handler(req, res){

    const vendas = {

        
        clientesAtivos:{
            valor:3312,
            tipoValor:'quantidade',
            infoPercentagem:2.6,
            infoIncremento:12,
            maisInfo:0

        }, 
        novosClientes:{
            valor:12,
            tipoValor:'quantidade',
            infoPercentagem:15.3,
            infoIncremento:2,
            maisInfo:0
        },
        clientesAdicionados:{
            valor:42,
            tipoValor:'quantidade',
            infoPercentagem:42.6,
            infoIncremento:8,
            maisInfo:0
        },
        ltv:{
            valor:142.32,
            tipoValor:'moeda-real',
            infoPercentagem:-22.6,
            infoIncremento: 12.2,
            maisInfo:0
        },
        turnover:{
            valor:24.3,
            tipoValor:'percentagem',
            infoPercentagem:42.6,
            infoIncremento:3,
            maisInfo:32
        },
        turnoverRecuperado:{
            valor:54.42,
            tipoValor:'percentagem',
            infoPercentagem:32.6,
            infoIncremento:6,
            maisInfo:12

        },
        
    }

    res.status(200).json(vendas);
}