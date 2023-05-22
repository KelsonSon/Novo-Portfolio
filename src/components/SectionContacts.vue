<template>
    <v-app id="contato">
        <v-container class="px-0" fluid id="container">
            <h1 class="text-center mb-5">Contatos</h1>
            <v-row class="fill-height mb-0" >
                <v-col cols="12" md="6">
                    <v-card
                    class="mx-auto h-100"
                    max-width="90%"
                    >
                    <v-card-title>
                       
                    <span class="text-h6 font-weight-light">Sobre mim</span>
                    </v-card-title>

                    <v-card-text class="text-h7 font-weight-bold">
                        Sou um desenvolvedor web front-end autodidata, apaixonado por tecnologia. Aprendi o que sei por meio de cursos específicos na área de desenvolvimento front-end. Nasci em Recife-PE e atualmente moro em Igarassu-PE. Decidi ingressar nessa área para seguir minha paixão e encontrar oportunidades de aprendizado e crescimento.
                    </v-card-text>
                    <v-card-text class="text-h7 font-weight-bold">
                        Minha motivação vem da possibilidade de criar interfaces interativas e envolventes que melhorem a experiência do usuário. Estou determinado a expandir meus conhecimentos e habilidades, seja por meio de cursos, workshops ou projetos práticos. Tenho experiência em HTML, CSS e JavaScript, mas estou constantemente explorando novas tecnologias e frameworks para me tornar um profissional mais completo e versátil.
                    </v-card-text>
                    <v-card-text class="text-h7 font-weight-bold">
                        Estou entusiasmado com as possibilidades que a área de desenvolvimento front-end oferece. Adoro enfrentar desafios e trabalhar em equipe para criar produtos e experiências incríveis. Ser um desenvolvedor web front-end autodidata é mais do que uma ocupação para mim, é uma paixão que me impulsiona a buscar conhecimento, inovação e crescimento constantes. Estou comprometido em fazer o que amo e ansioso para as oportunidades que estão por vir.
                    </v-card-text>

                    <v-card-actions>
                    <v-list-item class="grow">
                        <v-list-item-avatar>
                        <v-img
                            class="elevation-6"
                            alt=""
                            src="../../public/img/Avatar-Maker (1).png"
                        ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title>Kelson Soares</v-list-item-title>
                        </v-list-item-content>

                        
                    </v-list-item>
                    </v-card-actions>
                </v-card>
                </v-col>
                <v-col cols="12" md="6" class=" d-flex flex-column justify-start px-15">
                   <v-list >
                        <v-list-item-group>
                            <v-list-item href="https://github.com/KelsonSon" target="_blank">
                            <v-list-icon >
                                <v-icon >fa-brands fa-github</v-icon>
                            </v-list-icon>
                            <v-list-item-content class="mx-1">
                               
                            <v-list-item-title>GitHub</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                        <v-divider></v-divider>
                        <v-list-item-group>
                            <v-list-item href="https://www.linkedin.com/in/kelson-soares-a39a14261/?" target="_blank">
                            <v-list-icon >
                                <v-icon >fa-brands fa-linkedin</v-icon>
                            </v-list-icon>
                            <v-list-item-content class="mx-1">
                               
                            <v-list-item-title>Linkedin</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                        <v-divider></v-divider>
                        <v-list-item-group>
                            <v-list-item href="https://api.whatsapp.com/send/?phone=5581984378161&text&type=phone_number&app_absent=0" target="_blank">
                            <v-list-icon >
                                <v-icon >fa-brands fa-whatsapp</v-icon>
                            </v-list-icon>
                            <v-list-item-content class="mx-1">
                               
                            <v-list-item-title>Whatsapp</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                   </v-list>
                   <v-divider></v-divider>
                   <v-div>

                    <EmailForm />

                   </v-div>
                </v-col>
                <FooterBar />
            </v-row>
            
        </v-container> 
    </v-app>
</template>

<script>
import FooterBar from './sub-components/FooterBar.vue';
import EmailForm from './sub-components/EmailForm.vue'
export default {
    name: 'SectionContacts',
    components:{
        FooterBar,
        EmailForm
    }
}
</script>
<style scoped>
#container{
    height: 100vh;
    border-top: 5px solid #f2f2f2;
    background-color: #141414;
    
    
}

@media (max-width: 600px) {
    #container {
        height: auto;
        min-height: 100vh;
    }
}
</style>