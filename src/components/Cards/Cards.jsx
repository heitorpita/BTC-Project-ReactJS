import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";

export default function Cards() {
  const [btcPriceBRL, setBtcPriceBRL] = useState(0);
  const [inputBRL, setInputBRL] = useState("");
  const [conversionResult, setConversionResult] = useState("Ex: R$100 = 0 sats");

  // Buscar preço do BTC
  const fetchBTCPrice = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl"
      );
      const data = await res.json();
      setBtcPriceBRL(data.bitcoin.brl);
    } catch (error) {
      setBtcPriceBRL(0);
      console.error("Erro ao buscar BTC:", error);
    }
  };

  // Converter BRL para Satoshis
  const convertToSats = () => {
    if (!inputBRL || btcPriceBRL === 0) return;
    const btcAmount = parseFloat(inputBRL) / btcPriceBRL;
    const sats = Math.floor(btcAmount * 100_000_000);
    setConversionResult(`R$ ${inputBRL} = ${sats.toLocaleString("pt-BR")} sats`);
  };

  useEffect(() => {
    fetchBTCPrice();
    const interval = setInterval(fetchBTCPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.satoshiConverterCard}>
      <p>Conversor de Reais para Satoshis</p>
      <div className={styles.converterRow}>
        <input
          type="number"
          placeholder="Valor em R$"
          value={inputBRL}
          onChange={(e) => setInputBRL(e.target.value)}
        />
        <button className={styles.convertBtn} onClick={convertToSats}>
          Converter
        </button>
      </div>
      <p>{conversionResult}</p>
      <p className={styles.btcPrice}>
        BTC Price:{" "}
        {btcPriceBRL
          ? `R$ ${btcPriceBRL.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}`
          : "Carregando..."}
      </p>
    </div>
  );
}
