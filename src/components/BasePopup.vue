<template>
  <div class="popup">
    <div class="popup-overlay" @click="close"></div>
    <div class="popup-container">
      <BasePopupButtonClose @close="close" />
      <div class="tx">
        <div class="h3">Добавление пользователя</div>
      </div>
      <BasePopupForm
        v-bind:workers="workers"
        @submitForm="submitForm"
        @close="close"
      />
    </div>
  </div>
</template>

<script>
import BasePopupButtonClose from '@/components/BasePopupButtonClose'
import BasePopupForm from '@/components/BasePopupForm'

export default {
  props: {
    workers: {
      required: true,
      type: Array
    }
  },
  components: {
    BasePopupButtonClose,
    BasePopupForm
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submitForm (data) {
      this.$emit('submitForm', data)
    }
  }
}
</script>

<style scoped>
.popup {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  overflow: hidden;
}
.popup-overlay {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 80;
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(0px);
  opacity: 1;
  transition: opacity 0.6s ease 0s, bottom 0s ease 0s;
}
.popup-container {
  max-width: 400px;
  position: relative;
  z-index: 100;
  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 20px;
  margin: auto;
  margin-right: 10%;
}
.popup-container .h3 {
  font: normal 600 18px/22px 'Montserrat', sans-serif;
  color: #121212;
  text-transform: uppercase;
  margin-bottom: 40px;
}
</style>
