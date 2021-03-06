<template>
  <v-container>
    <v-sheet class="pa-2" elevation="10" rounded>
      <v-row>
        <v-col cols="7" md="6">
          <v-row>
            <v-col>
              <v-row class="align-center">
                <v-icon class="ma-3 mr-1" large>{{
                  weatherSymbols.get(weatherResult.main)
                }}</v-icon>
                <h4 class="description">{{ weatherResult.description }}</h4>
              </v-row>
              <h1>{{ weatherResult.place }}</h1>
              <h1>
                {{ weatherResult.temp }}<sup>{{ unitSymbol }}</sup>
              </h1>
              <p>Feels like {{ weatherResult.feels_like }} {{ unitSymbol }}</p>
            </v-col>
          </v-row>
        </v-col>
        <v-divider inset vertical></v-divider>
        <v-col cols="2" md="5">
          <p>
            <b>Max Temperature:</b> {{ weatherResult.temp_max }}
            {{ unitSymbol }}
          </p>
          <p>
            <b>Min Temperature:</b> {{ weatherResult.temp_min }}
            {{ unitSymbol }}
          </p>
          <p><b>Humidity:</b> {{ weatherResult.humidity }}%</p>
          <p><b>Pressure:</b> {{ weatherResult.pressure }} hPa</p>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "Weather",
  props: ["weatherResult", "unit"],
  data() {
    return {
      unitMap: new Map([
        ["metric", "ºC"],
        ["imperial", "ºF"]
      ]),
      weatherSymbols: new Map([
        ["Clouds", "mdi-weather-cloudy"],
        ["Clear", "mdi-weather-sunny"],
        ["Atmosphere", "mdi-weather-fog"],
        ["Snow", "mdi-weather-snowy-heavy"],
        ["Rain", "mdi-weather-pouring"],
        ["Drizzle", "mdi-weather-rainy"],
        ["Thunderstorm", "mdi-weather-lightning-rainy"]
      ])
    };
  },
  computed: {
    unitSymbol() {
      return this.unitMap.get(this.unit);
    }
  }
};
</script>

<style scoped>
.description {
  text-transform: uppercase;
}
</style>
