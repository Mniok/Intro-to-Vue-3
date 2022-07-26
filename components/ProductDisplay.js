app.component('product-display', {
	props: {
		premium: {
			type: Boolean,	//prop validation - chyba opcjonalne
			required: true
		}
	},
	
	template:
	/*html*/
	`<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>

            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
			
			<p>Shipping: {{ shipping }}</p> <!-- nowe - computedproperty shipping używa prop premium passowanego z maina -->  
			
            <!-- tu było <ul> product details -->
			<product-details :details="details"></product-details>

            <div 
              v-for="(variant, index) in variants" 
              :key="variant.id" 
              @mouseover="updateVariant(index)" 
              class="color-circle" 
              :style="{ backgroundColor: variant.color }">
            </div>
            
            <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
          </div>
        </div>
      </div>`,
	  //'<div class="product-display"><div class="product-container"><div class="product-image"><img v-bind:src="image"></div><div class="product-info"><h1>{{ title }}</h1><p v-if="inStock">In Stock</p><p v-else>Out of Stock</p><ul><li v-for="detail in details">{{ detail }}</li></ul><div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }"></div><button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button></div></div></div>',
	  //nie rejestrowało się jako string z jakiegoś powodu gdy było 'apostrofach' chociaż niby powinny być multiline
	  // `backticks` (to gdzie tylda! `~) to `template literal` i jest multiline 
	  
	data() {
        return {
            //cart: 0, //to jest globalne a nie dla każdego produktu, więc nie w komponencie
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
	
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
	
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
		
		shipping() {
			if (this.premium) return "Free"
			return 2.99
		}	//do testów tego w konsoli: mountedApp.premium = false 
    }
})
// 1st argument - name -> <name></name> when imported into html
// 2nd argument - obiekt {template: 'HTML', data: {}, methods: {}, ...}
// edit: props przed template jeszcze ale to opcjonalne

// koment /*html*/ aktywuje extension w vs code do html syntax highlighting w texcie w 'backticksach', ale w notepad++ widzę że podświetla i bez tego, ale na kolory JSowe a nie htmlowe
// extension es6-string-html btw (ecmascript6)