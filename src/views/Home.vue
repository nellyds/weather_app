<template>
  <div class="home">
    <Intro />
    <Location />
  </div>
</template>

<script>
// @ is an alias to /src
import Location from "@/components/Location.vue";
import Intro from "@/components/Intro.vue";
export default {
  name: "Home",
  data(){
    return{
      showIntro: true,
      showLocation: false
    }
  },
  components: {
    Location,
    Intro
  }
};
</script>
<style scoped>

</style>
