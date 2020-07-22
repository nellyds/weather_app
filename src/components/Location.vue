<template>
  <v-container>
    <CoordinateFetch />
    <GetCityByCoordinate />
  </v-container>
</template>
<script>
import CoordinateFetch from "@/components/Location/CoordinateFetch.vue";
import GetCityByCoordinate from "@/components/Location/GetCityByCoordinate.vue";
export default {
  components: {
    CoordinateFetch,
    GetCityByCoordinate
  }
};
</script>
<style scoped></style>
