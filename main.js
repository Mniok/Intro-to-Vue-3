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
		}
    }
})
