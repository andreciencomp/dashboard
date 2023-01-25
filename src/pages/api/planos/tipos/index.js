export default function handler(req, res){

    let dados = {
        quantidade:2,
        lista:[
        {
            nome:'Construtoras',
            quantidade:312,
            preco:123.90
        },
        {
            nome:'Clientes finais',
            quantidade:312,
            preco:123.90
        }]
    }

    res.status(200).json(dados)

}