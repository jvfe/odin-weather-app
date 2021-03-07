import { format, parseISO, isSameDay } from "date-fns";

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
    date: obj.dt_txt ? parseISO(obj.dt_txt) : null,
    date_str: obj.dt_txt ? format(parseISO(obj.dt_txt), "iii, MMM dd") : null
  };
}

async function queryAPI(url) {
  try {
    const request = await fetch(url, { mode: "cors" });
    const result = await request.json();
    if (result.cod != 200) {
      throw Error("Couldn't find location");
    }
    return result;
  } catch (error) {
    throw Error(error);
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

  const differentDatesForecasts = forecastResult.filter((forecast, index) => {
    if (index >= 1) {
      return isSameDay(forecast.date, forecastResult[index - 1].date) === false;
    }
  });

  return differentDatesForecasts;
}

export { getWeather, getForecasts };
