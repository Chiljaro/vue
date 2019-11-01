const vm = new Vue({
    el: 'main',
    data: {
        mensaje: 'Juegos',
        minimo: 5,
        busqueda: '',
        // conectado: false,
        // edad: 44 ,
        // laborables: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
       
        // persona: {
        //     nombre: 'Juan',
        //     profesion: 'dev',
        //     ciudad: 'Valencia'
        // },
        // nuevaTarea: null,
        // tareas: [
        //     {
        //         titulo: 'Aprender Vue.js',
        //         prioridad: true,
        //         antiguedad: 23
        //     },
        //     {
        //         titulo: 'Aprender ES6',
        //         prioridad: false,
        //         antiguedad: 135
        //     },
        //     {
        //         titulo: 'Publicar todos los dias',
        //         prioridad: true,
        //         antiguedad: 378
        //     },
        // ],
        juegos: [
            {
                titulo: 'Battlefield 1',
                genero: 'FPS',
                puntuacion: 9
            },
            {
                titulo: 'Civilization',
                genero: 'Estrategia',
                puntuacion: 10
            },
            {
                titulo: 'Resident Evil 7',
                genero: 'Survival Horror',
                puntuacion: 7
            },
        ],
        nuevoJuesgo: []
    },
    // methods: {
    //     agregarTarea() {
    //         //this hace referencia a la instancia Vue
    //         this.tareas.unshift(this.nuevaTarea)
    //         this.nuevaTarea = ''
    //     }
    // },
    computed: {
        // mensajeAlReves() {
        //     return this.mensaje.split('').reverse().join('');
        // }, 
        // tareasConPrioridad() {
        //     return this.tareas.filter((tarea) => tarea.prioridad)
        // },
        // tareasPorAntiguedad() {
        //     return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad)
        // }
        mejoresJuegos() {
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo)
        },
        buscarJuego() {
            return this.juegos.filter((juego) => juego.titulo.toUpperCase().includes(this.busqueda.toUpperCase()))
        }
    },
})