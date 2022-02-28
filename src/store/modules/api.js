import axios from "@/plugins/axios"

export default {
    namespaced: true,
    state: {
        vinPageID: 846291,
        vinPrice: null,
        vinInitData: {},
        allCarBrands: [],
        allSelectedModels: [],
        allSelectedYears: [],
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async vinInitCheck(commit, vin) {
            return await axios.post("/vin/check", vin)
        },
        vinPage({ commit, state }) {
            return axios.get("/paystack/page/" + state.vinPageID).then((response) => {
                console.log(response.data);
                commit("setVinPrice", response.data.vinPrice)
            })
        },
        // eslint-disable-next-line no-unused-vars
        async getCarValuationSheet({ commit, state }, vehicle) {
            return await axios.post("/utils/import-duties/", vehicle)
                .then(response => response)
        },
        async getAllCarBrands({ commit }) {
            return await axios.get("/utils/import-duties/brands")
                .then(response => commit("setAllCarBrands", response.data.result))
        },
        async getSelectedModels({ commit }, brand) {
            return await axios.post("/utils/import-duties/own-models", brand)
                .then(response => commit("setSelectedModels", response.data.result))
        },
        async getSelectedYears({ commit }) {
            return await axios.get("/utils/import-duties/own-years")
                .then(response => commit("setSelectedYears", response.data.result))
        },
        // eslint-disable-next-line no-unused-vars
        async submitContact({ commit }, data) {
            return await axios.post("/contact/v1", data)
        }
    },
    mutations: {
        setInitVin(state, data) {
            state.vinInitData = data
        },
        setVinPrice(state, price) {
            state.vinPrice = price
        },
        setAllCarBrands(state, brands) {
            state.allCarBrands = brands
        },
        setSelectedModels(state, models) {
            state.allSelectedModels = models
        },
        setSelectedYears(state, models) {
            state.allSelectedYears = models
        }
    },
    getters: {
        vinPrice: state => state.vinPrice
    },
}