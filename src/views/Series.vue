<template>
    <div>
        <v-card v-for="serie in series" :key="serie.Id">
            <v-card-title>{{ serie.Title }}</v-card-title>
            <v-card-subtitle>{{ serie.Descripcion }}</v-card-subtitle>
            <v-card-item>{{ serie.Episodios }}</v-card-item>
            <v-img>{{ serie.Imagen }}</v-img>
        </v-card>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            series: []
        }
    },
    mounted(){
        axios.get('')
        .then(response => {
            this.series = response.data;
        })
        .catch(error => {
            console.error('No se pudieron cargar los datos:', error)
        });
    }
}
</script>