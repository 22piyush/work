const options = {
    data(){
        return{
            appName:'VueApp',
            counter:1,
            showName:"Piyush Aglawe",
            value:false,
            users:1,
            cart:['apple','banana','pineapple','stroberry'],
            person:{name:'abhi',age:30,subject:'vue'}
        }
    },
    methods:{
        increment(){
            this.counter++;
            this.users++;
            this.cart.push('x')
        },
        showDate(){
            const date = new Date();
            return date.toUTCString();
        }
    },
}

const app = Vue.createApp(options);
const vm = app.mount('#app');