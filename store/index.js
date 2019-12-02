import axios from "axios"
export const state = () => ({
    name: "My name is john",
    cart: [''],
})


export const mutations = {

    addToCart: (state, payload) => (state.cart.push(payload)),

}