Vue.component('mis-tareas', {
    props: ['listado'],
    template: '#misTareasTemplate'
})

new Vue({
    el: 'main',
    data: {
        tareas: [
            { titulo : 'Salir a correr'},
            { titulo : 'Recoger la casa'},
            { titulo : 'Aprender Vue.js'},
            { titulo : 'Ir al gimnasio'},
            { titulo : 'Leer cada día'},
        ]
    }
})