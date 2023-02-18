const { createApp } = Vue;

createApp({
  data() {
    return {
      emailGenerated: [],
      numberMail: "",
    };
  },

  methods: {
    generaEmail() {
      this.emailGenerated = [];
      for (let index = 0; index < this.numberMail; index++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            // console.log(response.data.response);
            this.emailGenerated.push(response.data.response);
          });
      }
    },
  },
}).mount("#app");

// Descrizione
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
