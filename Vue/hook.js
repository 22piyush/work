const options = {
    data() {
        return {
           counter:0
        };
    },
    methods: {
        increment(){
            this.counter++;
        }
    },
    mounted(){
        setInterval(()=>{
            this.increment()
            if(this.counter == 10){
                app.unmount()
            }
        },1000)
    },
};

const app = Vue.createApp(options);
const vm = app.mount('#app');
