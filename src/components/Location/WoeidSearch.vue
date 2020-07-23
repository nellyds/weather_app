<template>
  <div>
    <v-text-field
      class="inputForm"
      v-model="queryString"
      label="City, State, etc."
    />
    <v-btn color="black" outlined @click="searchWoeid">Search </v-btn>
    <div v-if="errors.length > 0">
      <div v-for="(error, i) in errors" v-bind:key="i">
        <v-alert border="left" close-text="Close Alert" dismissable
          >{{ error }}
        </v-alert>
      </div>
      <v-button text @click="clearErrors" data-aos="fade-left"
        >Ok, I get it. Let's forget all about those errors.</v-button
      >
    </div>
    <div v-if="cities.length > 0">
      <div v-for="(city, i) in cities" v-bind:key="i">
        <City v-bind:title="city.title" v-bind:cityWoeid="city.woeid" />
      </div>
    </div>
  </div>
</template>
<script>
import City from "@/components/Location/City.vue";
export default {
  components: {
    City
  },
  data() {
    return {
      queryString: null,
      cities: [],
      city: null,
      errors: []
    };
  },
  methods: {
    searchWoeid: function() {
      // the user sends a request to the api containing a string value that hopefully matches a city with a woeid and forecast data available
      let paramUrl = "location/search/?query=" + this.queryString;
      this.$http
        .post(this.apiUrl, {
          params: paramUrl
        })
        .then(response => {
          this.cities = response.data;

          if (this.cities.length < 1) {
            // if the query returns no results, the user is informed of the error
            this.errors.push("Could not retrieve any results");
          }
          this.queryString = "";
        })
        .catch(() => {
          this.errors.push("An error occured in the search, try again");
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
