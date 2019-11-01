const eventBus = new Vue();

Vue.component('listado-productos',{
    props: ['productos'],
    template: '#listadoProductosTemplate',
    methods: {
        anadirProducto(precio) {
            eventBus.$emit('anadir', precio)
        },
        eliminarProducto(precio) {
            eventBus.$emit('eliminar', precio)
        }
    },
})

Vue.component('carrito-compras', {
    props: [],
    template: '#carritoTemplate',
    data() {
        return {
            cantidadProductos: 0,
            total: 0,
        }
    },
    created() {
        eventBus.$on('anadir', (precio) => {
            if (this.total >= 0){
                this.total += precio
                this.cantidadProductos++
            }
        })
        eventBus.$on('eliminar', (precio) => {
            if (this.total > 0) {
                this.total -= precio
                this.cantidadProductos--
            }
        })

    },
})


new Vue({
    el: 'main',
    data: {
        productos: [
            {nombre: 'Libro ES6', precio: 390},
            {nombre: 'Portatil', precio: 13000},
            {nombre: 'Café', precio: 20},
            {nombre: 'Auriculares', precio: 800},
            {nombre: 'Moleskine', precio: 190},

        ]
    }
})