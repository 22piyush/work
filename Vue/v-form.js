const options = {
    data(){
        return{
          name:'',
          agree:false,
          fruits:[],
          country:'',
          travelDest:[]
        }
    },
    methods:{
       
    },
}

const app = Vue.createApp(options);
const vm = app.mount('#app');