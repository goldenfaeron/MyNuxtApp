import axios from "axios"
export const state = () => ({

    name: "Bupa Healthcare",

    //TOKENS 

    masterToken: 'd2e55cc7bc1ba0b4f7d66c43afb30a',
    bupaPracticesToken: '5f75965a9da5820efd6b82f8c4293a',

    //All collections
    collectionsToken: 'ffcadb7b92232dd64da8cda5fa895d',

    // For getting thumbnails
    imageToken: 'e2556aa622d0a1d4a1c7d6f12ee36a',




    //COLLECTION API TOKENS GO HERE 
    assetRoot: "https://cockpit.hackmylanguage.com/storage/uploads",
    webRoot: "https://cockpit.hackmylanguage.com",
    navigation: [],
    page: [],



})


export const mutations = {

    addToCart: (state, payload) => (state.cart.push(payload)),
    setNavigation: (state, payload) => (state.navigation = payload),
    setPage: (state, payload) => (state.page = payload),

}

export const actions = {

    nuxtServerInit({ commit, state }) {
        let collection = "bupaPractices";
        // console.log("inited")
        return axios.post(

            state.webRoot + "/api/collections/get/" +
            collection +
            "?token=" + state.collectionsToken,
            {
                fields: { title: 1, slug: 1, image: 1 }
            }
        )
            .then(res => {
                commit("setNavigation", res.data);
            });
    }

}