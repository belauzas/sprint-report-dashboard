import './App.css';
import { Aside } from './components/aside/Aside';
import { Main } from './components/main/Main';
import { StatsAside } from './components/stats-aside/StatsAside';

function App() {
  return (
    <div className="App">
      <Aside />
      <Main />
      <StatsAside />
    </div>
  );
}

export default App;
