Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: '#alertaTemplate',
    methods: {
        ocultarWidget() {
            this.$emit('ocultar')
        }
    },
})

new Vue({
    el: 'main',
    data: {
        mostrarExito: false,
        mostrarError: false,
        mostrarAdvertencia: false,
    }
})