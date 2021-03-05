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
            <v-row class="justify-center">
              <h1>How's the weather in x?</h1>
            </v-row>
            <form class="pa-3">
              <v-row class="justify-center">
                <v-radio-group row mandatory>
                  <v-radio label="Cº" value="metric"></v-radio>
                  <v-radio label="Fº" value="imperial"></v-radio>
                </v-radio-group>
              </v-row>
              <v-row class="align-center">
                <v-text-field
                  :rules="[rules.required]"
                  label="Enter your location"
                  id="searchbar"
                  required
                >
                </v-text-field>
                <v-btn class="ml-3">
                  <v-icon>
                    mdi-magnify
                  </v-icon>
                </v-btn>
              </v-row>
            </form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      rules: {
        required: value => !!value || "Required"
      }
    };
  }
};
</script>

<style></style>
