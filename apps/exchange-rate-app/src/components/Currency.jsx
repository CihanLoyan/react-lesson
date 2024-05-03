import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import "../css/currency.css";
import axios from "axios";

function Currency() {

  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState();

  let token = "fca_live_9FJHuKQ4d7P7kmOcFyk3fnvcbUVtTZmICGK1e0Kg";
  let baseUrl = "https://api.freecurrencyapi.com/v1/latest";

  const exchange = async () => {
    const response = await axios.get(`${baseUrl}?apikey=${token}&base_currency=${fromCurrency}`)  
    const dataToCurrency = response.data.data[toCurrency]; // response.data.data["TRY"]
    setResult((amount * dataToCurrency).toFixed(2));
  }

  return (
    <div>
      <div className="currency-main">
        <div
          style={{
            backgroundColor: "#5E5D5D",
            width: "100%",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          <h3 style={{ fontFamily: "arial", color: "#fff" }}>
            DÖVİZ KURU UYGULAMASI
          </h3>
        </div>

        <div style={{ marginTop: "20px" }}>
          <input
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            type="number"
            className="amount-input"
          />
          <select onChange={(e) => setFromCurrency(e.target.value)} className="first-currency-option">
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>
          <FaArrowRight style={{ marginRight: "10px" }} />

          <select onChange={(e) => setToCurrency(e.target.value)} className="second-currency-option">
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
          </select>

          <input
            value={result}
            onChange={(e) => setResult(e.target.value)}
            type="text"
            className="result-input"
          />
        </div>

        <div className="button-main">
          <button
            onClick={exchange}
            style={{
              width: "100px",
              height: "30px",
              border: "none",
              backgroundColor: "green",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "5px",
              marginTop: "20px",
            }}
          >
            Çevir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Currency;
