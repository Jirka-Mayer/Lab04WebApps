<template>
  <div>
    <div class="content">
      <h1>Decrementing button page</h1>
      <p>Press the following button to eat one cookie:</p>
    </div>
    <b-button icon-left="cookie-minus" size="is-large" @click="counterStore.counter--">
      You have {{ counterStore.counter }} cookies
    </b-button>
  </div>
</template>

<script>
import CounterStore from '@/stores/CounterStore.js'

export default {
  name: 'DecrementView',
  data() { return {
    counterStore: CounterStore
  }}
}
</script>
