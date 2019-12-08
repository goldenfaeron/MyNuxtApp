import axios from "axios"
export const state = () => ({
    site: {
        name: "Bupa Healthcare",

        cockpit: {
            masterToken: 'd2e55cc7bc1ba0b4f7d66c43afb30a',
            //COLLECTION API TOKENS GO HERE 
            assetRoot: "https://cockpit.hackmylanguage.com/storage/uploads",
            webRoot: "https://cockpit.hackmylanguage.com",

        },
    }
})


export const mutations = {

    addToCart: (state, payload) => (state.cart.push(payload)),

}