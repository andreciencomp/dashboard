import styles from '@/styles/CardCotacao.module.css'

export default function CardCotacao(props){


    return(
        <div className={styles.card_cotacao}>
            <div className={styles.cifrao}>
                <img src="./img/cifrao_azul.svg"></img>
            </div>
            <span className={styles.area_valor}>
                <span className={styles.valor}>{props.dados ? props.dados.valor.toLocaleString('pt-br'):null}</span>
                <span className={styles.detalhe_valor}>{(props.dados && props.dados.detalheValor)?props.dados.detalheValor:null}</span>
            </span>
            
            <span className={styles.titulo}>{props.titulo ?? null}</span>
            <span className={styles.detalhes_bottom} style={props.dados && props.dados.infoPercentagem <0 ? {color:'red'}:{color:'#05CD99'}}>
                {props.dados &&(
                    <>
                    <span className={styles.info_percentagem}>{props.dados.infoPercentagem >0 ?'+'+props.dados.infoPercentagem:props.dados.infoPercentagem}</span>
                    <span className={styles.info_incremento}>(+{props.dados.infoIncremento })</span>
                    </>
                )}
                
            </span>
            
        </div>
    )
}