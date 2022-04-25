<template>
  <div>
    <div class="content">
      <h1>Incrementing button page</h1>
      <p>Press the following button to bake one cookie:</p>
    </div>
    <b-button icon-left="cookie-plus" size="is-large" @click="counterStore.counter++">
      You have {{ counterStore.counter }} cookies
    </b-button>
  </div>
</template>

<script>
import CounterStore from '@/stores/CounterStore.js'

export default {
  name: 'IncrementView',
  data() { return {
    counterStore: CounterStore
  }}
}
</script>
