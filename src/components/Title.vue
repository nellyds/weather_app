<template>
    <v-container align="center">
        <v-row>
            <v-col v-if="$vuetify.breakpoint.smAndUp" cols="4"/>
            <v-col >
              <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-black"></div>
<img @click="$vuetify.goTo('#location')" src="@/assets/logo.jpg" />
        </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style scoped>
img{
    width: 300px;


}

</style>