Vue.component('usuarios', {
    template: '#usuariosTemplate',
    mounted(){
        this.nomina()
    },
    data() {
        return {
            usuarios: [],
            busqueda: '',
        }
    },
    methods: {
        nomina() {
            console.log('ejucutando')
            
            axios.get('https://randomuser.me/api/?results=500')
            .then((respuesta) => {
                const listado = respuesta.data.results.map((usuario) => {
                    return {
                        nombre: `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`,
                        correo: usuario.email,
                        foto: usuario.picture.medium,
                    }
                })
                this.usuarios = listado
            })
        }
    },
    computed: {
        filtrarUsuarios() {
            return this.usuarios.filter((usuario) => {
                return usuario.nombre.includes(this.busqueda)
            })
        }
    },
})

Vue.component('usuario', {
    props: ['datos'],
    template: '#usuarioTemplate'
})

new Vue({
    el: 'main',
})

