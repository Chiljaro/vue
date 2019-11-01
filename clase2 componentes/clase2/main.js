Vue.component('elegir-ganador', {
    props: ['listado'],
    template: '#elegirGanadorTemplate',
    methods: {
        elegirGanador() {
            let cantidad = this.participantes.length,
                indice = Math.floor((Math.random() * cantidad))
                console.log(indice);
                
                this.ganador = this.participantes[indice]
        }
    },
    data() {
        return {
            ganador: false,
            participantes: this.listado
        }
    }
})

new Vue({
    el: 'main',
    data: {
        personas: [
            'Juan', 'Alicia', 'Pedro', 'Marcos'
        ]
    }
})