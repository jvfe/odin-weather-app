async function getWeather(location, unit) {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const requestUrl = `${baseUrl}${location}&APPID=${process.env.VUE_APP_API_KEY}&units=${unit}`;

  try {
    const request = await fetch(requestUrl);
    const result = await request.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default getWeather;
