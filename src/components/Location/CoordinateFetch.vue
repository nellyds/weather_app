<template>
  <v-container>
    <v-btn color="black" outlined @click="getCoordinates" text
      >Use your location</v-btn
    >
    <LoadingAnimation v-if="gettingLocation" />
    <div v-if="errors.length > 0">
      <div v-for="(error, i) in errors" v-bind:key="i">
        <v-alert border="left" close-text="Close Alert" dismissable
          >{{ error }}
        </v-alert>
      </div>
      <v-btn color="black" outlined @click="clearErrors"
        >Not my fault, but let's forget about that error anyway.</v-btn
      >
    </div>
  </v-container>
</template>
<script>
import LoadingAnimation from "@/components/LoadingAnimation.vue";
export default {
  components: {
    LoadingAnimation
  },

  data() {
    return {
      gettingLocation: null,
      errors: []
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
        },
        err => {
          this.gettingLocation = false;
          this.errors.push("Where on earth are you that I can't locate you?");
          this.errorStr = err.message;
        }
      );
    }
  }
};
</script>
<style scoped></style>
