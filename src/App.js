import './App.css';
import Pesquisa from './Pesquisa'

export default function App() {

  const bitcoin = require("./Icons/icons8-bitcoin.png").default;
  const ethereum = require("./Icons/icons8-ethereum-50.png").default;
  const lite = require("./Icons/litecoin.png").default;

  return (
    <div className="App">         
      <Pesquisa moedaA="BTC" cor="gold" imgUrl= {bitcoin}/>      
      <Pesquisa moedaA="ETH" cor="silver" imgUrl= {ethereum}/>
      <Pesquisa moedaA="LTC" cor="DeepSkyBlue" imgUrl= {lite}/>
    </div>
  );
}


