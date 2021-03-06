<template>
  <v-container>
    <v-sheet class="pa-2" elevation="10" rounded>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-row class="align-center">
              <v-icon class="ma-3 mr-1" large>{{ weatherIcon }}</v-icon>
              <h4 class="description">{{ weatherResult.description }}</h4>
            </v-row>
            <h1>{{ weatherResult.place }}</h1>
            <h1>
              {{ weatherResult.temp }}<sup>{{ unitSymbol }}</sup>
            </h1>
            <p>Feels like {{ weatherResult.feels_like }} {{ unitSymbol }}</p>
          </v-col>
          <v-divider inset vertical class="hidden-sm-only"></v-divider>
          <v-divider class="hidden-md-and-up"></v-divider>
          <v-col cols="12" md="5">
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
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script>
import { getUnitSymbol, getWeatherIcon } from "../lib/utils";

export default {
  name: "Weather",
  props: ["weatherResult", "unit"],
  data() {
    return {
      weatherIcon: getWeatherIcon(this.weatherResult.main)
    };
  },
  computed: {
    unitSymbol() {
      return getUnitSymbol(this.unit);
    }
  }
};
</script>

<style scoped>
.description {
  text-transform: uppercase;
}
</style>
