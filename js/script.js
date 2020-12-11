/*

Aggiungere Header e Footer con VueJs creando una struttura dati che consenta di inserire i link nelle navbar

ottimizzato per schermi di larghezza tra 1500px e 2200px;

*/
// _________________________________________________________
var headerVue = new Vue ({
  el: '#headerVue',
  data: {
    logoHeader: "./img/finance_logo_1x.png",
    arrayHeaderRight: [
      {
        title: 'HOME'
      },
      {
        title: 'ABOUT'
      },
      {
        title: 'SERVICES ↓',
        drop: [
          'Pulizie',
          'Coccole',
          'Saluti e baci',
          'Traslochi'
        ],
        aperto: false
      },
      {
        title: 'PACKAGES'
      },
      {
        title: 'INSIGHT'
      }
    ],

    buttonHeaderRight: "CONTACT"
  },

  methods: {
    dropDownFunction: function(index) {
      if (this.arrayHeaderRight[index].aperto == false) {
        this.arrayHeaderRight[index].aperto = true;
      } else {
        this.arrayHeaderRight[index].aperto = false;
      }
    }
  }


});

var footerVue = new Vue ({
  el: '#footerVue',
  data: {
    logoFooter: "./img/finance_logo_footer-200x131.png",
    recentPosts: "RECENT POSTS",
    arrayRecentPosts: [
      '> When is it the right time to sell your company?',
      '> Personal debt or company debt we explore your options',
      '> An interview with a so-called business angel'
    ],
    services: "SERVICES",
    arrayServices: [
      '> SMALL BUSINESS LOAN SERVICES',
      '> CREDIT RATING ADVICE SERVICES',
      '> CROWD FUNDING SERVICES'
    ],
    latest: "LATEST",
    uccellinoBlu: 'piccoloUccellodiSuccesso',

    arrayCopyright: [
      '-',
      '2020',
      '|',
      'Avada Theme by Theme Fusion ',
      '|',
      'All Rights Reserved ',
      '|',
      'Powered by WordPress'
    ],

    arrayFooterIcons: [
      'fa-facebook-f',
      'fa-twitter',
      'fa-youtube',
      'fa-instagram'
    ]


    // <i class="fab fa-facebook-f"></i>
    //<i class="fab fa-twitter"></i>
    //<i class="fab fa-youtube"></i>
    //<i class="fab fa-instagram"></i>
  }
})
