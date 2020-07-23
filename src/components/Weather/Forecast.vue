<template>
  <div>
    <v-btn outlined text @click="getForecast">Get Forecast </v-btn>
    <LoadingAnimation v-if="gettingForecast" />
    <div v-if="errors.length > 0">
      <div v-for="(error, i) in errors" v-bind:key="i">
        <v-alert
          data-aos="fade-left"
          border="left"
          close-text="Close Alert"
          dismissable
          >{{ error }}
        </v-alert>
      </div>
      <v-btn outlined color="black" @click="clearErrors"
        >I did nothing wrong and you saw nothing wrong.</v-btn
      >
    </div>
    <v-row>
      <div v-if="forecastResults.length > 0">
        <div
          v-for="forecast in forecastResults"
          v-bind:key="forecast.applicable_date"
        >
          <v-col>
            <WeatherByDay
              data-aos="fade-left"
              data-aos-duration="1000"
              v-bind:date="forecast.applicable_date"
              v-bind:state="forecast.weather_state_name"
              v-bind:high="forecast.max_temp"
              v-bind:low="forecast.min_temp"
              v-bind:windSpeed="forecast.wind_speed"
              v-bind:windDirection="forecast.wind_direction_compass"
              v-bind:airPressure="forecast.air_pressure"
              v-bind:humidity="forecast.humidity"
            />
          </v-col>
        </div>
        <v-btn outlined color="black" @click="$vuetify.goTo('#robot')"
          >Back to the top!</v-btn
        >
      </div>
    </v-row>
  </div>
</template>
<script>
import WeatherByDay from "@/components/Weather/WeatherByDay.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
export default {
  components: {
    WeatherByDay,
    LoadingAnimation
  },
  data() {
    return {
      forecastResults: [],
      gettingForecast: null,
      errors: []
    };
  },
  props: {
    woeid: String,
    title: String
  },
  methods: {
    getForecast: function() {
      // the Forecast component retrieves a seven day weather forecast based on the woeid prop passed to it from the City component
      this.gettingForecast = true;
      let paramUrl = "location/" + this.woeid;
      this.$http
        .post(this.apiUrl, {
          params: paramUrl
        })
        .then(response => {
          this.forecastResults = response.data.consolidated_weather;
          this.gettingForecast = false;
        })
        .catch(() => {
          this.errors.push("Could not retrieve forecasts");
        });
    },
    clearErrors: function() {
      this.errors = [];
    }
  },
  computed: {
    apiUrl: function() {
      return this.$store.state.apiUrl;
    }
  }
};
</script>
<style scoped></style>
