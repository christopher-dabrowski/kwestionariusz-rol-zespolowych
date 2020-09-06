<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <b-button class="mb-3" variant="info" @click="addRandomStuffToFB"
      >Add random stuff!</b-button
    >
    <b-card
      title="Kwestionariusz ról zespołowych"
      sub-title="Na użytek pracy licencjackiej"
      style="max-width: 1000px; margin: auto"
    >
      <div v-for="(section, index) in sections" :key="index">
        <Section
          :title="section.title"
          :subtitle="section.subtitle"
          :points="section.points"
          :questions="section.questions"
          :values="section.values"
          @valueChange="handleSectionValueChange(index, $event)"
        />
        <hr v-if="sections.length - 1 != index" />
      </div>
    </b-card>
  </div>
</template>

<script>
import Section from "./components/Section";
import sectionsData from "./sectionsData";
import { questionnairesCollections } from "./firebase";

export default {
  name: "App",
  components: {
    Section,
    // Option,
  },
  data() {
    const sections = [];
    for (const section of sectionsData) {
      section.values = new Array(section.questions.length).fill(0);
      sections.push(section);
    }

    return {
      sections: sections,
    };
  },

  computed: {},
  methods: {
    handleSectionValueChange(sectionNumber, { i, data }) {
      this.sections = this.sections.map((s, j) => {
        if (j !== sectionNumber) return s;

        return {
          ...s,
          values: s.values.map((v, k) => (k !== i ? v : data)),
        };
      });
    },
    addRandomStuffToFB() {
      // TODO: Remove me!

      questionnairesCollections
        .add({
          name: "John",
          points: 10,
        })
        .then((id) => {
          console.log(id);
        })
        .catch((e) => {
          console.error(e);
        });
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
