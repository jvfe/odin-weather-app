<template>
  <v-container>
    <v-sheet class="pa-3 blue-grey darken-4" elevation="10" rounded>
      <v-container>
        <v-col>
          <h2>Forecasts for the next week</h2>
          <v-divider></v-divider>
        </v-col>
        <v-expansion-panels>
          <v-expansion-panel
            class="purple darken-4"
            v-for="(forecast, i) of forecastsResult"
            :key="i"
          >
            <v-expansion-panel-header>
              <v-row>
                <v-col>
                  <h4>{{ forecast.date_str }}</h4>
                </v-col>
                <v-col>
                  <v-icon large>
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
  computed: {
    unitSymbol() {
      return getUnitSymbol(this.unit);
    }
  },
  methods: {
    getIcon: function(value) {
      return getWeatherIcon(value);
    }
  }
};
</script>
