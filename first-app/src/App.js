import './App.css';
import Header from './Components/header';
import Cards from './Components/cards';
import weatherInfo from './Components/data';

function App() {
  return  <div>
    {Header()}
    {Cards(weatherInfo)}
    </div>
  ;
}

export default App;

