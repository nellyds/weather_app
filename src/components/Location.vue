<template>
  <v-container class="location">
    <v-row>
      <v-col v-if="$vuetify.breakpoint.smAndUp" cols="4" />
      <v-col>
        <p>How do you want to search?</p>
        <v-btn outlined color="black" @click="toggleShowCoordinateSearch"
          >By coordinates</v-btn
        >
        <v-btn outlined color="black" @click="toggleShowCitySearch"
          >By city</v-btn
        >
        <div v-if="showCoordinateSearch">
          <CoordinateFetch />
          <CoordinateSet />
          <GetCityByCoordinate v-if="coordinates != null" />
        </div>
        <div v-if="showCitySearch">
          <WoeidSearch />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import WoeidSearch from "@/components/Location/WoeidSearch.vue";
import CoordinateFetch from "@/components/Location/CoordinateFetch.vue";
import GetCityByCoordinate from "@/components/Location/GetCityByCoordinate.vue";
import CoordinateSet from "@/components/Location/CoordinateSet.vue";
export default {
  data() {
    return {
      showCoordinateSearch: null,
      showCitySearch: null
    };
  },
  components: {
    CoordinateFetch,
    GetCityByCoordinate,
    WoeidSearch,
    CoordinateSet
  },
  methods: {
    toggleShowCitySearch: function() {
      this.showCitySearch = true;
      this.showCoordinateSearch = false;
    },
    toggleShowCoordinateSearch: function() {
      this.showCitySearch = false;
      this.showCoordinateSearch = true;
    }
  },
  computed: {
    coordinates: function() {
      return this.$store.state.coordinates;
    }
  }
};
</script>
<style scoped>
.location {
  min-height: 100vh;
}
</style>
