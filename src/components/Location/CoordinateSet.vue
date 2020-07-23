<template>
  <div>
    <v-form class="inputForm" ref="form" v-model="valid" lazy-validation>
      <v-text-field required :rules="latRules" v-model="lat" label="latitude" />
      <v-text-field
        required
        :rules="lonRules"
        v-model="lon"
        label="longitude"
      />
    </v-form>
    <v-btn color="black" outlined @click="setCoordinate">Submit</v-btn>

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
      <v-btn color="black" outlined @click="clearErrors"
        >I did nothing wrong and you saw nothing wrong.</v-btn
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lat: null,
      lon: null,
      valid: true,
      errors: [],
      latRules: [
        v => !!v || "latitude is required",
        v =>
          /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(
            v
          ) || "Invalid range"
      ],
      lonRules: [
        v => !!v || "longitude is required",
        v =>
          /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(
            v
          ) || "Invalid range"
      ]
    };
  },
  methods: {
    setCoordinate: function() {
      if (this.valid === true) {
        let setCoordinates = [this.lat, this.lon];
        this.$store.commit({
          type: "setCoordinates",
          coordinates: setCoordinates
        });
      } else {
        this.errors.push("Invalid coordinate ranges.");
      }
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
