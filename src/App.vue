<template>
  <div id="app" class="mx-4">
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
          @reset="handleSectionReset(index)"
        />
        <hr v-if="sections.length - 1 != index" />
      </div>

      <footer class="d-flex flex-column align-items-center">
        <b-input-group prepend="Twoje imię:">
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-button variant="success" @click="saveResults">
              <font-awesome-icon class="mr-2" icon="paper-plane" />
              Wyślij
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </footer>
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
  methods: {
    handleSectionValueChange(sectionNumber, { i, data }) {
      this.sections = this.sections.map((s, si) =>
        si !== sectionNumber
          ? s
          : {
              ...s,
              values: s.values.map((v, vi) => (vi !== i ? v : data)),
            }
      );
    },
    handleSectionReset(sectionNumber) {
      this.sections = this.sections.map((s, si) =>
        si !== sectionNumber
          ? s
          : {
              ...s,
              values: s.values.map(() => 0),
            }
      );
    },
    async saveResults() {
      try {
        await questionnairesCollections.add({
          data: this.sections,
          date: new Date(),
        });
        this.$bvModal.msgBoxOk("Kwestionariusz został zapisany");
      } catch (error) {
        this.$bvModal.msgBoxOk(`Wystąpił błąd: ${error}`);
      }
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

.card-title {
  font-size: 35px;
  font-weight: bolder;
}
</style>
