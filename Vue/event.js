const options = {
    data() {
        return {
            a: 0,
            b: 0,
            name: ''
        };
    },
    methods: {
        submit() {
            alert(`Submitted values: a = ${this.a}, b = ${this.b}, name = ${this.name}`);
        }
    },
};

const app = Vue.createApp(options);
const vm = app.mount('#app');
