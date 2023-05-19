import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont: 'fa' || 'md' || 'mdi'
    },
    theme:{
        dark: true,
        themes: {
            dark:{
                background: '#0D0000',
                color: '#F2F2F2',
                primary: '#79F2D0',
                secondary: '#41A8BF',
                    
                
            },
            
        }
    }
});
