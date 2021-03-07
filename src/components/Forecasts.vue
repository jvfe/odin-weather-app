<template>
  <v-container>
    <v-sheet class="pa-3" elevation="10" rounded>
      <v-container>
        <h2>Forecasts for the next week</h2>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "Forecasts",
  props: ["forecastsResult", "unit"]
};
</script>
