<template>
  <div>
    <h3>{{$store.state.count}}</h3>
    <h1>{{$store.state.name}}</h1>
    <div>
      <button @click="$store.commit('add' ,{n: 10})">+</button>
      <button @click="$store.commit({type :'reduce', n: 20})">-</button>
    </div>
  </div>
</template>
<script>
  
  /* eslint-disable */
  export default {
    data() {
      return {
          
      }
    },
    // store
  }

</script>
