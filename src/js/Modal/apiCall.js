import { setLocation } from './storage';
export function getWeather(name) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${process.env.API_KEY}`,
    )
      .then((result) => {
        if (!result.ok) throw result.json();
        return result.json();
      })
      .then((result) => {
        setLocation(name);
        resolve(result);
      })
      .catch((error) => error.then((body) => reject(body)));
  });
  // return fetch(
  //   `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.API_KEY}`,
  // )
  //   .then((result) => {
  //     if (!result.ok) throw result;
  //     return result.json();
  //   })
  //   .then((result) => {
  //     return result;
  //   })
  //   .catch((error) => {
  //     console.log('Error occurred');
  //     try {
  //       error.then((body) => {
  //         //Here is already the payload from API
  //         return body;
  //       });
  //     } catch (e) {
  //       console.log('Error parsing promise');
  //       console.log(error);
  //     }
  //   });
}
