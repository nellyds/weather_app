<template>
  <div>
    <v-button text @click="getForecast">Get Forecast </v-button>
    <div v-if="forecastResults.length > 0">
        <div v-for="forecast in forecastResults" v-bind:key="forecast.applicable_date">
            <WeatherByDay v-bind:date="forecast.applicable_date" 
        v-bind:city=title
        v-bind:state="forecast.weather_state_name"
        v-bind:high="forecast.max_temp"
        v-bind:low="forecast.min_temp"
        v-bind:windSpeed ="forecast.wind_speed"
        v-bind:windDirection="forecast.wind_direction_compass"
        v-bind:airPressure="forecast.air_pressure" 
        v-bind:humidity="forecast.humidity" />
        </div>
    </div>
  </div>
</template>
<script>
import WeatherByDay from "@/components/Weather/WeatherByDay.vue";
export default {
    components: {
        WeatherByDay
    },
    data(){
        return{
            forecastResults: []
        }
    },
  props: {
    woeid: String,
    title: String
  },
  methods: {
    getForecast: function() {
      let paramUrl = "location/" + this.woeid;
      window.alert(paramUrl);
      this.$http
        .post(this.apiUrl, {
          params: paramUrl
        })
        .then(response => {
          this.forecastResults = response.data.consolidated_weather
        });
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
