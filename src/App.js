import React, { useState, useEffect } from "react";
import { Header } from "./Header/Header";
import { AppWrapper } from "./AppStyled";
import { Table } from "./Table/Table";
import axios from "axios";

function App() {
  const COIN_COUNT = 10;
  const [balance, setBalance] = useState(1000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/')
    .then( response => {
      let coinData = response.data.slice(0, COIN_COUNT).map((coin) => {
        return {
          key: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          price: coin.market_data.current_price["usd"],
          balance: '-',
        }
      })
      setCoinData(coinData);
    })
  }, []);

  function toggleBalance() {
    setShowBalance(!showBalance);
  }

  function refreshBalance() {
    let randomNum = Math.random();
    let newNum = randomNum * 100;
    setBalance(newNum);
  }

  return (
    <>
      <AppWrapper />
      <Header showBalance={showBalance} toggleBalance={toggleBalance}/>
      <Table showBalance={showBalance} coinData={coinData} balance={balance} refreshBalance={refreshBalance}/>
    </>
  );
}

export default App;
