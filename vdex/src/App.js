import './App.css';
import MetamaskButton from './components/MetamaskButton';
import TradingBox from './components/TradingBox';

function App() {

  return (
    <div className="App">
      <div id="head" style={{backgroundColor: "#1F2833", paddingTop:"10px", paddingLeft: "20px", paddingRight: "20px"}}>
        <div id="title" style={{color: "white", fontSize:30, display: 'flex', justifyContent:'center', textAlign:'center'}}>
          VDEX
        </div>
        <div id="button" style={{display: 'flex', justifyContent:'flex-end'}}>
          <MetamaskButton />
        </div>
      </div>
      <header className="App-header" style={{ backgroundColor: "#1F2833" }}>
        <TradingBox />
      </header>
    </div>
  );
}

export default App;
