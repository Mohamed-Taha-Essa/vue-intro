const app = Vue.createApp({
    data() {
        return({
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            desc : 'hello from view',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green',image:'./assets/images/socks_green.jpg' ,quantity :3},
                { id: 2235, color: 'blue' ,image:'./assets/images/socks_blue.jpg',quantity :0}
              ]
        
        })
        
    },

    methods :{
       
        addToCart(){
            this.cart +=1
            this.variants[this.selectedVariant].quantity -=1
        },
        updateVariant(index) {
            this.selectedVariant = index
          
        },
       


    },
    computed:{
        title(){
            return  this.brand+' '+this.product
        },

        image(){
            return this.variants[this.selectedVariant].image
        },

        instock(){
            return this.variants[this.selectedVariant].quantity
        },

    }
})