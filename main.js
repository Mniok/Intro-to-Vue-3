const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
			variants: [
				{id: 2234, colour:'green'},	//obiekt nie array! żeby mogły być nazwane properties. całość jak array structów
				{id: 2235, colour:'blue'}	//colour wyświetlamy, id to :key diva generowanego v-forem
			],
			sizes: [
				{id: 2137, size:'XS'},
				{id: 2138, size:'S'},
				{id: 2139, size:'M'},
				{id: 2140, size:'L'},
				{id: 2141, size:'XL'},
				{id: 2142, size:'XXL'}
			]
        }
    }
})
