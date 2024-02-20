import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'


const url = 'https://book-management-api-ero5.onrender.com'

const store = createStore({
  state() {
    return {
      login: false,
      bookDetails: [],
      newBookCreted: false
    }
  },
  getters: {
    getCounter(state) {
      return state.newBookCreted
    },
  },
  mutations: {
    loginState(state) {
      state.login = true
    },
    loginStateFal(state) {
      state.login = false
    },
    async getData(state) {
      await axios
        .get(url + '/getBookdet', { withCredentials: true })
        .then((resp) => {
         
          if (resp.status === 201) {
            state.bookDetails = resp.data.data.book
          }
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    },
    async patchData(state,data) {

   console.log(data);
      await axios.patch(url + `/UpdateBook/${data.id}`,{
      
        title: data.tit,
        author: data.auth ,
        description: data.desc,
        publishyear: data.pub 
      }, { withCredentials: true })
        .then((resp) => {
        
          if (resp.status === 201) {
           alert('success')
           router.push('/table')
          }
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    },
    async createBook(state,payload) {
      await axios
        .post(url + '/Addbook',payload, { withCredentials: true })
        .then((resp) => {
          if (resp.status === 200) {
            alert('data created')
           router.push('/table');
          }
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    },async deleteData(state,payload) {
      await axios
        .delete(url + `/DeleteBook/${payload}`, { withCredentials: true })
        .then((resp) => {
         
       
          if (resp.status === 201) {
            router.push('/table')
          }
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    },
   
  },
  actions: {
    loginState(context) {
      context.commit('loginState')
    },
    loginStateFal(context) {
      context.commit('loginStateFal')
    },
    getData(context) {
      context.commit('getData')
    },
    patchData(context,data) {
      context.commit('patchData',data)
    },
    createBook(context,payload) {
      context.commit('createBook',payload)
    },
    
    deleteData(context,payload) {
      context.commit('deleteData',payload)
    }
  }
})
export default store
