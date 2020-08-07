<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <b-card
      title="Kwestionariusz ról zespołowych"
      sub-title="Super fajna ankieta"
      style="max-width: 1000px; margin: auto"
    >
      <form style="text-align: left">
        <h2>Cześć I</h2>
        <h4>Sądzę, że osobiście wnoszę do grupy...</h4>
        <p>
          Do przydziału: <b>{{ left }}</b> punktów
        </p>

        <Option
          letter="A"
          text="Wydaje mi się, że szybko dostrzegam i umiem wykorzystać
            nowe możliwości"
          v-model="a"
          :max="left"
        />

        <Option
          letter="B"
          text="Mogę dobrze pracować z różnymi ludźmi"
          v-model="b"
          :max="left"
        />

        <Option
          letter="C"
          text='"Produkowanie" pomysłów to moja naturalna zdolność'
          v-model="c"
          :max="left"
        />
      </form>
    </b-card>
  </div>
</template>

<script>
import Option from "./components/Option";

export default {
  name: "App",
  components: {
    Option,
  },
  data() {
    return {
      total: 10,
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
    };
  },
  computed: {
    spend() {
      let values = [
        this.a,
        this.b,
        this.c,
        this.d,
        this.e,
        this.f,
        this.g,
        this.h,
      ];

      const x = values.map(Number).reduce((a, b) => a + b, 0);
      console.log("Wydano: " + x);
      return x;
    },
    left() {
      console.log("Zostało: " + (this.total - this.spend));
      return this.total - this.spend;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
