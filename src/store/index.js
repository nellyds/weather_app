import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "https://nviar.herokuapp.com/weather",
    coordinates: null,
    metric: true,
    errors: []
  },
  mutations: {
    setCoordinates(state, argument) {
      this.state.coordinates = argument.coordinates;
      console.log("set");
      console.log(this.state.coordinates);
    },
    toggleMetric() {
      this.state.metric = !this.state.metric;
    },
    clearCoordinates() {
      this.state.coordinates = null;
    }
  },
  actions: {},
  modules: {}
});
