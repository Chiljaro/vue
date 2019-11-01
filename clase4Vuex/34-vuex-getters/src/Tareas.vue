<template>

  <main>
    <tareas-restantes></tareas-restantes>
    <ul>
      <li v-for="tarea in tareas">{{ tarea.nombre}}</li>
    </ul>
  </main>

</template>

<script>
import TareasRestantes from './components/TareasRestantes.vue'
import {mapState} from 'vuex'
export default {
  components: {TareasRestantes},
  computed: mapState(['tareas'])
}
</script>

<style>

</style>
