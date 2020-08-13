<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <b-card
      title="Kwestionariusz ról zespołowych"
      sub-title="Na użytek pracy licencjackiej"
      style="max-width: 1000px; margin: auto"
    >
      
      <Section
      title = "Część I"
      subtitle = "Sądzę, że osobiście wnoszę do grupy..."
      :points = "10"
      :questions = "questions"
      />
      <hr/>
      <Section
      title = "Część II"
      subtitle = "Lorem ipsum"
      :points = "10"
      :questions = "questions"
      />
    </b-card>
  </div>
</template>

<script>
import Section from "./components/Section";
// import Option from "./components/Option";

export default {
  name: "App",
  components: {
    Section,
    // Option,
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
      questions: ['Wydaje mi się, że szybko dostrzegam i umiem wykorzystać nowe możliwości', 'Mogę dobrze pracować z różnymi ludźmi', '"Produkowanie" pomysłów to moja naturalna zdolność'], 
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
  methods: {
    reset() {
      this.a = 0;
      this.b = 0;
      this.c = 0;
      this.d = 0;
      this.e = 0;
      this.f = 0;
      this.g = 0;
      this.h = 0;
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
  margin-bottom: 80px;
}
</style>
