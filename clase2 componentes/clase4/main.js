Vue.component('candidato', {
    // props: ['nombre', 'correo', 'imagen'],
    props: {
        nombre: {
            type:String,
            required: true,
        },
        correo: String,
        imagen: String,
        location: {
            type: Object,
            default() {
                return {
                    ciudad: 'Mexico'
                }
            }
        }
    },
    template: '#candidatoTemplate'
})

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: []
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100')
            .then((respuesta) => {
                console.log(respuesta);
                
                this.candidatos = respuesta.data.results;
            })
        }
    },
})