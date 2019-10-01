<template>
  <div>
    <slot
      v-if="err"
      name="error"
      :err="err"
      :vm="vm"
      :info="info"
    >Something went wrong</slot>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: "error-boundary",
  props: {
    stopPropagation: Boolean
  },
  data() {
    return {
      err: false,
      vm: null,
      info: null
    };
  },
  errorCaptured(err, vm, info) {
    this.err = true;
    this.vm = vm;
    this.info = info;
    return !this.stopPropagation;
  }
};
</script>
