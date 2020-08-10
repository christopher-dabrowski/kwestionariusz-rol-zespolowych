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
        <h2>Część I</h2>
        <h4>Sądzę, że osobiście wnoszę do grupy...</h4>
        <p>
          Do przydziału: <b>{{ left }}</b> punktów
        </p>
        <b-button class="mb-2" variant="primary" @click="reset">Reset</b-button>

        <Option
          letter="A"
          text="Wydaje mi się, że szybko dostrzegam i umiem wykorzystać
            nowe możliwości"
          v-model="a"
          :max="10"
          :left="left"
        />
        <Option
          letter="B"
          text="Mogę dobrze pracować z różnymi ludźmi"
          v-model="b"
          :max="10"
          :left="left"
        />
        <Option
          letter="C"
          text='"Produkowanie" pomysłów to moja naturalna zdolność'
          v-model="c"
          :max="10"
          :left="left"
        />
        <Option
          letter="D"
          text='Moja siła twi w tym, że potrafię z ludzi "wyciągnąć" to, co mają w sobie najlepszego, aby przyczynili się do osiągnięcia celów i zadań grupowych'
          v-model="d"
          :max="10"
          :left="left"
        />
        <Option
          letter="E"
          text="Moja główna umięjętność polega na doprowadzaniu spraw do końca i wiąże się z efektywnością"
          v-model="e"
          :max="10"
          :left="left"
        />
        <Option
          letter="F"
          text="Jestem w stanie przez jakiś czas zaakceptować niepopularność mojej osoby, jeśli prowadzi to do wartościowych wyników"
          v-model="f"
          :max="10"
          :left="left"
        />
        <Option
          letter="G"
          text="Zwykle wyczuwam, co jest realistyczne i prawdopodobne, jeśli chodzi o osiągnięcie sukcesu"
          v-model="g"
          :max="10"
          :left="left"
        />
        <Option
          letter="H"
          text="Zwykle mogę zaproponować jakieś alternatywne wyjście bez uprzedzeń i niechęci"
          v-model="h"
          :max="10"
          :left="left"
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
