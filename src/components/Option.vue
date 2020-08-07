<template>
  <div>
    <label
      ><b>{{ letter }}</b> {{ text }}</label
    >
    <div class="d-flex align-items-baseline">
      <b-form-input
        class="mr-3"
        :value="value"
        type="range"
        min="0"
        :max="left"
        @input="updateValue"
      ></b-form-input>
      <div class="mt-2">
        <b>{{ value }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    letter: String,
    text: String,
    max: Number,
    value: Number,
  },
  computed: {
    left() {
      return Number(this.max) + Number(this.value);
    },
  },
  methods: {
    updateValue(newValue) {
      this.$emit("input", Number(newValue));
    },
  },
};
</script>

<style></style>
