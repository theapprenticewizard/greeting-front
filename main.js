const app = new Vue({
    el:"#app",
    data: {
        greeting: "hello!"
    },
    methods: {
        greet: function (greeting) {
            var vm = this;
            axios.get('http://localhost:8080/api/greet')
                .then(function (response) {
                    vm.greeting = response.data.greeting;
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    template: 
    `
    <div>
        <h1>{{greeting}}</h1>
        <button v-on:click="greet(greeting)">new greeting</button>
    </div>
    `
});

