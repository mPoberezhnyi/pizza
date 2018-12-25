import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { router } from '../router'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [{
                id: 1,
                name: 'Supreme',
                description: 'Pepperoni, seasoned pork, beef, mushrooms, green bell peppers and red onions.',
                image: 'bitmap_5',
                price: {
                    currency: '$',
                    value: '12.50'
                },
                category: ['meat'],
                ordered: '23',
                size: {
                    title: 'Medium',
                    value: '600mm'
                }
            },
            {
                id: 2,
                name: 'HAWAIIAN CHICKEN',
                description: 'Grilled chicken, ham, pineapple and green bell peppers.',
                image: 'bitmap_6',
                price: {
                    currency: '$',
                    value: '5.50'
                },
                category: ['veggie', 'hot'],
                ordered: '5',
                size: {
                    title: 'Large',
                    value: '400mm'
                }
            },
            {
                id: 3,
                name: 'VEGGIE LOVER’S',
                description: 'Mushrooms, red onions, green bell peppers, diced Roma tomatoes and black olives.',
                image: 'bitmap_7',
                price: {
                    currency: '$',
                    value: '15.80'
                },
                category: ['meat'],
                ordered: '31',
                size: {
                    title: 'Medium',
                    value: '600mm'
                }
            },
            {
                id: 4,
                name: 'MEAT LOVER’S',
                description: 'Pepperoni, Italian sausage, ham, bacon, seasoned pork and beef.',
                image: 'bitmap_8',
                price: {
                    currency: '$',
                    value: '14.00'
                },
                category: ['veggie'],
                ordered: '87',
                size: {
                    title: 'Small',
                    value: '400mm'
                }
            },
            {
                id: 5,
                name: 'BUFFALO CHICKEN',
                description: 'Grilled chicken, banana peppers and red onions. With Buffalo sauce.',
                image: 'bitmap_9',
                price: {
                    currency: '$',
                    value: '8.20'
                },
                category: ['hot'],
                ordered: '54',
                size: {
                    title: 'Large',
                    value: '400mm'
                }
            },
            {
                id: 6,
                name: 'SUPREME',
                description: 'Pepperoni, seasoned pork, beef, mushrooms, green bell peppers and red onions.',
                image: 'bitmap_5',
                price: {
                    currency: '$',
                    value: '4.20'
                },
                category: ['hot'],
                ordered: '3',
                size: {
                    title: 'Small',
                    value: '400mm'
                }
            },
            {
                id: 7,
                name: 'MEAT LOVER’S',
                description: 'Pepperoni, Italian sausage, ham, bacon, seasoned pork and beef.',
                image: 'bitmap_8',
                price: {
                    currency: '$',
                    value: '8.20'
                },
                category: ['hot'],
                ordered: '12',
                size: {
                    title: 'Small',
                    value: '400mm'
                }
            },
            {
                id: 8,
                name: 'BUFFALO CHICKEN',
                description: 'Pepperoni, seasoned pork, beef, mushrooms, green bell peppers and red onions.',
                image: 'bitmap_9',
                price: {
                    currency: '$',
                    value: '9.20'
                },
                category: ['hot'],
                ordered: '24',
                size: {
                    title: 'Large',
                    value: '800mm'
                }
            },
            {
                id: 9,
                name: 'VEGGIE LOVER’S',
                description: 'Pepperoni, seasoned pork, beef, mushrooms, green bell peppers and red onions.',
                image: 'bitmap_7',
                price: {
                    currency: '$',
                    value: '3.20'
                },
                category: ['hot'],
                ordered: '65',
                size: {
                    title: 'Large',
                    value: '400mm'
                }
            }
        ],       
        newProducts: [],
        cart: [],
        combined: 'grid',
        paginationSettings: {
            countItems: 6,
            curentPage: 1,
            countPages: 1
        },
        param: {
            category: [],
            size: [],
            price_from: 0,
            price_to: 0,
            sort: 'Popular',
            page: 1
        }
    },
    mutations: {
        setProducts(state, payload) {
            state.products = payload
        },
        setParam(state, payload) {
            if (payload.category != undefined) state.param.category = payload.category
            if (payload.size) state.param.size = payload.size
            if (payload.price_from) state.param.price_from = payload.price_from
            if (payload.price_to) state.param.price_to = payload.price_to
            if (payload.sort) state.param.sort = payload.sort
            if (payload.page) state.param.page = payload.page
             
            const param = state.param
                
            let category = ``
            let size = ``
            let price_from = ``
            let price_to = ``
            let sort = ``
            let page = ``
            if (param.category.length != undefined || param.category.length != 0) category = `category=${param.category.join(' ')}`
            if (param.size.length != undefined || param.size.length != 0) size = `size=${param.size.join(' ')}`
            if (param.price_from != undefined) price_from = `price_from=${param.price_from}`
            if (param.price_to != undefined) price_to = `price_to=${param.price_to}`
            if (param.sort != undefined) sort = `sort=${param.sort}`
            if (param.page != undefined) page = `page=${param.page}`

            router.push(`/?${category}&${size}&${price_from}&${price_to}&${sort}&${page}`);
        },
        changeCombined(state, payload) {
            state.combined = payload
        },
        addToCart(state, payload) {
            state.cart.push(payload)
        },
        removeCart(state, payload) {
            let index
            state.cart.filter((p, i) => { 
                if (p.id == payload) {
                    index = i; 
                    return p
                } 
            })
            state.cart.splice(index, 1);
        },
        newProducts(state, payload) {
            state.newProducts = payload
        },
        countPages(state, payload) {
            state.paginationSettings.countPages = payload
        },
        curentPage(state, payload) {
            state.paginationSettings.curentPage = payload
        }
    },
    actions: {
        products({ commit, getters }) {
            Axios.get("../src/data/product-list.json")
                .then(response => {
                    commit('setProducts', response.data)
                    commit('newProducts', getters.products)                    
                })
                .catch(error => {
                    console.log("error", error);
                });
        },
        changeCombined({ commit }, payload) {
            commit('changeCombined', payload)
        },
        filter({ commit, getters }, filter) {
            if (filter == undefined) {
                commit('newProducts', getters.products)
            } 
            else {
                commit('setParam', filter)
                commit('newProducts', getters.filterProducts(filter))
            }
        },        
        addToCart({ commit, getters }, p) {
            let product = getters.product(p.id)
            product.size = p.size
            commit('addToCart', {
                ...product,
                cID: Symbol() 
            })
        },
        removeCart({commit}, cID) {
            commit('removeCart', cID)
        },
        sort({commit}, sort) {
            commit('setParam', {
                sort: sort
            })         
        },
        sortProduts({commit, getters}) {
            const sort = getters.sort
            
            if (sort == 'Popular') {
                commit('newProducts', getters.sortPopular)
            }
            else if (sort == 'Price to Low') {
                commit('newProducts', getters.sortPriceToLow)
            }
            else if (sort == 'Price to Hight') {
                commit('newProducts', getters.sortPriceToHight)
            }
        },        
        countPages({commit, getters}) {
            commit('countPages', Math.ceil(getters.newProducts.length/getters.countItems))
        },
        curentPage({commit}, payload) {
            commit('setParam', {
                page: payload
            })
        }
    },
    getters: {
        products(state) {
            return state.products
        },
        product: state => id => {
            return state.products.filter(product => {
                if (product.id == id) {
                    return product
                }
            })
        },
        newProducts(state) {
            return state.newProducts
        },
        filterProducts: state => filter => {
            let category = []
            if (filter.category.length) {
                category = state.products.filter(product => {
                    let inCategory = false;
                    filter.category.forEach((cat) => {
                        if (product.category == cat) inCategory = true
                    })
                    if (inCategory) return product
                });
            }
            else category = state.products

            let size = []
            if (filter.size.length) {
                size = state.products.filter(product => {
                    let inSize = false;
                    filter.size.forEach((s) => {
                        if (product.size.value == s) inSize = true
                    })
                    if (inSize) return product
                });
            }
            else {
                size = state.products
            }

            return category.filter(cat => {
                let c = {}
                size.forEach(s => {
                    if (cat.id == s.id && parseInt(cat.price.value) >= filter.price_from && parseInt(cat.price.value) <= filter.price_to) c = cat
                })
                if (c.id != undefined) return c
            })
        },
        minPrice(state) {
            return state.products.sort((p1, p2) => {
                return p1.price.value - p2.price.value
            })[0].price.value
        },
        maxPrice(state) {
            return state.products.sort((p1, p2) => {
                return p2.price.value - p1.price.value
            })[0].price.value
        },
        countPages(state){
            return state.paginationSettings.countPages
        },
        combined(state) {
            return state.combined
        },
        sort(state) {
            return state.param.sort
        },
        sortPopular(state) {
            return state.newProducts.sort((p1, p2) => {
                return p2.ordered - p1.ordered
            })
        },
        sortPriceToLow(state) {
            return state.newProducts.sort((p1, p2) => {
                return p2.price.value - p1.price.value
            })
        },
        sortPriceToHight(state) {
            return state.newProducts.sort((p1, p2) => {
                return p1.price.value - p2.price.value
            })
        },
        cart(state) {
            return state.cart
        },
        productsForPage: state => n => {
            const countItems = state.paginationSettings.countItems
            if (n == 1) return state.newProducts.slice(n-1, countItems)
            else if (n*countItems+1 > state.newProducts.length) return state.newProducts.slice(n*countItems-countItems, state.newProducts.length)
            else return state.newProducts.slice(n*countItems-countItems, n*countItems+1)
        },
        curentPage(state) {
            return state.param.page
        },
        countItems(state) {
            return state.paginationSettings.countItems
        },
        getParam(state) {
            return state.param
        }
    }
})