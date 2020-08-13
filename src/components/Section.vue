<template>
  <form style="text-align: left">
    <!-- TODO: Clean everything -->
    <h2>Część I</h2>
    <h4>Sądzę, że osobiście wnoszę do grupy...</h4>
    <p>
      Do przydziału:
      <b>{{ left }}</b> punktów
    </p>
    <b-button class="mb-2" variant="primary" @click="reset">Reset</b-button>

    <!-- TODO: Generate options -->
    <!-- <Option
      letter="A"
      text="Wydaje mi się, że szybko dostrzegam i umiem wykorzystać
            nowe możliwości"
      v-model="a"
      :max="10"
      :left="left"
    /> -->
   
    <Option v-for="(question, index) in questions"
    :key="index"
    :letter="letters[index]"
    :text='question'
    :max="10"
    :left="10"
    ></Option>
  </form>
</template>

<script>
import Option from './Option';
export default {
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
    letters() {
      // TODO: Implement me
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
