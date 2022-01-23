<template>
  <div class="main">
    <div class="table-container">
      <button class="button" @click="isPopupOpen = true">
        Добавить сотрудника
      </button>
      <div class="table-top">
        <span class="table-title">Имя</span>
        <span class="table-title">Телефон</span>
      </div>
      <BaseTable v-bind:workers="workers" />
    </div>
    <BasePopup
      v-if="isPopupOpen"
      v-bind:workers="workers"
      @close="isPopupOpen = false"
      @submitForm="submitForm"
    />
  </div>
</template>

<script>
import BaseTable from '@/components/BaseTable'
import BasePopup from '@/components/BasePopup'

export default {
  name: 'home',
  data () {
    return {
      workers: [
        { id: 1, name: 'Марина', phone: '+79411232142', boss: '0', level: 1, isBoss: false },
        { id: 2, name: 'Петр', phone: '+79411232142', boss: '0', level: 1, isBoss: false },
        { id: 3, name: 'Алексей', phone: '+79411232142', boss: '0', level: 1, isBoss: false },
        { id: 4, name: 'Иван', phone: '+79411232142', boss: '0', level: 1, isBoss: false },
        { id: 5, name: 'Борис', phone: '+79411232142', boss: '0', level: 1, isBoss: false }
      ],
      isPopupOpen: false
    }
  },
  components: {
    BaseTable,
    BasePopup
  },
  mounted () {
    if (localStorage.getItem('workers')) {
      try {
        this.workers = JSON.parse(localStorage.getItem('workers'))
      } catch (e) {
        localStorage.removeItem('workers')
      }
    }
  },
  computed: {
  },
  methods: {
    submitForm (data) {
      if (data.boss) {
        let bossLevel = this.workers.find(worker => worker.id === data.boss).level
        data.level = bossLevel + 1
        let bossIndex = this.workers.map(function (worker) { return worker.id }).indexOf(data.boss)
        this.workers[bossIndex]['isBoss'] = true
        this.workers.splice(bossIndex + 1, 0, { id: this.workers.length + 1, name: data.name, phone: data.phone, boss: data.boss, level: data.level, isBoss: false })
      } else {
        data.level = 1
        data.boss = '0'
        this.workers.push({ id: this.workers.length + 1, name: data.name, phone: data.phone, boss: data.boss, level: data.level, isBoss: false })
      }
      this.saveWorkers()
    },
    saveWorkers () {
      const parsed = JSON.stringify(this.workers)
      localStorage.setItem('workers', parsed)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.table-container {
  width: calc(50% - 20px);
  box-sizing: border-box;
  padding: 20px;
}

.table-top {
  width: 100%;
  display: flex;
  border-bottom: 0.800000011920929px dashed #7f7f7f;
}

.table-top span {
  width: 50%;
  text-align: center;
  padding-top: 21px;
  padding-bottom: 17px;
  font: 400 15px/18px 'IBM Plex Sans', sans-serif;
  color: #666666;
}

.table-top span:first-child {
  width: 50%;
  text-align: left;
  padding-left: 20px;
  box-sizing: border-box;
}
.button {
  display: flex;
  font: 400 15px/18px 'IBM Plex Sans', sans-serif;
  padding: 5px 10px;
  border-radius: 4px;
  color: #707070;
  background-color: #f7f6f5;
  border: 1px solid #f7f6f5;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: auto;
  transition: color 0.3s;
}
.button:hover {
  border: 1px solid #8d7cc9;
  background: #8d7cc9;
  color: #ffffff;
}
</style>
