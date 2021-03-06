function getUnitSymbol(value) {
  const unitMap = new Map([
    ["metric", "ºC"],
    ["imperial", "ºF"]
  ]);

  console.log(unitMap.get(value), value);

  return unitMap.get(value);
}

function getWeatherIcon(value) {
  const weatherSymbols = new Map([
    ["Clouds", "mdi-weather-cloudy"],
    ["Clear", "mdi-weather-sunny"],
    ["Atmosphere", "mdi-weather-fog"],
    ["Snow", "mdi-weather-snowy-heavy"],
    ["Rain", "mdi-weather-pouring"],
    ["Drizzle", "mdi-weather-rainy"],
    ["Thunderstorm", "mdi-weather-lightning-rainy"]
  ]);

  return weatherSymbols.get(value);
}

export { getUnitSymbol, getWeatherIcon };
