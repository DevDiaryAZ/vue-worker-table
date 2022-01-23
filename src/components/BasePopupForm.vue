<template>
  <div class="form-wrapper">
    <form
      @submit.prevent="
        submitForm()
        close()
      "
    >
      <div class="ln">
        <label class="input-wrapper">
          <span class="placeholder">Имя</span>
          <input
            class="text"
            id="name"
            :class="$v.form.name.$error ? 'is-invalid' : ''"
            type="text"
            required=""
            v-model.trim="$v.form.name.$model"
          />
          <p
            v-if="$v.form.name.$dirty && !$v.form.name.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </p>
          <p
            v-if="$v.form.name.$dirty && !$v.form.name.minLength"
            class="invalid-feedback"
          >
            Здесь должно быть больше 5-и символов
          </p>
        </label>
      </div>
      <div class="ln">
        <label class="input-wrapper">
          <span class="placeholder">Телефон</span>
          <input
            class="text"
            :class="$v.form.phone.$error ? 'is-invalid' : ''"
            id="phone"
            required=""
            type="tel"
            placeholder="+79999999999"
            v-model.trim="$v.form.phone.$model"
          />
          <p
            v-if="$v.form.phone.$dirty && !$v.form.phone.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </p>
          <p
            v-if="$v.form.phone.$dirty && !$v.form.phone.minLength"
            class="invalid-feedback"
          >
            Здесь должно быть больше 5-и символов
          </p></label
        >
      </div>
      <div class="ln">
        <label class="input-wrapper">
          <span class="placeholder">Начальник</span>
          <select id="boss" v-model="form.boss">
            <option
              v-for="(worker, index) in workers"
              :value="worker.id"
              :key="index"
            >
              {{ worker.name }}
            </option>
          </select>
        </label>
      </div>
      <div class="btn-wrapper">
        <button class="button submit">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default ({
  mixins: [validationMixin],
  props: {
    workers: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      form: {
        name: '',
        phone: '',
        boss: null
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4)
      },
      phone: {
        required,
        minLength: minLength(4)
      }
    }
  },
  methods: {
    submitForm () {
      this.$emit('submitForm', { name: this.form.name, phone: this.form.phone, boss: this.form.boss })
      this.form.name = ''
      this.form.phone = ''
      this.form.boss = ''
    },
    close () {
      this.$emit('close')
    }
  }
})
</script>

<style scoped>
.popup-container .ln {
  margin-bottom: 35px;
}
.form-wrapper .input-wrapper {
  width: 100%;
  max-width: 400px;
  position: relative;
  display: inline-block;
  cursor: text;
  text-align: left;
}
.form-wrapper .input-wrapper input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  outline: none;
  font: normal normal 16px/130% 'IBM Plex Sans', sans-serif;
  color: #121212;
}
.form-wrapper .input-wrapper select {
  width: 100%;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  font: normal normal 16px/130% 'IBM Plex Sans', sans-serif;
  color: #121212;
}
.form-wrapper .input-wrapper select:focus-visible {
  outline: none;
}
.form-wrapper .input-wrapper .placeholder {
  font: normal normal 16px/130% 'IBM Plex Sans', sans-serif;
  letter-spacing: 0;
  color: #636363;
}
.popup-container .button {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px 50px;
  margin: 40px 0 20px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: inherit;
  color: #000;
  transition: color 0.3s;
  cursor: pointer;
}
.popup-container .button:hover {
  color: #482ab4;
  border-color: #482ab4;
}
.is-invalid {
  border: 2px solid red;
}
.invalid-feedback {
  color: red;
}
</style>
