const app = Vue.createApp({
    data() {
        return {
            cart: [],	//array of IDs
			premium: true //premium user or not, podawane do komponentu przez premium prop
        }
    },
	
    methods: {
		updateCart(id) {
			this.cart.push(id)	//jak na wektorach
			// w indexie jest {{ cart.length }} więc pokazuje tak samo jak wcześniej mimo że jest array
		},
		
		tryRemoveFromCart(id) { // coding challenge
			if (this.cart.includes(id)) {
				this.cart.splice(this.cart.indexOf(id), 1)
			}
		}
    }
})
