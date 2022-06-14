// Instantiates Vue.js
new Vue ({
    el: '#app', // element ou l'on grefe vue js
    // State of the app (on definit les variables)
    data: {
        message: 'Hello Vue.js !', // Variable affiachant une string
        link: 'https://www.google.fr',
        success: true,
        persons: ['John', 'Jane', 'Bob'],
    },
    // Methods of the app (on definit les fonctions)
    methods: {
        // Function to change the boolean value of the success variable
        close: function () {
            this.success = false
        }
    }
})