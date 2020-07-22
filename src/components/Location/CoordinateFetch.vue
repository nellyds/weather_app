<template>
  <v-container>
    <v-button @click="getCoordinates" text>Get coordinates</v-button>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      gettingLocation: null
    };
  },
  methods: {
    getCoordinates: function() {
      if (!("geolocation" in navigator && this.coordinates == null)) {
        this.errorStr = "Geolocation is not available.";
        return;
      }
      this.gettingLocation = true;
      navigator.geolocation.getCurrentPosition(
        pos => {
          var foundCoordinates = [pos.coords.latitude, pos.coords.longitude];
          this.$store.commit({
            type: "setCoordinates",
            coordinates: foundCoordinates
          });
          this.gettingLocation = false;
          window.alert(this.$store.state.coordinates);
        },
        err => {
          this.gettingLocation = false;
          this.errorStr = err.message;
        }
      );
    }
  }
};
</script>
<style scoped></style>
