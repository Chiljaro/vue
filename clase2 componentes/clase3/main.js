Vue.component('autor', {
    props: ['nombre'],
    mounted() {
        // Las props son accesibles desde this
        //console.log(this.nombre)
    },
    template: `<div>
                    <h1>{{ nombreMinusculas }}</h1>
                    <h1>{{ nombre }}</h1>
                </div>`,
    computed: {
        nombreMinusculas() {
            return this.nombre.toLowerCase()
        }
    },
})

new Vue({
    el: 'main',
    data: {
        autor: 'Juan Andres'
    }
})