<template>
  <button class="close-button" @click="close">
    <span class="line line1"></span>
    <span class="line line2"></span>
  </button>
</template>
А
<script>
export default {
  components: {
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.close-button {
  display: inline-block;
  width: 38px;
  height: 38px;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}
.close-button:hover .line {
  background-color: #482ab4;
}
.line {
  position: absolute;
  height: 2px;
  width: 19px;
  background-color: #000;
  top: 16px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.line1 {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}
.line2 {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
}
</style>
