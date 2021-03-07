<template>
  <v-app>
    <v-app-bar app color="deep-purple darken-3" dark>
      <v-img
        alt="Logo"
        class="shrink mr-2"
        src="./assets/favicon.png"
        transition="scale-transition"
      />
      <v-toolbar-title>Odin Weather</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="mt-1">
        <v-row class="justify-center">
          <v-col lg="6">
            <v-row class="justify-center pa-1">
              <h1>
                How's the weather in
                {{ weather.place ? weather.place : "your city" }}?
              </h1>
            </v-row>
            <v-form ref="form" @submit.prevent="queryAPI" class="pa-3">
              <v-row class="justify-center">
                <v-radio-group row mandatory v-model="unit">
                  <v-radio label="Cº" value="metric"></v-radio>
                  <v-radio label="Fº" value="imperial"></v-radio>
                </v-radio-group>
              </v-row>
              <v-row class="align-center">
                <v-text-field
                  v-model.trim="location"
                  :rules="[rules.required]"
                  label="Enter a location"
                  id="searchbar"
                  required
                >
                </v-text-field>
                <v-btn rounded color="primary" dark type="submit" class="ml-3">
                  <v-icon>
                    mdi-magnify
                  </v-icon>
                </v-btn>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-row v-if="loading" class="justify-center" no-gutters>
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-row>
      <v-row class="justify-center ma-1" v-if="error">
        <v-col cols="12" md="4">
          <v-alert color="red" outlined type="error"
            >Sorry, I couldn't find your location 😥</v-alert
          >
        </v-col>
      </v-row>
      <v-row class="justify-center" v-if="weather && forecasts" no-gutters>
        <v-col cols="12" lg="4">
          <Weather :weatherResult="weather" :unit="unit"></Weather>
        </v-col>
        <v-col cols="12" lg="4">
          <Forecasts :forecastsResult="forecasts" :unit="unit"></Forecasts>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Weather from "./components/Weather";
import Forecasts from "./components/Forecasts";

import { getWeather, getForecasts } from "./lib/weatherAPI";

export default {
  name: "App",

  components: { Weather, Forecasts },

  data() {
    return {
      rules: {
        required: value => !!value || "Required"
      },
      unit: "",
      location: "",
      weather: "",
      forecasts: "",
      loading: false,
      error: false
    };
  },

  methods: {
    queryAPI: async function() {
      this.loading = true;
      try {
        this.error = false;
        this.weather = await this.getWeatherInfo();
        this.forecasts = await this.getForecastInfo();
      } catch (error) {
        this.error = true;
      } finally {
        this.$refs.form.reset();
        this.loading = false;
      }
    },
    getWeatherInfo: async function() {
      const response = await getWeather(this.location, this.unit);
      return response;
    },
    getForecastInfo: async function() {
      const response = await getForecasts(this.location, this.unit);
      return response;
    }
  }
};
</script>

<style></style>
