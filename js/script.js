/*
ottimizzato per schermi di larghezza tra 1200px e 2200px;
*/
// _________________________________________________________
var sitoWeb = new Vue ({
  el: '#sitoWeb',
  data: {
    logoHeader: "./img/finance_logo_1x.png",
    arrayHeaderRight: [
      {
        title: 'HOME',
        link: 'https://it.wikipedia.org/wiki/Home'
      },
      {
        title: 'ABOUT',
        link: 'https://en.wikipedia.org/wiki/Wikipedia:About'
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
        title: 'PACKAGES',
        link: 'https://en.wikipedia.org/wiki/Packing_(phallus)'
      },
      {
        title: 'INSIGHT',
        link: 'https://it.wikipedia.org/wiki/Insight'
      }
    ],

    buttonHeaderRight: "CONTACT",
    // footer
    logoFooter: "./img/finance_logo_footer-200x131.png",
    recentPosts: "RECENT POSTS",
    arrayRecentPosts: [
      'When is it the right time to sell your company?',
      'Personal debt or company debt we explore your options',
      'An interview with a so-called business angel'
    ],
    services: "SERVICES",
    arrayServices: [
      'SMALL BUSINESS LOAN SERVICES',
      'CREDIT RATING ADVICE SERVICES',
      'CROWD FUNDING SERVICES'
    ],
    latest: "LATEST",
    annoCorrente: '2020',
    arrayCopyright: [
      'Avada Theme by Theme Fusion',
      'All Rights Reserved',
      'Powered by WordPress'
    ],
    arrayFooterIcons: [
      'fa-facebook-f',
      'fa-twitter',
      'fa-youtube',
      'fa-instagram'
    ]
  },

  methods: {
    // header
    dropDownFunction: function(index) {
      if (this.arrayHeaderRight[index].aperto == false) {
        this.arrayHeaderRight[index].aperto = true;
      } else {
        this.arrayHeaderRight[index].aperto = false;
      }
    },
    // sotto footer
    backToStart: function() {
      // window.scrollTo(0,0);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
});
