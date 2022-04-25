<template>
  <div class="home">
    <div class="content">
      <h1>Home page</h1>
      <p>Your number of cookies is: {{ counterStore.counter }}</p>
    </div>
    <b-field label="Cookie count">
      <b-input placeholder="Cookies..."
        type="number"
        icon="cookie"
        v-model.number="counterStore.counter"
        @blur="handleInputBlur()">
      </b-input>
    </b-field>
    <b-button
      icon-left="cookie-remove"
      type="is-danger is-light"
      size="is-large"
      @click="eatAllCookies()"
    >
      Eat all cookies
    </b-button>
  </div>
</template>

<script>
import CounterStore from '@/stores/CounterStore.js'

export default {
  name: 'HomeView',
  data() { return {
    counterStore: CounterStore
  }},
  methods: {
    handleInputBlur() {
      if (!this.counterStore.counter)
        this.counterStore.counter = 0
    },
    eatAllCookies() {
      if (this.counterStore.counter == 0) {
        this.$buefy.snackbar.open({
          message: "There are no cookies!",
          type: "is-danger"
        })
        return
      }

      this.counterStore.counter = 0
      this.$buefy.snackbar.open("All cookies have been eaten")
    }
  }
}
</script>
