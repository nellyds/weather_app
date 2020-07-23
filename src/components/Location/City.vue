<template>
  <div class="city">
    <p>{{ title }}</p>
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
    width: 415px;
  }
}
</style>
