<template>
    <div>
        <h1>Tareas asignadas</h1>
        <ul>
            <li v-for="tarea in tareasAsignadas">
                <a href="#" @click="actualizarTarea(tarea)">{{ tarea.nombre }}</a>
            </li>
        </ul>
        <hr>
        <h1>Tareas finalizadas</h1>
            <li v-for="tarea in tareasFinalizadas">
                <a href="#" @click="actualizarTarea(tarea)">{{ tarea.nombre }}</a>
            </li>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                tareas: [
                    {nombre: 'Terminar Curso Vue', completado: false,},
                    {nombre: 'Terminar curso de Javascript', completado: false,},
                    {nombre: 'Terminar Curso Angular', completado: false,},
                    {nombre: 'Terminar Curso React', completado: false,},
                    {nombre: 'Bajar de peso', completado: false,},
                    {nombre: 'Hacer Ejercicio', completado: false,},
                    {nombre: 'Entrar al nuevo trabajo', completado: false,},
                ],
                finalizadas: [],
            }
        },
        methods: {
            actualizarTarea(tarea) {
                tarea.completado = !tarea.completado
            }
        },
        computed: {
            tareasAsignadas() {
                return this.tareas.filter((tarea) => !tarea.completado)
            },
            tareasFinalizadas() {
                return this.tareas.filter((tarea) => tarea.completado)
            }
        },
    }
</script>

<style scoped>
    li a {
        color: red;
    }
</style>