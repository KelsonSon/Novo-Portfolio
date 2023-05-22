(function(){"use strict";var t={954:function(t,e,o){var a=o(144),n=o(998),s=o(3059),i=function(){var t=this,e=t._self._c;return e(n.Z,{attrs:{id:"app"}},[e(s.Z,[e("router-view")],1)],1)},r=[],l={name:"App",data:()=>({})},c=l,u=o(1001),d=(0,u.Z)(c,i,r,!1,null,null,null),m=d.exports,f=o(8345),p=function(){var t=this,e=t._self._c;return e(n.Z,[e("SectionMain"),e("SectionProjects"),e("SectionContacts")],1)},h=[],v=o(6190),b=o(9582),g=o(4886),Z=o(266),_=o(2118),x=o(4324),k=o(4525),C=o(523),y=o(1124),S=o(1713),w=function(){var t=this,e=t._self._c;return e(n.Z,{attrs:{id:"projetos"}},[e(_.Z,{attrs:{fluid:"",id:"container"}},[e("h1",{staticClass:"text-center"},[t._v("Projetos")]),e(S.Z,[e(Z.Z,{staticClass:"d-flex justify-center flex-wrap",attrs:{cols:"12"}},t._l(t.projetos,(function(o){return e(b.Z,{key:o.id,staticClass:"mx-md-2 my-2",attrs:{"max-width":"480",outlined:""}},[e(k.Z,{attrs:{"three-line":""}},[e(y.km,[e(y.V9,{staticClass:"text-md-h5 mb-1"},[t._v(t._s(o.title))]),e(y.oZ,[t._v(t._s(o.subtitle))]),e("v-div",{staticClass:"d-flex"},t._l(o.icons,(function(o){return e(x.Z,{key:o.color,staticClass:"mx-1",attrs:{color:o.color}},[t._v(t._s(o.icon))])})),1)],1),e(C.Z,{staticClass:"avatar",attrs:{width:"200",tile:"",height:"auto",color:"grey"}},[e("img",{attrs:{src:`/img/${o.image}`,alt:""}})])],1),e(g.h7,[e(v.Z,{attrs:{outlined:"",rounded:"",text:"",href:o.deployLink,target:"_blank"}},[t._v("Deploy")]),e(v.Z,{attrs:{outlined:"",rounded:"",text:"",href:o.githubLink,target:"_blank"}},[t._v("GitHub")])],1)],1)})),1)],1)],1)],1)},j=[],D={name:"SectionProjects",data(){return{projetos:[{id:1,title:"Digital.com",subtitle:"Landing Page - Marketing digital",icons:[{icon:"fa-brands fa-html5",color:"#E44D26"},{icon:"fa-brands fa-css3-alt",color:"#264DE4"},{icon:"fa-brands fa-square-js",color:"#F7DF1E"}],image:"Digital-Mini.png",deployLink:"https://kelsonson.github.io/Marketing-Digital/",githubLink:"https://github.com/KelsonSon/Marketing-Digital"},{id:2,title:"FireLog",subtitle:"Login/Cadastro - LocalStorage",icons:[{icon:"fa-brands fa-html5",color:"#E44D26"},{icon:"fa-brands fa-css3-alt",color:"#264DE4"},{icon:"fa-brands fa-square-js",color:"#F7DF1E"}],image:"FireLog-Mini.png",deployLink:"https://kelsonson.github.io/FireLog-TelaLogin/",githubLink:"https://github.com/KelsonSon/FireLog-TelaLogin"},{id:3,title:"SandMaker",subtitle:"Criar sanduiches - Dashboard pedidos",icons:[{icon:"fa-brands fa-html5",color:"#E44D26"},{icon:"fa-brands fa-css3-alt",color:"#264DE4"},{icon:"fa-brands fa-vuejs",color:"#4FC08D"}],image:"Sanduiche-Mini.png",deployLink:"https://6467df59c369830ee502a077--taupe-halva-605057.netlify.app",githubLink:"https://github.com/KelsonSon/Sanduiche-Maker"},{id:4,title:"Potfolio",subtitle:"Meu Portfolio - Vuetify",icons:[{icon:"fa-brands fa-html5",color:"#E44D26"},{icon:"fa-brands fa-css3-alt",color:"#264DE4"},{icon:"fa-brands fa-vuejs",color:"#4FC08D"},{icon:"fa-brands fa-vuejs",color:"#1976D2"}],image:"Portfolio-Mini.png",deployLink:"https://kelsonson.neocities.org",githubLink:"https://github.com/KelsonSon/Novo-Portfolio"}]}}},M=D,E=(0,u.Z)(M,w,j,!1,null,"08c2e79a",null),F=E.exports,P=function(){var t=this,e=t._self._c;return e(n.Z,{attrs:{id:"home"}},[e("NavBar",{on:{toggleMenu:t.toggleNavbar}}),e(_.Z,{attrs:{fluid:"",id:"container"}},[e(S.Z,{staticClass:"fill-height"},[e(Z.Z,{attrs:{id:"col-1",cols:"12",md:"6"}},[e("h3",[t._v("Olá, me chamo "),e("span",[t._v("Kelson Soares")])]),e("p",{staticClass:"grey--text"},[t._v(" Um entusiasta de frontend e aspirante a desenvolvedor web. ")]),e("p",{staticClass:"mt-5"},[t._v(" Com conhecimentos em HTML, CSS, JS, Vue.js, Vuetify e Bootstrap. Buscando oportunidades para contribuir em projetos e aprender. ")])]),e(Z.Z,{staticClass:"d-flex flex-column justify-end",attrs:{id:"col-2",cols:"12",md:"6"}},[e("div",{staticClass:"content"},[e("h1",{staticClass:"mt-3 mb-3 text-center"},[t._v("Habilidades")]),e(S.Z,t._l(t.items,(function(o){return e(Z.Z,{key:o.id,staticClass:"d-flex align-center justify-center",attrs:{cols:"6",md:"4"}},[e(x.Z,{staticClass:"icon-overlay",attrs:{size:"70",color:o.color}},[t._v(t._s(o.title))])],1)})),1)],1)])],1)],1)],1)},O=[],L=o(6843),T=o(3687),B=function(){var t=this,e=t._self._c;return e(L.Z,{staticClass:"px-8",attrs:{id:"navbar",dark:"",flat:""}},[e(v.Z,{attrs:{icon:""}},[e(x.Z,{attrs:{size:"45",color:"#79F2D0"}},[t._v("fa-solid fa-glasses")])],1),e(v.Z,{staticClass:"d-sm-none",attrs:{id:"menu",icon:""},on:{click:t.toggleMenu}},[t.isMenuOpen?e(x.Z,{attrs:{color:"#ffffff"}},[t._v("mdi-close")]):e(x.Z,{attrs:{color:"#79F2D0"}},[t._v("mdi-menu")])],1),e(T.Z),e("nav",{class:{"nav-sm":t.isMenuOpen}},[e(v.Z,{attrs:{text:""},on:{click:function(e){return t.scrollToSection("home")}}},[t._v("Home")]),e(v.Z,{attrs:{text:""},on:{click:function(e){return t.scrollToSection("projetos")}}},[t._v("Projetos")]),e(v.Z,{attrs:{text:""},on:{click:function(e){return t.scrollToSection("contato")}}},[t._v("Contatos")])],1)],1)},q=[],N={name:"NavBar",data(){return{isMenuOpen:!1}},methods:{scroll(t){const e=document.getElementById(t);e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"}),this.isMenuOpen=!1},scrollToSection(t){const e=document.getElementById(t);window.scrollTo({top:e.offsetTop,behavior:"smooth"}),this.toggleMenu()},toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}},V=N,H=(0,u.Z)(V,B,q,!1,null,"e559aaf6",null),K=H.exports,A={name:"SectionMain",data(){return{items:[{id:1,title:"fa-brands fa-html5",color:"#E44D26"},{id:2,title:"fa-brands fa-css3-alt",color:"#264DE4"},{id:3,title:"fa-brands fa-square-js",color:"#F7DF1E"},{id:4,title:"fa-brands fa-bootstrap",color:"#7952B3"},{id:5,title:"fa-brands fa-vuejs",color:"#4FC08D"},{id:6,title:"fa-brands fa-vuejs",color:"#1976D2"}],isNavbarOpen:!1}},methods:{toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen}},components:{NavBar:K}},z=A,I=(0,u.Z)(z,P,O,!1,null,"d491a176",null),$=I.exports,G=o(9223),J=o(5495),R=o(5808),U=o(982),W=function(){var t=this,e=t._self._c;return e(n.Z,{attrs:{id:"contato"}},[e(_.Z,{staticClass:"px-0",attrs:{fluid:"",id:"container"}},[e("h1",{staticClass:"text-center mb-5"},[t._v("Contatos")]),e(S.Z,{staticClass:"fill-height mb-0"},[e(Z.Z,{attrs:{cols:"12",md:"6"}},[e(b.Z,{staticClass:"mx-auto h-100",attrs:{"max-width":"90%"}},[e(g.EB,[e("span",{staticClass:"text-h6 font-weight-light"},[t._v("Sobre mim")])]),e(g.ZB,{staticClass:"text-h7 font-weight-bold"},[t._v(" Sou um desenvolvedor web front-end autodidata, apaixonado por tecnologia. Aprendi o que sei por meio de cursos específicos na área de desenvolvimento front-end. Nasci em Recife-PE e atualmente moro em Igarassu-PE. Decidi ingressar nessa área para seguir minha paixão e encontrar oportunidades de aprendizado e crescimento. ")]),e(g.ZB,{staticClass:"text-h7 font-weight-bold"},[t._v(" Minha motivação vem da possibilidade de criar interfaces interativas e envolventes que melhorem a experiência do usuário. Estou determinado a expandir meus conhecimentos e habilidades, seja por meio de cursos, workshops ou projetos práticos. Tenho experiência em HTML, CSS e JavaScript, mas estou constantemente explorando novas tecnologias e frameworks para me tornar um profissional mais completo e versátil. ")]),e(g.ZB,{staticClass:"text-h7 font-weight-bold"},[t._v(" Estou entusiasmado com as possibilidades que a área de desenvolvimento front-end oferece. Adoro enfrentar desafios e trabalhar em equipe para criar produtos e experiências incríveis. Ser um desenvolvedor web front-end autodidata é mais do que uma ocupação para mim, é uma paixão que me impulsiona a buscar conhecimento, inovação e crescimento constantes. Estou comprometido em fazer o que amo e ansioso para as oportunidades que estão por vir. ")]),e(g.h7,[e(k.Z,{staticClass:"grow"},[e(C.Z,[e(J.Z,{staticClass:"elevation-6",attrs:{alt:"",src:o(1757)}})],1),e(y.km,[e(y.V9,[t._v("Kelson Soares")])],1)],1)],1)],1)],1),e(Z.Z,{staticClass:"d-flex flex-column justify-start px-15",attrs:{cols:"12",md:"6"}},[e(R.Z,[e(U.Z,[e(k.Z,{attrs:{href:"https://github.com/KelsonSon",target:"_blank"}},[e("v-list-icon",[e(x.Z,[t._v("fa-brands fa-github")])],1),e(y.km,{staticClass:"mx-1"},[e(y.V9,[t._v("GitHub")])],1)],1)],1),e(G.Z),e(U.Z,[e(k.Z,{attrs:{href:"https://www.linkedin.com/in/kelson-soares-a39a14261/?",target:"_blank"}},[e("v-list-icon",[e(x.Z,[t._v("fa-brands fa-linkedin")])],1),e(y.km,{staticClass:"mx-1"},[e(y.V9,[t._v("Linkedin")])],1)],1)],1),e(G.Z),e(U.Z,[e(k.Z,{attrs:{href:"https://api.whatsapp.com/send/?phone=5581984378161&text&type=phone_number&app_absent=0",target:"_blank"}},[e("v-list-icon",[e(x.Z,[t._v("fa-brands fa-whatsapp")])],1),e(y.km,{staticClass:"mx-1"},[e(y.V9,[t._v("Whatsapp")])],1)],1)],1)],1),e(G.Z),e("v-div",[e("EmailForm")],1)],1),e("FooterBar")],1)],1)],1)},Y=[],Q=o(8271),X=function(){var t=this,e=t._self._c;return e(Q.Z,{attrs:{id:"footer"}},[e(Z.Z,{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Vuetify")])])],1)},tt=[],et={name:"FooterBar"},ot=et,at=(0,u.Z)(ot,X,tt,!1,null,"f625ab78",null),nt=at.exports,st=o(7149),it=o(2648),rt=function(){var t=this,e=t._self._c;return e(_.Z,[e("form",{ref:"emailForm",attrs:{action:"https://formsubmit.co/kelson15k@gmail.com",method:"POST"},on:{onsubmit:function(e){return e.preventDefault(),t.submit()}}},[e(st.Z,{attrs:{"error-messages":t.nameErrors,counter:10,name:"name",label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e(st.Z,{attrs:{"error-messages":t.emailErrors,label:"E-mail",name:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(it.Z,{attrs:{name:"textarea",filled:"",label:"Mensagem","auto-grow":""},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),e("input",{attrs:{type:"hidden",name:"_captcha",value:"false"}}),e("input",{attrs:{type:"hidden",name:"_next",value:"https://kelsonson.neocities.org"}}),e(v.Z,{staticClass:"mr-4",attrs:{type:"submit"}},[t._v(" Enviar ")])],1)])},lt=[],ct=o(8620),ut=o(379),dt={name:"EmailForm",mixins:[ct.oE],validations:{name:{required:ut.C1,maxLength:(0,ut.BS)(10)},email:{required:ut.C1,email:ut.Do}},data:()=>({name:"",email:"",textarea:""}),methods:{}},mt=dt,ft=(0,u.Z)(mt,rt,lt,!1,null,null,null),pt=ft.exports,ht={name:"SectionContacts",components:{FooterBar:nt,EmailForm:pt}},vt=ht,bt=(0,u.Z)(vt,W,Y,!1,null,"b54df374",null),gt=bt.exports,Zt={name:"HomeView",components:{SectionMain:$,SectionProjects:F,SectionContacts:gt},methods:{scrollToSection(t){const e=document.querySelector(t);e&&e.scrollIntoView({behavior:"smooth"})}},mounted(){this.$on("navigate-to-section",this.scrollToSection)}},_t=Zt,xt=(0,u.Z)(_t,p,h,!1,null,"4510a62e",null),kt=xt.exports;a.ZP.use(f.ZP);const Ct=new f.ZP({mode:"history",base:"/",routes:[{path:"/",name:"home",component:kt}]});var yt=Ct,St=o(629);a.ZP.use(St.ZP);var wt=new St.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),jt=o(8864);a.ZP.use(jt.Z);var Dt=new jt.Z({icons:{iconfont:"fa"},theme:{dark:!0,themes:{dark:{background:"#0D0000",color:"#F2F2F2",primary:"#79F2D0",secondary:"#41A8BF"}}}});a.ZP.config.productionTip=!1,new a.ZP({router:yt,store:wt,vuetify:Dt,render:t=>t(m)}).$mount("#app")},1757:function(t,e,o){t.exports=o.p+"img/Avatar-Maker (1).0d222b6b.png"}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,a,n,s){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],s=t[u][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||i>=s)&&Object.keys(o.O).every((function(t){return o.O[t](a[l])}))?a.splice(l--,1):(r=!1,s<i&&(i=s));if(r){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,n,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,i=a[0],r=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var u=l(o)}for(e&&e(a);c<i.length;c++)s=i[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(u)},a=self["webpackChunknovo_portfolio"]=self["webpackChunknovo_portfolio"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(954)}));a=o.O(a)})();
//# sourceMappingURL=app.81e7fb43.js.map