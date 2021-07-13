import ReactDOM from 'react-dom'

import cloudyRain from "../assets/cloudyRain.svg";
import cloudySun from "../assets/cloudySun.svg";
import sun from "../assets/sun.svg";

export default function Cards(props) {
    let element = props.map((el) => {
      if(parseInt(el.temp) > 37) {
        return (
        <h2>{el.weekDay}</h2>,
        <img src="../assets/sun.svg" alt="" />,
        <h2>{el.temp}</h2>
      )}
    });
    
    return <div className="cards">{element}</div>;
  }
  
  ReactDOM.render(
    Cards,
    document.getElementById('root')
  );