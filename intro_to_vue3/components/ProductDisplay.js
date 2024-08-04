app.component('product-display', {
    props: {
        premium: {
            type: Boolean, // This is a prop validation
            required: true
        }
    },
    template:
        /*html*/
        `
            <div class="product-display">
                <div class="product-container">
                    <div class="product-image">
                        <img :src="image" :class="isOutOfStock ? 'out-of-stock-img' : 'available-img'">
                    </div>
                    <div class="product-info">
                        <h1>{{ product }}</h1>
                        <p v-if="inStock > 10">In Stock</p>
                        <p v-else-if="inStock <= 10 && inStock >0">Almost sold out!</p>
                        <p v-else>Out of Stock</p>
                        <p v-if="onSale">On Sale!</p>
                        <p v-if="!isOutOfStock">Shipping: {{ shipping }}</p>
                        <h3>Details about the {{ title }}:</h3>
                        <ul>
                            <li v-for="detail in details">{{ detail }}</li>
                        </ul>
                        <!-- The variants is a list of key, value -->
                        <p>Available colors:</p>
                        <ul>
                            <li v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                                class="color-circle" :style="{ backgroundColor: variant.color }"></li>
                        </ul>
                        <p>This {{ product }} has sizes:</p>
                        <ul>
                            <!-- The sizes is a list of values -->
                            <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
                        </ul>
                        <button class="button" :class="{ disabledButton: isOutOfStock }" :disabled="isOutOfStock"
                            @click="addToCart">Add to Cart</button>
                        <button class="button" :class="{ disabledButton: isOutOfStock }" :disabled="isOutOfStock"
                            @click="removeFromCart">Remove Item</button>
                    </div>
                </div>
            </div>
        `,
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
            sizes: ['S', 'M', 'L', 'XL']
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index

        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})
