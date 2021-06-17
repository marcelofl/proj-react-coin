import React, {useState} from 'react'
import './Pesquisa.css'


export default function Pesquisa(props) {

    const [imgUrl, setImgUrl] = useState(props.imgUrl)
    const [texto, setTexto] = useState(0)
    const [cor, setCor] = useState(props.cor)    
    const [moedaA, setMoedaA] = useState(props.moedaA)
    const [resultado, setResultado] = useState('')

    const atualizaValor = (event) => {
        setTexto(event.target.value)
    }

    const converter = async () => {
       
        let url = "https://api.bitcointrade.com.br/v3/public/BRL" + moedaA + "/ticker/"
        console.log(url)
        let result = await fetch(url)
        let dados = await result.json()
        let dados1 = dados['data']        
        setResultado( parseFloat(texto) * dados1["buy"])
    }
    
    return(
        <div className="div--main" style={{backgroundColor: cor}}>            
            <img src={imgUrl}/>
            <h5 font-color="">Conversão de {moedaA + '-BRL'} </h5>
            <input type="text" placeholder={'Digite o valor em ' + moedaA + ':'} onChange={atualizaValor} />
            <button onClick = {converter}>Converter</button>
            <p>{resultado}</p>
        </div>
    )
}