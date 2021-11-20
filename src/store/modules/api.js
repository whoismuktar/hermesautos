import axios from "axios"

export default {
    namespaced: true,
    state: {
        vinPageID: 846291,
        vinPrice: null
    },
    actions: {
        vinPage({ commit, state }) {
            return axios.get("/paystack/page/" + state.vinPageID).then((response) => {
                console.log(response.data);
                commit("setVinPrice", response.data.vinPrice)
            })
        }
    },
    mutations: {
        setVinPrice(state, price) {
            state.vinPrice = price
        }
    },
    getters: {
        vinPrice: state => state.vinPrice
    },
}