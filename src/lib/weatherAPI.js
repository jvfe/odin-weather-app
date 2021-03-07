import { format, parseISO } from "date-fns";

function getWeatherInfo(obj) {
  return {
    place: `${obj.name}, ${obj.sys.country}`,
    main: obj.weather[0].main,
    description: obj.weather[0].description,
    temp: obj.main.temp,
    feels_like: obj.main.feels_like,
    temp_min: obj.main.temp_min,
    temp_max: obj.main.temp_max,
    humidity: obj.main.humidity,
    pressure: obj.main.pressure,
    date: obj.dt_txt ? format(parseISO(obj.dt_txt), "iii, MMM dd") : null
  };
}

async function queryAPI(url) {
  try {
    const request = await fetch(url, { mode: "cors" });
    const result = await request.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getWeather(location, unit) {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const requestUrl = `${baseUrl}${location}&APPID=${process.env.VUE_APP_API_KEY}&units=${unit}`;
  const result = await queryAPI(requestUrl);
  const weatherResult = getWeatherInfo(result);

  return weatherResult;
}

async function getForecasts(location, unit) {
  const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const requestUrl = `${baseUrl}${location}&APPID=${process.env.VUE_APP_API_KEY}&units=${unit}`;
  const result = await queryAPI(requestUrl);
  const forecastResult = result["list"].map(day => {
    return getWeatherInfo(day);
  });

  return forecastResult.slice(0, 8);
}

export { getWeather, getForecasts };
