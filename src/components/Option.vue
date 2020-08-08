<template>
  <div class="mb-4">
    <label class="mb-0"
      ><b>{{ letter }}</b> {{ text }}</label
    >
    <div class="d-flex align-items-baseline">
      <b-form-input
        :id="'input' + letter"
        class="mr-3"
        :value="value"
        type="range"
        min="0"
        :max="max"
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
    left: Number,
  },
  methods: {
    updateValue(newValue) {
      newValue = Number(newValue);
      console.log(newValue);
      if (this.left > 0 || newValue < this.value) {
        newValue =
          newValue <= this.value + this.left
            ? newValue
            : this.value + this.left;
        this.$emit("input", newValue);
      } else {
        // FIXME: What an ugly workaroud :p
        const oldValue = this.value;
        this.$nextTick(() => {
          this.$emit("input", oldValue);
          const input = document.getElementById("input" + this.letter);
          input.value = oldValue;
        });
      }
    },
  },
};
</script>

<style></style>
