import '../css/main.scss';
import 'bootstrap';
import View from './Views/View';
import { getWeather } from './Modal/apiCall';
import { getLocation, setLocation } from './Modal/storage';

class Controller {
  constructor(View) {
    this.view = View;
    this.initWeather();
    this.view.bindChangeCity(this.onHandleChangeCity);
  }
  initWeather() {
    if (getLocation() === null) setLocation('London');
    getWeather(getLocation())
      .then((res) => this.view.displayWeather(res))
      .catch((err) => console.log(err));
  }
  onHandleChangeCity(obj, ondisplayWeather, onTooltip, onCloseModal) {
    getWeather(obj)
      .then((res) => {
        ondisplayWeather(res);
        onCloseModal();
      })
      .catch((err) => onTooltip(err));
  }
}

const app = new Controller(new View());
document.addEventListener('DOMContentLoaded', app);
