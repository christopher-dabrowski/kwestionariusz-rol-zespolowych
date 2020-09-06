<template>
  <div class="mb-4">
    <label class="mb-0"
      ><b>{{ letter }}</b> {{ text }}</label
    >
    <div class="d-flex align-items-baseline">
      <input
        ref="input"
        class="mr-3 custom-range"
        :value="value"
        type="range"
        min="0"
        :max="max"
        @input="updateValue"
      />
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
    updateValue() {
      let newValue = Number(this.$refs.input.value);
      // console.log(newValue);
      if (this.left > 0 || newValue < this.value) {
        newValue =
          newValue <= this.value + this.left
            ? newValue
            : this.value + this.left;
        this.$emit("change", newValue);
      } else {
        const oldValue = this.value;
        this.$nextTick(() => {
          // this.$emit("change", oldValue); // TODO: Try to remove
          this.$refs.input.value = oldValue;
        });
      }
    },
  },
};
</script>

<style></style>
