<template>
  <div class="city">
    <p>{{ title }}</p>
    <!-- the Forecast component takes the woeid of the city to make a request to the MetaWeather api -->
    <Forecast v-bind:woeid="this.cityWoeid"> </Forecast>
  </div>
</template>
<script>
import Forecast from "@/components/Weather/Forecast.vue";
export default {
  components: {
    Forecast
  },
  props: {
    title: String,
    cityWoeid: String
  }
};
</script>
<style scoped>
@media screen and (max-width: 415px) {
  .city {
    text-align: right;
    margin-right: 15px;
    width: 95%;
  }
}
@media screen and (min-width: 416px) {
  .city {
    text-align: right;
    margin-right: 15px;
    width: 385px;
  }
}
</style>
