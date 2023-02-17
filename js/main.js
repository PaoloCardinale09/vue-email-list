const { createApp } = Vue;

createApp({
  data() {
    return {
      emailGenerated: [],
      emailGeneratedNonProxy: [],
      activeEmail: "",
    };
  },

  methods: {
    generaEmail() {
      for (let index = 0; index < 10; index++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.activeEmail = index;
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
