<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-toolbar-title color="white">Weather Bot</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
  data: () => ({})
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,900;1,400&display=swap");
body {
  font-family: "Poppins";
}
</style>
