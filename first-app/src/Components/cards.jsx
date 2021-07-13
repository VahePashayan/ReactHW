import cloudyRain from '../assets/cloudyRain.svg';
import cloudySun from '../assets/cloudySun.svg';
import sun from '../assets/sun.svg';
import Card from './card';

export default function Cards(props) {
  let elements = props.map((el) => {
    if (parseInt(el.temp) > 37) {
      el.imgURL = sun;
      return <Card day={el} />;
    } else if (parseInt(el.temp) <= 37 && parseInt(el.temp) >= 35) {
      el.imgURL = cloudySun;
      return <Card day={el} />;
    } else {
      el.imgURL = cloudyRain;
      return <Card day={el} />;
    }
  });

  return <div className="cards">{elements}</div>;
}
