//const product = 'Socks'

const app = Vue.createApp({ //{"options object"} zawierający tylko 1 opcję - data.
	data: function() {
		return {
			product: 'Socks',
			description: 'As socky as can be. $15 per pair. If you cant afford them, socks to be you.'
		} //zwraca {obiekt} typu data
	}
})

// {} to obiekt btw


//vue jest reaktywne - zmiana 'Socks' na np. 'Boots' sama updateuje się przy refreshu strony
// w konsoli: mountedApp.product = 'nowa wartość'