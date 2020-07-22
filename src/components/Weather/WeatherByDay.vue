<template>
    <div>
        <v-card rounded outlined raised>
            <p>{{date}}</p>
            <p>{{state}}</p>
            <p>{{high}}</p>
            <p>{{low}}</p>
            <p>{{windSpeed}}</p>
            <p>{{windDirection}}</p>
            <p>{{airPressure}}</p>
            <p>{{humidity}}</p>
        </v-card>
    </div>
</template>
<script>
export default {
      props: {
          date: String,
          state: String,
          high: String,
          low: String,
          windSpeed: String,
          windDirection: String,
          airPressure: String,
          humidity: String
      }  
}
</script>
<style scoped>

</style>