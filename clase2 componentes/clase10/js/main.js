Vue.component('lista-tareas', {
    template: '#listaTareasTemplate',
    data() {
        return {
            tareas: [
                'Finalizar seccion Componentes',
                'Iniciar workflow con Vue Cli y webpack',
                'Terminar de estudiar la documentación de Vuex',
                'Seguir jugando con Vue Router y grabar el primer vídeo',
            ]
        }
    }
})

Vue.component('tarea', {
    props: ['tarea'],
    template: `<li> {{ tarea }}</li>`

})

Vue.component('contacto', {
    template: '#contactoTemplate',
})

Vue.component('bio', {
    template: `<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, natus.</p></div>`
})

new Vue({
    el: 'main',
    data: {
        seleccionado: 'lista-tareas'
    }
})