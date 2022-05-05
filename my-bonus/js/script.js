Vue.config.devtools = true;

const app = new Vue (
    {
        el: "#root",
        data: 
        {   
            wanted: "Diabolik e Lady Eva Kant",
            message1: "Walter Dorian, in arte Diabolik",
            message2: "Lady Eva Kant",
            image1: "../../vue-hello/img/walter.jpg",
            image2: "../../vue-hello/img/eva.jpg"
        }
    }
)