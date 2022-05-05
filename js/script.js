// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            message: "Questo è un contenuto inserito dinamicamente con Vue",
            image: "../vue-hello/img/diabolik.jpg"
        }
    }
)