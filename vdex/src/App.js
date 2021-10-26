import './App.css';
import TradingBox from './components/TradingBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<div id="title" style={{x: 0}}>
		VDEX
		</div>
		<TradingBox />
      </header>
    </div>
  );
}

export default App;
