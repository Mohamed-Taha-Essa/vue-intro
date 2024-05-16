const app = Vue.createApp({
    data() {
        return(
            {
            cart: [],
            premium:true,
            }
        )
        
    },

    methods :{
        updateCart(id){
            this.cart.push(id)
            console.log(this.cart.length)

        },
        moveProduct(){
            if (this.cart.length > 0) {
                this.cart.pop();
              }  
              console.log(this.cart.length)
     
             }

    },
    computed:{}
})
