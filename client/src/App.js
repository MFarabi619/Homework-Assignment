import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <select id="currency">
            <option value="Bitcoin">BTC</option>
            <option value="Ethereum">ETH</option>
            <option value="Tether">USDT</option>
            <option value="Solana">SOL</option>
            <option value="Litecoin">LTC</option>
            <option value="Doge">Dogecoin</option>
            <option value="Cardano">ADA</option>
            <option value="Terra">UST</option>
          </select>
        </div>

        <p id="price">Price: $ CAD</p>
      </header>
    </div>
  );
}

export default App;
