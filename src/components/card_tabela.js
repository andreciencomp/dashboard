import styles from '@/styles/CardTabela.module.css'

export default function CardTabela(props){

    if(props.dados){
        console.log("imprimindo")
        console.log(props.dados)
    }
    
    return(
                <div className={styles.tabela}>
                    <span className={styles.titulo}>{props.titulo}</span>
                    <span className={styles.quantidade}>{props.dados && props.dados.quantidade + "      " +props.textoQuantidade} </span>
                    <hr className={styles.separator}></hr>
                    <table width='100%'>
                        <tbody>
                        <tr>
                            <th className={styles.first}>CLUBE</th>
                            <th className={styles.info}>CLIENTES</th>
                            <th className={styles.info}>PREÇO</th>
                        </tr>
 
                       
                        {props.dados.lista && props.dados.lista.map((dado,key)=>{
                            return (
                                <tr key={key}>
                                    <td>{dado.nome}</td>
                                    <td className={styles.info}>{dado.quantidade.toLocaleString('pt-br')} clientes</td>
                                    <td className={styles.info}>{dado.preco.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</td>
                                </tr>
                            )
                        })} 
                    </tbody>
                    </table>

                </div>
    )


}