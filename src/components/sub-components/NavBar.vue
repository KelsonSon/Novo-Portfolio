<template>
  <v-app-bar id="navbar" dark flat class="px-8">
    <v-btn icon>
      <v-icon size="45" color="#79F2D0">fa-solid fa-glasses</v-icon>
    </v-btn>
    <v-btn class="d-sm-none" id="menu" icon @click="toggleMenu">
      <v-icon v-if="!isMenuOpen" color="#79F2D0">mdi-menu</v-icon>
      <v-icon v-else color="#ffffff">mdi-close</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <nav :class="{ 'nav-sm': isMenuOpen }">
      <v-btn text @click="scrollToSection('#home')">Home</v-btn>
      <v-btn text @click="scrollToSection('#projetos')">Projetos</v-btn>
      <v-btn text @click="scrollToSection('#contatos')">Contatos</v-btn>
    </nav>
  </v-app-bar>
</template>
  
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    scroll(refName) {
      const element = document.querySelector(refName);
      if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
    this.isMenuOpen = false; // Feche o menu após clicar em um item
    },
    scrollToSection(refName) {
      this.$emit('navigate-to-section', refName);
      this.toggleMenu();
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>
  
  <style scoped>
  #navbar{
    background-color: transparent;
    position: relative;
    top: 0;
    margin-top: 0;
    margin-right: 80px;
    z-index: 999;
  }
  @media (max-width: 600px) {
    nav {
      height: 100vh;
      width: 60%;
      position: fixed;
      display: flex;
      flex-direction: column;
      left: 0;
      top: 0;
      align-items: center;
      justify-content: center;
      transform: translateX(-100%);
      transition: .6s ease;
      background-color: #41A8BF;
      
    }
    #navbar{
    
    margin-right: 10px;
    
    }
    
    #menu {
      position: fixed;
      right: 0;
    }
    .nav-sm {
      transform: translateX(0);
    }
  }
  </style>
  