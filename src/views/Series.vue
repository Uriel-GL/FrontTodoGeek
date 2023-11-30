<template>
    <div class="bodyAnimes">

        <v-row class="mt-4">
            <v-col v-for="anime in animes" :key="anime.id" cols="6" xxl="3" xl="3" lg="3" md="3" sm="3" xs="6">
                <CardComponent :data="anime"></CardComponent>
            </v-col>
        </v-row>
    </div>
    <div v-if="isLoading">
        <v-row>
            <v-col v-for="n in 4" :key="n" cols="6" xxl="3" xl="3" lg="3" md="3" sm="3" xs="6">
                <v-skeleton-loader
                    class="mx-auto border"
                    max-width="240"
                    max-height="370"
                    type="card-avatar, actions"
                ></v-skeleton-loader>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import ColorsApp from '../js/AppColors';
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';
import CardComponent  from '../components/CardSComponent.vue'
import axios from "axios";  
import { enviorment } from '../Services/envirorment'
export default {
    data(){
        return{
            colors: ColorsApp,
            isLoading: false,
            animes: []
        }
    },
    components: {
        VSkeletonLoader,
        CardComponent
    },
    mounted(){
        axios.get(enviorment.apiUrl + '/Pelis/Resena/Serie')
        .then(response => {
            this.animes = response.data;
        })
        .catch(error => {
            console.error('No se pudieron cargar los datos:', error)
        });
    },
    methods: {
        
    }
}
</script>

<style scoped>
.bodyAnime {
  padding: 15px;
}
</style>