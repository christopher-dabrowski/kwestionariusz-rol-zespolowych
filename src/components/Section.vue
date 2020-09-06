<template>
  <form style="text-align: left">
    <h2>{{ title }}</h2>
    <h4>{{ subtitle }}</h4>
    <p>
      Do przydziału:
      <b>{{ remaining }}</b> punktów
    </p>
    <b-button class="mb-2" variant="primary" @click="reset">Reset</b-button>

    <Option
      v-for="(question, index) in questions"
      :key="index"
      :letter="letters[index]"
      :text="question"
      :max="10"
      :left="remaining"
      :value="values[index]"
      @change="handleInputChange(index, $event)"
    ></Option>
  </form>
</template>

<script>
import Option from "./Option";
export default {
  methods: {
    reset() {
      const values = new Array(this.section.questions.length).fill(0);
      this.values = values;
    },
    handleInputChange(i, data) {
      const tmp = this.values.slice();
      tmp[i] = data;
      this.values = tmp;
    },
  },
  components: {
    Option,
  },
  props: {
    section: Object,
  },
  data() {
    const values = new Array(this.section.questions.length).fill(0);
    return {
      values: values,
      title: this.section.title,
      subtitle: this.section.subtitle,
      points: this.section.points,
      questions: this.section.questions,
    };
  },
  computed: {
    remaining() {
      const spent = this.values.reduce((v, x) => v + x, 0);
      return this.points - spent;
    },
    letters() {
      const answers = [];
      for (let i = 0; i < this.questions.length; i++) {
        const letterCode = "A".charCodeAt(0) + i;
        answers.push(String.fromCharCode(letterCode));
      }
      return answers;
    },
  },
};
</script>

<style></style>
