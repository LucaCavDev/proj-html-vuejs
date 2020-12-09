/*

Aggiungere Header e Footer con VueJs creando una struttura dati che consenta di inserire i link nelle navbar

ottimizzato per schermi di larghezza tra 1500px e 2000px;

*/
// _________________________________________________________
var headerVue = new Vue ({
  el: '#headerVue',
  data: {
    logoHeader: "./img/finance_logo_1x.png",
    arrayHeaderRight: ['HOME', 'ABOUT', 'SERVICES', 'PACKAGES', 'INSIGHT'],
    buttonHeaderRight: "CONTACT"
  },
  methods: {

  }


});

var footerVue = new Vue ({
  el: '#footerVue',
  data: {
    logoFooter: "./img/finance_logo_footer-200x131.png",
    arrayRecentPosts: [
      '> When is it the right time to sell your company?',
      '> Personal debt or company debt we explore your options',
      '> An interview with a so-called business angel'
    ],
    arrayServices: [
      '> SMALL BUSINESS LOAN SERVICES',
      '> CREDIT RATING ADVICE SERVICES',
      '> CROWD FUNDING SERVICES'
    ],






  }
})
