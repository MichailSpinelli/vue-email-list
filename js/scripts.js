/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [],
        };
    },

    mounted() {

        for (let i = 0; i < 10; i++) {
            axios.get(this.url).then((res) => {

                this.emails.push(res.data.response);

                axios.get(this.urlInt).then((resTwo) => {
                    console.log('il nuovo numero ottenuto è', res.data.response, i);
                });
                

            });
        }
    }

}).mount('#app');
