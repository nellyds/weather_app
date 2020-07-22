<template>
  <div class="home">
    <Location />
  </div>
</template>

<script>
// @ is an alias to /src
import Location from "@/components/Location.vue";

export default {
  name: "Home",
  components: {
    Location
  }
};
</script>
