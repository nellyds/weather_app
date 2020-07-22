<template>
  <div>
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
  },

};
</script>
<style scoped></style>
