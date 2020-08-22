<template>
  <form style="text-align: left">
    <h2>{{title}}</h2>
    <h4>{{subtitle}}</h4>
    <p>
      Do przydziału: 
      <b>{{ remaining }}</b> punktów
    </p>
    <b-button class="mb-2" variant="primary" @click="reset">Reset</b-button>
   
    <Option v-for="(question, index) in questions"
    :key="index"
    :letter="letters[index]"
    :text='question'
    :max="10"
    :left="remaining"
    v-model="values[index]"
    ></Option>
  </form>
</template>

<script>
import Option from './Option';
export default {
  methods: {
    reset() {
      const values = new Array(this.questions.length).fill(0);
      this.values = values;
    }
  },
  components: {
    Option
  },
  props: {
    title: String,
    subtitle: String,
    points: Number,
    questions: Array
  },
  data() {
    const values = new Array(this.questions.length).fill(0);
    return {
      values: values
    };
  },
  computed: {
    remaining() {
      const spent =  this.values.reduce((v, x) => v + x, 0);
      return this.points - spent;
    },
    letters() {
      const answers = [];
      for (let i = 0; i < this.questions.length; i++) {
        const letterCode = 'A'.charCodeAt(0) + i;
        answers.push(String.fromCharCode(letterCode))
      }
      return answers;
    }
  }
};
</script>

<style></style>
