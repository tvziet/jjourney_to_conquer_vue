const app = Vue.createApp({
    data() {
        return {
            brand: 'Jouney To Conquer Vue',
            product: 'Socks',
            selectedVariant: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quanity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quanity: 0 }
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index

        },
        removeFromCart() {
            this.cart -= 1
        }
    },
    computed: {
        isOutOfStock() {
            return this.variants[this.selectedVariant].quanity === 0
        },
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quanity
        }
    }
})
