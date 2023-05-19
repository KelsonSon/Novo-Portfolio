<template>
  <v-app>
    <SectionMain />
    <SectionProjects />
    <SectionContacts />
  </v-app>
</template>

<script>
import SectionProjects from '@/components/SectionProjects.vue';
import SectionMain from '@/components/SectionMain.vue';
import SectionContacts from '@/components/SectionContacts.vue';

export default {
  name: 'HomeView',
  components: {
    SectionMain,
    SectionProjects,
    SectionContacts
  },
  methods: {
    scrollToSection(refName) {
      const section = document.querySelector(refName);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  mounted() {
    this.$on('navigate-to-section', this.scrollToSection);
  }
};
</script>

<style scoped>

  
</style>
