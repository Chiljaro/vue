<template>
  <div>
    <h1>Hola mi nombre es {{ datos[0].nombre }}</h1>
  </div>
  
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: mapState({
    datos: (state) => state.datos,
  })
}
</script> 

<style>

</style>
