<template>
    <v-container>
      <form
        action="https://formsubmit.co/kelson15k@gmail.com"
        method="POST"
        ref="emailForm"
        @onsubmit.prevent="submit()"
      >
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          name="name"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          name="email"
          required
        ></v-text-field>
        <v-textarea
        v-model="textarea"
          name="textarea"
          filled
          label="Mensagem"
          auto-grow
        ></v-textarea>
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://kelsonson.neocities.org">
        <v-btn  type="submit" class="mr-4">
          Enviar
        </v-btn>
      </form>
    </v-container>
  </template>
  
  <script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  
  export default {
    name: 'EmailForm',
    mixins: [validationMixin],
  
    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email }
    },
  
    data: () => ({
      name: '',
      email: '',
      textarea: '',
    }),
  
    methods: {
   
      
    }
  }
  </script>
  