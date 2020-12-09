/*

Aggiungere Header e Footer con VueJs creando una struttura dati che consenta di inserire i link nelle navbar

ottimizzato per schermi di larghezza tra 1500px e 2000px;

*/
// _________________________________________________________
var app = new Vue ({
  el: '#app',
  data: {
    logoHeader: "./img/finance_logo_1x.png",
    arrayHeaderRight: ['HOME', 'ABOUT', 'SERVICES', 'PACKAGES', 'INSIGHT'],
    buttonHeaderRight: "CONTACT",
  },
  methods: {

  }


})
