<template>
    <div>
        <h2>Tareas por hacer</h2>
        <ul>
            <li v-for="tarea in tareasPendientes">
                <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>
        <h2>Las tareas finalizadas</h2>
        <ul>
            <li v-for="tarea in tareasFinalizadas">
                <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tareas: [
                    {nombre: 'Aprende Vue.js', completado: false},
                    {nombre: 'Grabar el modulo de Vuex', completado: false},
                    {nombre: 'Responder comentarios (de una vez)', completado: false},
                    {nombre: 'Salir a correr para despejarme', completado: false},
                    {nombre: 'Diseñar el modulo de Firebase', completado: false},
                    {nombre: 'Diseñar el ejericio final', completado: false},
                ],
                finalizadas: [],
            }
        },
        methods: {
            actualizarTarea(tarea) {
                tarea.completado = !tarea.completado;
            },

        },
        computed: {
            tareasPendientes() {
                return this.tareas.filter((tarea) => !tarea.completado)
            },
            tareasFinalizadas() {
                return this.tareas.filter((tarea) => tarea.completado)
            }
        }
    }
</script>

<style>

</style>