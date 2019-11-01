<template>
  <!-- <contador :cantidad="cantidad"
            @aumentar="cantidad++"
            @reducir="cantidad--"></contador> -->
  <contador></contador>
</template>

<script>
import Contador from './components/Contador.vue'
export default {
  components: { Contador },
  data() {
    return {
      cantidad: 0,
    }
  }
 
}
</script>

<style lang="scss">

</style>
