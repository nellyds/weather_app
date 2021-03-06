<template>
  <div>
    <v-card class="weatherCard" min-width="365" rounded outlined raised>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-subtitle>
            <span style="font-weight: bold; font-size: 1.2em;">
              {{ day }}
            </span>
            {{ date }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <p class="expect">Expect:</p>
      <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-black"></div>
        <p class="state">{{ state }}</p>
      </div>
      <!-- the temperature is displayed in celcius or frenheit, based on the users preference -->
      <div v-if="!metric">
        <p class="expect">With:</p>
        <div class="reveal-holder">
          <div data-aos="reveal-right" class="reveal-block-black"></div>
          <p class="temp">A high of : {{ highFaren }}&deg; F</p>
          <p class="temp">& a low of: {{ lowFaren }}&deg; F</p>
        </div>
      </div>
      <div v-if="metric">
        <p class="expect">With:</p>
        <div class="reveal-holder">
          <div data-aos="reveal-right" class="reveal-block-black"></div>
          <p class="temp">A high of : {{ Math.floor(high) }}&deg; C</p>
          <p class="temp">& a low of: {{ Math.floor(low) }}&deg; C</p>
        </div>
      </div>
      <p class="expect">With wind:</p>
      <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-black"></div>
        <v-list-item>
          <v-list-item-icon>
            <v-icon style="color:black">mdi-weather-windy</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle style="color:black"
            >{{ Math.floor(windSpeed) }} km/h from
            {{ windDirection }}</v-list-item-subtitle
          >
        </v-list-item>
      </div>
      <p class="expect">And Humidy of:</p>
      <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-black"></div>

        <v-list-item>
          <v-list-item-icon>
            <v-icon style="color:black">mdi-water</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ humidity }} %</v-list-item-subtitle>
        </v-list-item>
      </div>
      <p class="expect">And Air Pressure of:</p>
      <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-black"></div>

        <v-list-item>
          <v-list-item-icon>
            <v-icon style="color:black">mdi-cloud-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ airPressure }} PSI</v-list-item-subtitle>
        </v-list-item>
      </div>
      <div class="toggle">
        <v-btn color="black" outlined @click="toggleMetric">
          <!-- the user can toggle between metric and imperial measurements for temperature -->
          <p>C&deg; / F&deg;</p>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    date: String,
    state: String,
    high: Number,
    low: Number,
    windSpeed: Number,
    windDirection: String,
    airPressure: Number,
    humidity: Number
  },
  data() {
    return {
      // the initial temperature information is given in celcius, so the farenheit values must be derived from them
      highFaren: Math.floor(this.high * 1.8 + 32),
      lowFaren: Math.floor(this.low * 1.8 + 32),
      day: null
    };
  },
  methods: {
    toggleMetric: function() {
      this.$store.commit({
        type: "toggleMetric"
      });
    }
  },
  mounted() {
    var dt = new Date(this.date);
    let dayOfWeek = dt.getDay();
    switch (dayOfWeek) {
      case 0:
        this.day = "Sunday";
        break;
      case 1:
        this.day = "Monday";
        break;
      case 2:
        this.day = "Tuesday";
        break;
      case 3:
        this.day = "Wednesday";
        break;
      case 4:
        this.day = "Thursday";
        break;
      case 5:
        this.day = "Friday";
        break;
      case 6:
        this.day = "Saturday";
    }
  },
  computed: {
    metric: function() {
      return this.$store.state.metric;
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 416px) {
  .temp {
    font-weight: 1.7em;
    font-size: 1.2em;
    margin-right: 15px;
    text-align: right;
  }
  .state {
    font-weight: 500;
    font-size: 1.5em;
    text-align: right;
    margin-right: 15px;
  }
  .expect {
    text-align: left;
    margin-left: 15px;
  }
  .toggle {
    margin-right: 10px;
    padding: 2px;
  }
}
@media screen and (min-width: 416px) {
  .temp {
    font-weight: 1.7em;
    font-size: 1.2em;
    text-align: right;
    margin-right: 15px;
  }
  .state {
    font-weight: 500;
    font-size: 1.5em;
    text-align: right;
    margin-right: 15px;
  }
  .expect {
    text-align: left;
    margin-left: 15px;
  }
  .toggle {
    margin-right: 10px;
    padding: 2px;
  }
}
</style>
