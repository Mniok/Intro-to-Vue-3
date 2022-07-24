const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
	
	methods: {
		addToCart() { //app.addToCart()
			this.cart++ //!!! this
			//ver. z tutoriala - ignorowało argumenty btw - mountedApp.addToCart("cfg", 1, 2, 3, {a: 456}) -> cart++
		},
		
		addToCartCount(count) {
			//wersja moja: obsługa argumentów
			this.cart += count
			//konsola: mountedApp.addToCartCount(12345)
		},
		
		updateImage(variantImage) {
			this.image = variantImage
		}
	}
})
