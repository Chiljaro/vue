<template>
    <div>
        <h1>{{ tareasCompletadas }} Tareas completadad</h1>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed:  mapGetters(['tareasCompletadas'])
    }
</script>

<style scoped>

</style>