import styles from '@/styles/CardSmallSale.module.css'
import { useRef } from 'react'
export default function CardSmallSale(props){


    let valorFormatado = '0'
    let infoIncremento;
    if(props.dados){
        infoIncremento = props.dados.infoIncremento;
        if(props.dados.tipoValor === 'quantidade'){
            valorFormatado = props.dados.valor.toLocaleString('pt-br')
        }
        else if(props.dados.tipoValor ==='moeda-real'){
            valorFormatado = props.dados.valor.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
            infoIncremento = infoIncremento.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
        }
        else if(props.dados.tipoValor ==='percentagem'){
            valorFormatado = props.dados.valor.toLocaleString('pt-br') + '%'
        }

        
        
    }


    return(
        
        <div className={styles.card_small_sale}>
            <span className={styles.titulo}>{props.titulo ?? 'titulo'}</span>
            <div className={styles.valores}>

                <span className={styles.valor}>{valorFormatado}</span>
                <span className={styles.mais_info}>{props.dados && props.dados.maisInfo > 0 ? props.dados.maisInfo : null} </span>
            </div>
            <div className={styles.detalhes_botom} style={props.dados && props.dados.infoPercentagem < 0 ? {color:'red'}:{color:'#05CD99'}}>
                <span className={styles.detalhes}>{props.dados ? +props.dados.infoPercentagem:null}%</span>
                <span className={styles.detalhes_incremento}>(+{props.dados ? infoIncremento:null})</span>
            </div>
                
        </div>
    );


}