var app = new Vue({
    el: '#app',
    data: {
        user: "Paola",
        message: "Entrer votre nom",
        produits: ['Pizza', 'Burger', 'Frites'],
        command: []
    },
    methods: {
        commander: function(produit) {
            this.command.push(produit);
            
        }
    }
})
