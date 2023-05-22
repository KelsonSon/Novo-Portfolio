<template>
   <v-footer id="footer">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>
<script>
export default {
    name: 'FooterBar'
}
</script>

<style scoped>
footer{
  width: 100%;
  bottom: 0;
}
</style>