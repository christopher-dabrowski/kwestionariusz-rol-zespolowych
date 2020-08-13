<template>
  <form style="text-align: left">
    <!-- TODO: Clean everything -->
    <h2>Część I</h2>
    <h4>Sądzę, że osobiście wnoszę do grupy...</h4>
    <p>
      Do przydziału: <b>{{ left }}</b> punktów
    </p>
    <b-button class="mb-2" variant="primary" @click="reset">Reset</b-button>

    <!-- TODO: Generate options -->
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
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    points: Number,
    questions: Array,
  },
  data() {
    const values = new Array(this.questions.length).fill(0);
    return {
      values: values,
    };
  },
  computed: {
    letters() {
      // TODO: Implement me

      return [];
    },
  },
};
</script>

<style></style>
