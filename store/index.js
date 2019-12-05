import axios from "axios"
export const state = () => ({
    site: {
        name: "Samazon",
        description: "An online shop where you can buy anything and everything"
    }
})


export const mutations = {

    addToCart: (state, payload) => (state.cart.push(payload)),

}