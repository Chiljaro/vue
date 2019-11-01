Vue.component('contrasena', {
    props: ['contrasena'],
    template: `<input :value='contrasena' @input='comprobarContrasena($event.target.value)' ref='pass'>`,
    methods: {
        comprobarContrasena(contrasena){
            if (this.noValidad.includes(contrasena)) {
                this.$refs.pass.value = contrasena = ''
            }
            this.$emit('input', contrasena)
        }
    },
    data() {
        return {
            noValidad: ['abc', 'admin', '123456', 'root'],
        }
    }
})

new Vue({
    el: 'main',
    data: {
        contrasena: 'es3Es653!*&__',
    }
})