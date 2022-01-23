<template>
  <table>
    <tr v-for="worker of workers" :key="worker.id">
      <td v-bind:style="{ width: levelStyle(worker.level) + '%' }">
        <span class="plus" v-if="worker.level > 1 || worker.isBoss === true"
          >+ </span
        >{{ worker.name }}
      </td>
      <td>{{ worker.phone }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    workers: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      width: 50
    }
  },
  components: {},
  methods: {
    levelStyle (workerLevel) {
      let requireWidth
      if (workerLevel > 1) {
        requireWidth = this.width - (5 * workerLevel)
      } else {
        requireWidth = this.width
      }
      return requireWidth
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

table {
  width: 100%;
  font-family: 'IBM Plex Sans';
  border-collapse: collapse;
}
tr {
  display: flex;
}
td {
  font: 400 15px/18px 'IBM Plex Sans', sans-serif;
  border: 3px solid #fff;
  padding-top: 21px;
  padding-bottom: 17px;
  background: #f9f9f9;
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
}
td:first-child {
  display: inline-block;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  margin-left: auto;
  padding-left: 20px;
}
.plus {
  position: absolute;
  left: 7px;
}
</style>
