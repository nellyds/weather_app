<template>
  <v-container>
    <v-btn color="black" outlined @click="searchCitiesByCoordinates"
      >Find the city closest to you</v-btn
    >
    <LoadingAnimation v-if="gettingCities" />
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
      <v-button text @click="clearErrors"
        >I did nothing wrong and you saw nothing wrong.</v-button
      >
    </div>
    <div v-if="cities.length > 0">
      <div v-for="(city, i) in cities" v-bind:key="i">
        <div class="reveal-holder">
          <div data-aos="reveal-right" class="reveal-block-black"></div>
          <City v-bind:title="city.title" v-bind:cityWoeid="city.woeid" />
        </div>
      </div>
      <v-btn outlined color="black" @click="clearCities">Start Over</v-btn>
    </div>
  </v-container>
</template>
<script>
import City from "@/components/Location/City.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
export default {
  components: {
    City,
    LoadingAnimation
  },
  data() {
    return {
      cities: [],
      city: null,
      errors: [],
      gettingCities: null
    };
  },
  methods: {
    //
    searchCitiesByCoordinates: function() {
      // since forecast information is organized by city, the geographic coordinates alone are not sufficient to retrieve weather data.  Using the coordinates either manually submitted or found using internal devices, the coordinates are used to query for the closest cities with available forecast data
      this.gettingCities = true;
      let lat = this.coordinates[0];
      let lon = this.coordinates[1];
      let paramUrl = "location/search/?lattlong=" + lat + "," + lon;
      this.$http
        .post(this.apiUrl, {
          params: paramUrl
        })
        .then(response => {
          this.cities = response.data;
          if (this.cities.length < 1) {
            this.errors.push("Could not retrieve any results");
          }
          this.gettingCities = false;
        })
        .catch(() => {
          this.errors.push("Could not retrieve any results");
          this.gettingCities = false;
        });
    },
    clearErrors: function() {
      this.errors = [];
    },
    clearCities: function() {
      this.cities = [];
      this.$store.commit({
        type: "clearCoordinates"
      });
      this.$vuetify.goTo("#robot");
    }
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
