<template>
  <v-container data-aos="fade-left" class="robot" data-aos-duration="1000">
    <div class="introConversation ">
      <p
        data-aos="fade-left"
        data-aos-duration="1000"
        @click="changeMessage"
        class="bubble speech"
        v-if="show1"
      >
        Hello, my name is weather-bot and, theoretically, I can tell you about
        the next five days of weather.
      </p>
      <p
        data-aos="fade-left"
        data-aos-duration="1000"
        @click="changeMessage"
        class="bubble speech"
        v-if="show2"
      >
        How do I know? Science and such.
      </p>
      <p
        data-aos="fade-left"
        data-aos-duration="1000"
        @click="changeMessage"
        class="bubble speech"
        v-if="show3"
      >
        Ready?
      </p>
    </div>
    <img
      @click="$vuetify.goTo('#location')"
      class="hvr-bob"
      src="@/assets/robot.png"
    />
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      show1: true,
      show2: false,
      show3: false
    };
  },
  methods: {
    changeMessage: function() {
      if (this.show1 === true) {
        this.show1 = false;
        this.show2 = true;
      } else if (this.show2 === true) {
        this.show2 = false;
        this.show3 = true;
      } else {
        this.show3 = false;
        this.show1 = true;
      }
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 415px) {
  .robot {
    width: 95%;
  }
  img {
    width: 300px;
  }
  .introConversation {
    height: 200px;
    margin-top: 25px;
    margin-left: 15px;
  }
}
@media screen and (min-width: 416px) {
  .robot {
    width: 400px;
  }
  .introConversation {
    height: 200px;
    margin-top: 25px;
    margin-left: 15px;
  }
}
</style>
