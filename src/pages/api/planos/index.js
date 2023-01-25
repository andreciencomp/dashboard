export default function handler(req, res){

    let dados = {
        quantidade:123,
        lista:[
        {
            nome:'Estagiários',
            quantidade:312,
            preco:123.90
        },
        {
            nome:'Diretoria',
            quantidade:312,
            preco:123.90
        },
        {
            nome:'Geral',
            quantidade:312,
            preco:123.90
        },
        {
            nome:'Almoxarifado',
            quantidade:312,
            preco:123.90
        }]
    }

    res.status(200).json(dados)

}