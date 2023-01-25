
import { useState, useEffect, useRef } from 'react'
import styles from '@/styles/Dashboard.module.css'
import CardReceita from './card_receita'
import CardSmallSale from './card_small_sales'
import CardCotacao from './card_cotacao'
import CardTabela from './card_tabela'

export default function Dashboard(){

    const [detalhamentoReceita, setdetalhamentoReceita] = useState({})
    const [vendas, setVendas] = useState({})
    const [cotacoes, setCotacoes] = useState({})
    const [planos, setPlanos] = useState({})
    const [categorias, setCategorias] = useState({})
    const [tiposPlano, setTiposPlano] = useState({})

    async function buscarDadosReceita(){
        let dados = await fetch('http://localhost:3000/api/receitas')
        let dadosJson = await dados.json()
        setdetalhamentoReceita(dadosJson)
    }

    async function buscarDadosVendas(){
        let dados = await fetch('http://localhost:3000/api/vendas')
        let dadosJson = await dados.json()
        setVendas(dadosJson)
    }

    async function buscarDadosCotacoes(){
        let dados = await fetch('http://localhost:3000/api/cotacoes')
        let dadosJson = await dados.json()
        setCotacoes(dadosJson)
    }

    async function buscarDadosPlanos(){
        let dados = await fetch('http://localhost:3000/api/planos')
        let dadosJson = await dados.json()
        setPlanos(dadosJson)
    }

    async function buscarDadosCategorias(){
        let dados = await fetch('http://localhost:3000/api/categorias')
        let dadosJson = await dados.json()
        setCategorias(dadosJson)
    }

    async function buscarDadosPlanos(){
        let dados = await fetch('http://localhost:3000/api/planos')
        let dadosJson = await dados.json()
        setPlanos(dadosJson)
    }

    async function buscarDadosTiposPlano(){
        let dados = await fetch('http://localhost:3000/api/planos/tipos')
        let dadosJson = await dados.json()
        setTiposPlano(dadosJson)
    }



    useEffect(()=>{
        buscarDadosReceita()
        buscarDadosVendas()
        buscarDadosCotacoes()
        buscarDadosCategorias()
        buscarDadosPlanos()
        buscarDadosTiposPlano()
        

    },[]);

    


    return(
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <img className={styles.logo} src="./img/pex-logo.png"></img>
            <nav>
                <ul>
                    <li className={styles.ativo}>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99998 16V11H12V16C12 16.55 12.45 17 13 17H16C16.55 17 17 16.55 17 16V8.99997H18.7C19.16 8.99997 19.38 8.42997 19.03 8.12997L10.67 0.599971C10.29 0.259971 9.70998 0.259971 9.32998 0.599971L0.969976 8.12997C0.629976 8.42997 0.839976 8.99997 1.29998 8.99997H2.99998V16C2.99998 16.55 3.44998 17 3.99998 17H6.99998C7.54998 17 7.99998 16.55 7.99998 16Z" fill="#4318FF"/>
                        </svg>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="#A3AED0"/>
                        </svg>
                        <a href="#">Vendas</a>
                    </li>
                    <li>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.46671 5.73331H2.70004C3.59837 5.73331 4.33337 6.46831 4.33337 7.36665V15.5333C4.33337 16.4316 3.59837 17.1666 2.70004 17.1666H2.46671C1.56837 17.1666 0.833374 16.4316 0.833374 15.5333V7.36665C0.833374 6.46831 1.56837 5.73331 2.46671 5.73331ZM9.00004 0.833313C9.89837 0.833313 10.6334 1.56831 10.6334 2.46665V15.5333C10.6334 16.4316 9.89837 17.1666 9.00004 17.1666C8.10171 17.1666 7.36671 16.4316 7.36671 15.5333V2.46665C7.36671 1.56831 8.10171 0.833313 9.00004 0.833313ZM15.5334 10.1666C16.4317 10.1666 17.1667 10.9016 17.1667 11.8V15.5333C17.1667 16.4316 16.4317 17.1666 15.5334 17.1666C14.635 17.1666 13.9 16.4316 13.9 15.5333V11.8C13.9 10.9016 14.635 10.1666 15.5334 10.1666Z" fill="#A3AED0"/>
                        </svg>
                        <a href="#">Relatórios</a>
                            
                    </li>
                    <li>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z" fill="#A3AED0"/>
                        </svg>
                        <a href="#">Lojas parceiras</a>
                    </li>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z" fill="#A3AED0"/>
                        </svg>
                        <a href="#">Clientes</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className ={styles.area_principal}>
           <div className={styles.menu_titulo}>
                <div className={styles.esquerdo}>
                    <small className={styles.caminho}>Principal Dashboard</small>
                    <h1 className={styles.titulo}>Velty Dashboard</h1>
                </div>
                <div className={styles.barra_pesquisa}>
                    <div className={styles.input}>
                        <img src="./img/search.svg"className={styles.search}></img>
                        <input type="text" placeholder="Busca"></input>
                    </div>
                    <img className={styles.barra_pesquisa_simbolos} src="./img/notificacao.png"></img>
                    <img className={styles.barra_pesquisa_simbolos} src="./img/logout.png"></img>
                    <img className={styles.barra_pesquisa_simbolos} src="./img/info.svg"></img>
                    <img className={styles.foto} src="./img/foto.png"></img>
                </div>
           </div>

           <div className={styles.menu_filtro}>
                <span>Filtrar por data</span>
                <div className={styles.filtro}>
                    <img src="./img/filtro.png"></img>
                    <span>Data Inicial</span>
                </div>
                <div className={styles.filtro}>
                    <img src="./img/filtro.png"></img>
                    <span>Data Final</span>
                </div>
           </div>
           <div className={styles.cards_receita}>
                <CardReceita titulo="Receita total " dados={detalhamentoReceita.receitaTotal} cor={"#EC7A7A"}/>
                <CardReceita titulo="Lucro total " dados={detalhamentoReceita.lucroTotal} cor={"#7A85EC"}/>
                <CardReceita titulo="Lucro por venda " dados={detalhamentoReceita.lucroPorVenda} cor={"#65D4AC"}/>

           </div>
           <div className={styles.cards_small_sales}>
                
                <CardSmallSale  titulo="Clientes ativos" dados={vendas.clientesAtivos}/>
                <CardSmallSale titulo="Novos clientes" dados={vendas.novosClientes}/>
                <CardSmallSale titulo="Clientes adicionados" dados={vendas.clientesAdicionados}/>
                <CardSmallSale titulo="LTV" dados={vendas.ltv}/>
                <CardSmallSale titulo="Turnover" dados={vendas.turnover}/>
                <CardSmallSale titulo="Turnover recuperado" dados={vendas.turnoverRecuperado}/>
                
           </div>

           <div className={styles.cards_cotacoes}>
                <CardCotacao titulo='Cotações realizadas' dados={cotacoes.cotacoesRealizadas}/>
                <CardCotacao titulo='Vendas finalizadas' dados={cotacoes.vendasFinalizadas}/>
                <CardCotacao titulo='Cotatações não concluídas' dados={cotacoes.cotacoesNaoConcluidas}/>
                <CardCotacao titulo='Cotações não respondidas' dados={cotacoes.cotacoesNaoRespondidas}/>
           </div>
           
           <div className={styles.cards_tabelas}>
                <CardTabela titulo="Planos" textoQuantidade="planos ativos" dados={planos}/>
                <CardTabela titulo="Categorias" textoQuantidade="categorias em uso" dados={categorias}/>
                <CardTabela titulo="Tipos de planos" textoQuantidade="tipos em uso" dados={tiposPlano}/>
                

           </div>

        </div>
    </div>
    )


}