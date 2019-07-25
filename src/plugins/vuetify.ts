import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';



Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },

    theme:{
        themes:{
            light:{
                primary: colors.blueGrey.darken3,
                success: colors.green.darken3,
                info: colors.brown.darken3,
                error: colors.deepOrange.darken3
                

            }
        }
    }



});