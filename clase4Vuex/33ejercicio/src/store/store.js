import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        datos: [
            {
                nombre: 'Luis Eduardo',
                apellidos: 'González Morales',
                profesion: 'Developer',
                ciudad: 'Ciudad de México',
            },
            
        ]
        
    }
})