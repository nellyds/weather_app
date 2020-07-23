<template>
  <div class="home">
    <Title />
    <Intro id="robot" />
    <Location id="location" />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Location from "@/components/Location.vue";
import Intro from "@/components/Intro.vue";
export default {
  name: "Home",
  data() {
    return {
      showIntro: true,
      showLocation: false
    };
  },
  components: {
    Location,
    Intro,
    Title
  }
};
</script>
<style scoped></style>
