import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
  },
  mutations: {
    setList(state,newList){
      state.list=newList
    },
  },
  actions: {
    getList(context){
      axios.get('/data').then(({data})=>{
        console.log(data);
        context.state.list=data
      })
    }
  },
  modules: {
  }
})
