export default function handler(req, res){

    let dados = {
        quantidade:4,
        lista:[
        {
            nome:'6 vendas',
            quantidade:312,
            preco:123.90
        },
        {
            nome:'12 vendas',
            quantidade:312,
            preco:123.90
        },
        {
            nome:'24 vendas',
            quantidade:312,
            preco:123.90
        },
        {
            nome:'Personalizado',
            quantidade:312,
            preco:123.90
        }]
    }

    res.status(200).json(dados)

}