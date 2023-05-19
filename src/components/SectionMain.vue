<template>
    <v-app id="home">
      <NavBar @toggleMenu="toggleNavbar" />
      <v-container fluid id="container">
        <v-row class="fill-height">
          
        <v-col id="col-1" cols="12" md="6">
          <h3>Olá, me chamo <span>Kelson Soares</span></h3>
          <p class="grey--text">
            Um entusiasta de frontend e aspirante a desenvolvedor web.
          </p>
          <p class="mt-5">
            Com conhecimentos em HTML, CSS, JS, Vue.js, Vuetify e Bootstrap. Buscando oportunidades para contribuir em projetos e aprender.
          </p>
        </v-col>
        
        <v-col id="col-2" cols="12" md="6" class="d-flex flex-column justify-end">
          <div class="content">
            <h1 class="mt-3 mb-3 text-center">Habilidades</h1>
            <v-row>
              <v-col v-for="item in items" :key="item.id" class="d-flex align-center justify-center" cols="6" md="4">
                <v-icon size="70" :color="item.color" class="icon-overlay">{{ item.title }}</v-icon>
              </v-col>
            </v-row>
          </div>
        </v-col>
        
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import NavBar from '@/components/sub-components/NavBar.vue';
  
  export default {
    name: 'SectionMain',
    data() {
      return {
        items: [
          { id: 1, title: 'fa-brands fa-html5', color: '#E44D26' },
          { id: 2, title: 'fa-brands fa-css3-alt', color: '#264DE4' },
          { id: 3, title: 'fa-brands fa-square-js', color: '#F7DF1E' },
          { id: 4, title: 'fa-brands fa-bootstrap', color: '#7952B3' },
          { id: 5, title: 'fa-brands fa-vuejs', color: '#4FC08D' },
          { id: 6, title: 'fa-brands fa-vuejs', color: '#1976D2' },
        ],
        isNavbarOpen: false
      };
    },
    methods: {
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
      }
    },
    components: {
      NavBar
    }
  };
  </script>
  
  <style scoped>
  #container {
    height: 100vh;
  }
  .content{
    align-self: center;
    width: 80%;
    padding: 20px;
    margin-bottom: 30px;
  }
  h3 span{
    font-size: 40px;
    text-transform: uppercase;
    font-family: 'Source Code Pro', monospace;
  }
  h3, h1 {
    font-size: 30px;
    color: #79F2D0;
  }
  
  p {
    font-size: 20px;
    color: #ffffff;
  }
  
  @media (max-width:600px) {
    #col-1 {
      height: 40%;
    }
    #col-2 {
      height: 60%;
    }
    .content h1{
      background-color: #ffffff;
      color: #020202;
      font-weight: bold;
      border-radius: 5px;
      padding: 5px 0;
      text-transform: uppercase;
    }
    .content{
      width: 100%;
    }
  }
  @media (max-width: 380px){
    h3, h1{
      font-size: 100%;
    }
    p{
      font-size: 80%;
    }
  }
  @media (min-width:600px){
    #col-1 {
      margin-top: 10%;
    }
  }
  
  .icon-overlay {
    position: relative;
    z-index: 1;
  }
  </style>
  