<template>
    <v-app id="projetos">
      <v-container fluid id="container">
        <h1 class="text-center">Projetos</h1>
        <v-row>
          <v-col cols="12" class="d-flex justify-center flex-wrap" >
            <!-- Card do projeto -->
            <v-card class="mx-md-2 my-2" max-width="480"  v-for="projeto in projetos" :key="projeto.id" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-md-h5 mb-1">{{ projeto.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ projeto.subtitle }}</v-list-item-subtitle>
                  <v-div class="d-flex">
                    <v-icon class="mx-1" v-for="icon in projeto.icons" :key="icon.color" :color="icon.color">{{ icon.icon }}</v-icon>
                  </v-div>
                </v-list-item-content>
                <v-list-item-avatar class="avatar" width="200"  tile height="auto" color="grey">
                  <img :src="`/img/${projeto.image}`" alt="">
                </v-list-item-avatar>
              </v-list-item>
              <v-card-actions>
                <v-btn outlined rounded text :href="projeto.deployLink" target="_blank">Deploy</v-btn>
                <v-btn outlined rounded text :href="projeto.githubLink" target="_blank">GitHub</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'SectionProjects',
    data() {
      return {
        projetos: [
          {
            id: 1,
            title: 'Digital.com',
            subtitle: 'Landing Page - Marketing digital',
            icons: [
              { icon: 'fa-brands fa-html5', color: '#E44D26' },
              { icon: 'fa-brands fa-css3-alt', color: '#264DE4' },
              { icon: 'fa-brands fa-square-js', color: '#F7DF1E' },
            ],
            image: 'Digital-Mini.png',
            deployLink: 'https://kelsonson.github.io/Marketing-Digital/',
            githubLink: 'https://github.com/KelsonSon/Marketing-Digital'
          },

          {
            id: 2,
            title: 'FireLog',
            subtitle: 'Login/Cadastro - LocalStorage',
            icons: [
              { icon: 'fa-brands fa-html5', color: '#E44D26' },
              { icon: 'fa-brands fa-css3-alt', color: '#264DE4' },
              { icon: 'fa-brands fa-square-js', color: '#F7DF1E' },
            ],
            image: 'FireLog-Mini.png',
            deployLink: 'https://kelsonson.github.io/FireLog-TelaLogin/',
            githubLink: 'https://github.com/KelsonSon/FireLog-TelaLogin'
          },

          {
            id: 3,
            title: 'SandMaker',
            subtitle: 'Criar sanduiches - Dashboard pedidos',
            icons: [
              { icon: 'fa-brands fa-html5', color: '#E44D26' },
              { icon: 'fa-brands fa-css3-alt', color: '#264DE4' },
              { icon: 'fa-brands fa-vuejs', color: '#4FC08D' },
            ],
            image: 'Sanduiche-Mini.png',
            deployLink: 'https://6467df59c369830ee502a077--taupe-halva-605057.netlify.app',
            githubLink: 'https://github.com/KelsonSon/Sanduiche-Maker'
          },
          {
            id: 4,
            title: 'Potfolio',
            subtitle: 'Meu Portfolio - Vuetify',
            icons: [
              { icon: 'fa-brands fa-html5', color: '#E44D26' },
              { icon: 'fa-brands fa-css3-alt', color: '#264DE4' },
              { icon: 'fa-brands fa-vuejs', color: '#4FC08D' },
              { icon: 'fa-brands fa-vuejs', color: '#1976D2' },
            ],
            image: 'Portfolio-Mini.png',
            deployLink: 'https://646af1bd4560f30e3256e1a8--poetic-faloodeh-62dafb.netlify.app',
            githubLink: 'https://github.com/KelsonSon/Novo-Portfolio'
          },
          
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  #container {
    width: 100%;
    height: 100vh;
    border-top: 5px solid #f2f2f2;
    background-image: url('../../public/img/background2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  @media (max-width: 600px) {
    #container {
      height: 150vh;
    }
  }
  </style>
  