const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
			onSale: true
        }
    },
	
    methods: {
        addToCart() {
            this.cart += 1
        },
        /*updateImage(variantImage) {
            this.image = variantImage
        }*/
		
		updateVariant(index) {
			this.selectedVariant = index
			console.log(index)
		}
    },
	
	computed: {
		title() {
			//return {title: this.brand + ' ' + this.product}	//działa ale nie musi być obiekt. tutaj trzeba title.title, a w tym niżej samo title
			return this.brand + ' ' + this.product //computed property
		},
		
		image() {
			return this.variants[this.selectedVariant].image //this.!!!
		},
		
		inStock() {
			return this.variants[this.selectedVariant].quantity > 0
		},
		
		computedOnSale() {
			return this.brand + ' ' + this.product + " is on sale!" 
		}
	}
})
