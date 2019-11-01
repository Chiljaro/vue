Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: '#alertaTemplate',
})

new Vue({
    el: 'main',
})