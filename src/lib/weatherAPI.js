async function getWeather(location, unit) {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const requestUrl = `${baseUrl}${location}&APPID=${process.env.VUE_APP_API_KEY}&units=${unit}`;

  try {
    const request = await fetch(requestUrl, { mode: "cors" });
    const result = await request.json();
    const weatherResult = {
      place: `${result.name}, ${result.sys.country}`,
      main: result.weather[0].main,
      description: result.weather[0].description,
      temp: result.main.temp,
      feels_like: result.main.feels_like,
      temp_min: result.main.temp_min,
      temp_max: result.main.temp_max,
      humidity: result.main.humidity,
      pressure: result.main.pressure
    };
    return weatherResult;
  } catch (error) {
    console.log(error);
  }
}

export default getWeather;
