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

        <div>
          <label
            ><b>A</b> Wydaje mi się, że szybko dostrzegam i umiem wykorzystać
            nowe możliwości</label
          >
          <div class="d-flex align-items-baseline">
            <b-form-input
              class="mr-3"
              v-model="a"
              type="range"
              min="0"
              :max="left"
            ></b-form-input>
            <div class="mt-2">
              <b>{{ a }}</b>
            </div>
          </div>
        </div>

        <div>
          <label><b>B</b> Mogę dobrze pracować z różnymi ludźmi</label>
          <div class="d-flex align-items-baseline">
            <b-form-input
              class="mr-3"
              v-model="b"
              type="range"
              min="0"
              :max="left"
            ></b-form-input>
            <div class="mt-2">
              <b>{{ b }}</b>
            </div>
          </div>
        </div>
      </form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "App",
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

      return values.map(Number).reduce((a, b) => a + b, 0);
    },
    left() {
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
