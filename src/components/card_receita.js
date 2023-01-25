
import styles from '@/styles/CardReceita.module.css'
import { devIndicators } from 'next.config'

export default function CardReceita(props){



    return(
        <div className={styles.card_receita} style={{backgroundColor:props.cor ?? 'gray'}}>
                <div className={styles.cifrao}>
                    <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.67343 11.6398C4.56716 10.8325 3.56822 9.99777 3.56822 8.69778C3.56822 7.20622 4.95031
                            6.16624 7.26291 6.16624C9.20604 6.16624 10.1776 6.90518 10.5334 8.082C10.6976 8.62936 11.1492 9.03988
                            11.7239 9.03988H12.1344C13.0376 9.03988 13.6807 8.15042 13.366 7.30201C12.7913 5.6873 11.4502 4.34626
                            9.31552 3.82627V2.88207C9.31552 1.7463 8.39869 0.829468 7.26291 0.829468C6.12714 0.829468 5.21031 1.7463
                            5.21031 2.88207V3.78522C2.55561 4.35995 0.420898 6.08414 0.420898 8.72515C0.420898 11.8862 3.03455 13.4598 
                            6.85239 14.3767C10.2734 15.1977 10.9576 16.4019 10.9576 17.6745C10.9576 18.6187 10.2871 20.1239 7.26291
                            20.1239C5.00505 20.1239 3.84191 19.3166 3.39033 18.1671C3.18507 17.6335 2.71982 17.2503 2.15877 17.2503H1.77562C0.858787
                            17.2503 0.215638 18.1808 0.557739 19.0292C1.33773 20.9313 3.1577 22.0534 5.21031 22.4913V23.4081C5.21031 24.5439 6.12714
                            25.4607 7.26291 25.4607C8.39869 25.4607 9.31552 24.5439 9.31552 23.4081V22.5187C11.9839 22.0123 14.1049 20.466 14.1049
                            17.6608C14.1049 13.7746 10.7797 12.4472 7.67343 11.6398Z" fill={props.cor ?? 'gray'}/>
                    </svg>
                </div> 

                <span className={styles.valor}>{props.dados ? props.dados.total.toLocaleString('pt-br',{style:'currency',currency:'BRL'}):'valor'}</span>
                <span className={styles.nome_card}>{props.titulo ? props.titulo:'titulo'}</span>
                <hr className={styles.separador}></hr>
                <span className={styles.valor_medio}>{props.dados ? props.dados.mediaPorCliente.toLocaleString('pt-br',{style:'currency', currency:'BRL'}): 'valor'}</span>
                <span className={styles.nome_media_cliente}> Média por cliente</span>
            </div>
        
        

    )


}