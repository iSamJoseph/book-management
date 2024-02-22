import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
import { useToast } from "vue-toastification";


const toast = useToast();

const url = 'https://book-managementapi.onrender.com'

const store = createStore({
  state() {
    return {
      login: false,
      bookDetails: [],
      newBookCreted: false,
      loader: false
    }
  },
  getters: {
    getCounter(state) {
      return state.newBookCreted
    },
    getLoader(state) {
      return state.loader
    }
  },
  mutations: {
    loginState(state) {
      state.login = true
    },
    loginStateFal(state) {
      state.login = false
    },
    async getData(state) {
      state.loader = true
      await axios
        .get(url + '/getBookdet', { withCredentials: true })
        .then((resp) => {
          if (resp.status === 201) {
            state.bookDetails = resp.data.data.book
            state.loader = false;
           
          }
        })
        .catch((err) => {
          //console.log(err)
          state.loader = false;
          toast.error("Try Later Data Fetching Failed", {
            timeout: 2000
          });
          //alert(err.response.data.message)
          toast.error(err.response.data.message, {
            timeout: 2000
          });
        })
    },
    async patchData(state, data) {
      state.loader = true;

      await axios
        .patch(
          url + `/UpdateBook/${data.id}`,
          {
            title: data.tit,
            author: data.auth,
            description: data.desc,
            publishyear: data.pub
          },
          { withCredentials: true }
        )
        .then((resp) => {
          if (resp.status === 201) {
            state.loader = false;

            toast.success("Book Data Updated", {
              timeout: 2000
            });
            //alert('success')
            router.push('/table')
          }
        })
        .catch((err) => {
          state.loader = false;
          //console.log(err)
          toast.error("Book Data Updating Failed Try Later", {
            timeout: 2000
          });
          //alert(err.response.data.message)
          toast.error(err.response.data.message, {
            timeout: 2000
          });
        })
    },
    async createBook(state, payload) {
      state.loader = true
      await axios
        .post(url + '/Addbook', payload, { withCredentials: true })
        .then((resp) => {
          state.loader = false;
          if (resp.status === 200) {
            toast.success("New Book Created", {
              timeout: 2000
            });
            //alert('data created')
            router.push('/table')
          }
        })
        .catch((err) => {
          state.loader = false;
          //console.log(err)
          toast.error("Unable to Create New Book Try Again Later", {
            timeout: 2000
          });
          toast.error(err.response.data.message, {
            timeout: 2000
          });
          //alert(err.response.data.message)
        })
    },
    async deleteData(state, payload) {
      state.loader = true
      await axios
        .delete(url + `/DeleteBook/${payload}`, { withCredentials: true })
        .then((resp) => {
          if (resp.status === 201) {
            state.loader = false;
            toast.success("One Book Data Deleted", {
              timeout: 2000
            });
            router.push('/table')
          }
        })
        .catch((err) => {
          state.loader = false;
          //console.log(err)
          toast.error("Data Deleting Failed Try Again Later", {
            timeout: 2000
          });
          toast.error(err.response.data.message, {
            timeout: 2000
          });
          //alert(err.response.data.message)
        })
    }
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
    patchData(context, data) {
      context.commit('patchData', data)
    },
    createBook(context, payload) {
      context.commit('createBook', payload)
    },

    deleteData(context, payload) {
      context.commit('deleteData', payload)
    }
  }
})
export default store
