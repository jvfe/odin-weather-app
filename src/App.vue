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
                {{ currentQuery.place ? currentQuery.place : "your city" }}?
              </h1>
            </v-row>
            <v-form ref="form" @submit.prevent="getWeatherInfo" class="pa-3">
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
      <v-row class="justify-center" v-if="currentQuery" no-gutters>
        <v-col cols="12" lg="4">
          <Weather :weatherResult="currentQuery" :unit="unit"></Weather>
        </v-col>
        <v-col cols="12" lg="4">
          <Forecasts></Forecasts>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Weather from "./components/Weather";
import Forecasts from "./components/Forecasts";

import getWeather from "./lib/weatherAPI";

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
      currentQuery: ""
    };
  },

  methods: {
    getWeatherInfo: async function() {
      const response = await getWeather(this.location, this.unit);
      this.currentQuery = response;
      this.$refs.form.reset();
      return response;
    }
  }
};
</script>

<style></style>
