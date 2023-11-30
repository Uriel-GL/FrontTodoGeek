<template>
  <div class="bodyPelis">
    
    <v-carousel height="400" :show-arrows="false">
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
        ></v-carousel-item>
    </v-carousel>

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
                  type="card-avatar, actions"></v-skeleton-loader>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import ColorsApp from '../js/AppColors';
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';
import CardComponent  from '../components/CardComponent.vue'
import axios from "axios";
import { enviorment } from '../Services/envirorment'

export default {
    
    data: () => ({
        colors: ColorsApp,
        isLoading: false,
        animes: [],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }),

    components: {
        VSkeletonLoader,
        CardComponent
    },
    
    mounted(){
        axios.get(enviorment.apiUrl + '/Pelis/Resena/Película')
        .then(response => {
            this.animes = response.data;
        })
        .catch(error => {
            console.error('No se pudieron cargar los datos:', error)
        });
    },

};
</script>

<style scoped>
.bodyPelis {
  padding: 15px;
}
</style>