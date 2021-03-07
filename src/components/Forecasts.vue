<template>
  <v-container>
    <v-sheet class="pa-3" elevation="10" rounded>
      <v-container>
        <h2>Forecasts for the next week</h2>
        <v-expansion-panels>
          <v-expansion-panel v-for="(forecast, i) of forecastsResult" :key="i">
            <v-expansion-panel-header>
              <v-row>
                <v-col>
                  {{ forecast.date_str }}
                </v-col>
                <v-col>
                  <v-icon>
                    {{ getIcon(forecast.main) }}
                  </v-icon>

                  {{ forecast.temp }}<sup>{{ unitSymbol }}</sup>
                </v-col>
                <v-col>
                  <p class="text-uppercase caption">
                    {{ forecast.description }}
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <p class="caption">
                    <b>Max Temperature:</b> {{ forecast.temp_max }}
                    {{ unitSymbol }}
                  </p>
                  <p class="caption">
                    <b>Min Temperature:</b> {{ forecast.temp_min }}
                    {{ unitSymbol }}
                  </p>
                </v-col>
                <v-col>
                  <p class="caption">
                    <b>Humidity:</b> {{ forecast.humidity }}%
                  </p>
                  <p class="caption">
                    <b>Pressure:</b> {{ forecast.pressure }} hPa
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel></v-expansion-panels
        >
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script>
import { getUnitSymbol, getWeatherIcon } from "../lib/utils";

export default {
  name: "Forecasts",
  props: ["forecastsResult", "unit"],
  data() {
    return {
      unitSymbol: getUnitSymbol(this.unit)
    };
  },
  methods: {
    getIcon: function(value) {
      return getWeatherIcon(value);
    }
  }
};
</script>
