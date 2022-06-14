Vue.component('fiche-produit', {
    template: 
    `
        <ul>
            <li>{{nom}}</li>
            <p>
                <button v-on:click="passer_commande(nom)" v-if="role == 'commande'">Commander</button>
            </p>
        </ul>
    `,
    props: ['nom', 'role'],
    methods: {
        passer_commande: function(produit) {
            this.$emit('commande-passee', produit);
        }
    }
})


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
