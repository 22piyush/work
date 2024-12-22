const options = {
    data() {
        return {
            appName:"Piyush Aglawe",
          cart: [
            {name:'Apple',price:100},
            {name:'pear',price:150}
          ]
        };
    },
    computed:{
           empty(){
            return this.cart.length?false:true
           }
    },
    methods: {
        remove(){
            this.cart.pop();
        }
    },
    watch:{
        appName:function(latest,oldValue){
            console.log('appName changed from ',oldValue,'=>',latest);
        },
        cart:{
           handler:function(){
              console.log('cart changed')
           },
           deep: true
        }
    }
    
};

const app = Vue.createApp(options);
const vm = app.mount('#app');
