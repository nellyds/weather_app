<template>
  <v-container>
    <p>How do you want to search?</p>
    <div v-if="showCoordinateSearch">
      <CoordinateFetch />
      <GetCityByCoordinate />
    </div>
    <div v-if="showCitySearch">
      <WoeidSearch />
    </div>
  </v-container>
</template>
<script>
import WoeidSearch from "@/components/Location/WoeidSearch.vue";
import CoordinateFetch from "@/components/Location/CoordinateFetch.vue";
import GetCityByCoordinate from "@/components/Location/GetCityByCoordinate.vue";
export default {
  data(){
    return{
      showCoordinateSearch: null,
      showCitySearch: true
    }
  },
  components: {
    CoordinateFetch,
    GetCityByCoordinate,
    WoeidSearch
  }
};
</script>
<style scoped></style>
