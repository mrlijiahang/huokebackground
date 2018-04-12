<template>
  <div>
    <h3>{{$store.state.count}}</h3>
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
  </div>
</template>
<script>
  import store from '../store/index.js'
  /* eslint-disable */
  export default {
    data() {
      return {
          
      }
    },
    store
  }

</script>
