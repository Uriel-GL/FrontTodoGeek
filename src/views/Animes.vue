<template>
    <div>
        <v-card v-for="anime in animes" :key="anime.Id">
            <v-card-title>{{ anime.Title }}</v-card-title>
            <v-card-subtitle>{{ anime.Descripcion }}</v-card-subtitle>
            <v-card-item>{{ anime.Episodios }}</v-card-item>
            <v-img>{{ anime.Imagen }}</v-img>
        </v-card>
    </div>
</template>
<script>
import axios from 'axios';  
export default {
    data(){
        return{
            animes: []
        }
    },
    mounted(){
        axios.get('')
        .then(response => {
            this.animes = response.data;
        })
        .catch(error => {
            console.error('No se pudieron cargar los datos:', error)
        });
    }
}
</script>