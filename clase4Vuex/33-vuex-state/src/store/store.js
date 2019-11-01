import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        nombre: 'Juan Andres',
        apellidos: 'Ñunes Charros',
        profesion: 'Developer',
        ciudad: 'Valencia',
    }
})