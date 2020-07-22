<template>
  <v-container>
    <p>
      <v-button text @click="searchCitiesByCoordinates">Search cities</v-button>
    </p>

    <div v-if="cities.length > 0">
      <div v-for="(city, i) in cities" v-bind:key="i">
        <City v-bind:title="city.title" v-bind:cityWoeid="city.woeid" />
      </div>
    </div>
  </v-container>
</template>
<script>
import City from "@/components/Location/City.vue";
export default {
  components: {
    City
  },
  data() {
    return {
      cities: [],
      city: null,
      cityNames: []
    };
  },
  methods: {
    searchCitiesByCoordinates: function() {
      let lat = this.coordinates[0];
      let lon = this.coordinates[1];
      let paramUrl = "location/search/?lattlong=" + lat + "," + lon;
      this.$http
        .post(this.apiUrl, {
          params: paramUrl
        })
        .then(response => {
          this.cities = response.data;
          for (var i = 0; i < this.cities.length; i++) {
            this.cityNames.push(this.cities[i].title);
          }
        });
    },
    submitCity: function() {}
  },
  computed: {
    coordinates: function() {
      return this.$store.state.coordinates;
    },
    apiUrl: function() {
      return this.$store.state.apiUrl;
    }
  }
};
</script>
<style scoped></style>
