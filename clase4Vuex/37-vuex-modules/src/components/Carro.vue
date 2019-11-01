<template>
    <div>
        <h2>Carro de la compra</h2>
        <h3>Total compra: {{ totalCompra.toFixed(2) }} $</h3>
        <ul>
            <li v-for="(producto, indice) in carro" >
                {{ producto.nombre }}
                <a @click="eliminarProducto(indice)">X</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'
    export default {
        computed: {
            ...mapState(['carro']),
            ...mapGetters(['totalCompra']),
        },
        methods: mapMutations(['eliminarProducto'])
    }
</script>

<style scoped>

</style>