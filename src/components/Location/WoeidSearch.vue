<template>
  <div>
    City search
    <v-text-field v-model="queryString" label="City, State, etc." />
    <v-button text @click="searchWoeid">Search </v-button>
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
      cityNames: [],
      errors: []
    };
  },
  methods: {
    searchWoeid: function() {
      let paramUrl = "location/search/?query=" + this.queryString;
      this.$http
        .post(this.apiUrl, {
          params: paramUrl
        })
        .then(response => {
          this.cities = response.data;
          for (var i = 0; i < this.cities.length; i++) {
            this.cityNames.push(this.cities[i].title);
          }
          if (this.cities.length < 1) {
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
