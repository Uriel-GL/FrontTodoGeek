<template>
   
    <div class="cards-container">
        <v-row class="d-flex justify-center align-center">
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <v-card class="custom-card" style="flex: 1;">
                    <v-card-title class="game-title" style="background-color: red;">
                        {{ game.nombre }}
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col cols="6">
                                <strong>Estreno:</strong>{{ game.fecha }}<br>

                                <strong>Direcctor:</strong> {{ game.autor }}<br>
                                <strong>Genero:</strong> {{ game.genero }}<br>
                                <strong>Tipo:</strong> {{ game.tipo }}<br>
                                <strong>Idioma:</strong> {{ game.idioma }}<br>
                                <strong>Capitulos:</strong> {{ game.capitulos }}<br>
                                <strong>Duración:</strong> {{ game.duracion }}<br>
                            </v-col>
                            <v-col cols="6">
                                <strong>Reparto:</strong>
                                <ul>
                                    <li v-for="reparto in game.reparto" :key="reparto">{{ reparto }}</li>
                                </ul>
                                <strong>Disponible en:</strong>
                                <ul>
                                    <li v-for="plataforma in game.plataforma" :key="plataforma">{{ plataforma }}</li>
                                </ul>
                            </v-col>

                        </v-row>
                    </v-card-text>

                    <v-rating class="game-rank" v-model="game.ranking" icon="mdi-star" half-increments size="64"
                        color="amber"></v-rating>
                    <v-card class="rank-section" :class="getRankClass(game.ranking)" ref="rankSection">
                        {{ getRankText(game.ranking) }}
                    </v-card>


                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <v-card class="custom-card d-flex align-center justify-center" style="flex: 1;">
                    <iframe class="youtube-frame" :src="`https://www.youtube.com/embed/${game.video}`"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <v-card-text class="game-sinopsis">{{ game.sinopsis }}</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card class="custom-card-rese">
                    <v-card-text class="game-review">
                        <v-card-title class="game-title" style="background-color: red;">
                            reseña de {{ game.nombre }}
                        </v-card-title>
                        <div v-html="game.resena"></div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">


                <div v-if="suggestedGames.length === 0" class="d-flex align-center justify-center">
                    <p>Cargando sugerencias...</p>
                </div>
                <v-carousel cycle hide-delimiters class="d-flex align-center justify-center" v-else>
                    <v-carousel-item v-for="suggestedGame in suggestedGames" :key="suggestedGame.id">
                        <v-card class="custom-card-sug">
                            <v-img class="imagen" :src="suggestedGame.imagen" :alt="suggestedGame.nombre"></v-img>
                            <v-card-actions>
                                <router-link :to="'/detalleMultimedia/' + suggestedGame.id">
                                    Ver detalles
                                </router-link>
                            </v-card-actions>
                        </v-card>
                    </v-carousel-item>
                </v-carousel>

            </v-col>
        </v-row>
    </div>

    <v-footer color="black" app>
        <v-spacer></v-spacer>
        <span class="white--text">&copy; 2023 Universidad Tecnológica Tula. Todos los derechos reservados.</span>
        <v-spacer></v-spacer>
    </v-footer>
</template>
  
<script>
import axios from 'axios';
import menu from "../components/AppBarComponent.vue";

export default {
    data() {
        return {
            game: {},
            suggestedGames: [],
        };
    },
    components: {
        "menu-app": menu,
    },
    mounted() {
        this.loadGameInfo();
        this.getSuggestedGames();
    },

    watch: {
        '$route.params.id': 'loadGameInfo',
    },

    methods: {
        getSuggestedGames() {
            axios.get(`https://localhost:7121/api/Pelis/Resena/${this.game.tipo}`)
                .then(response => {
                    console.log(this.game.tipo)
                    console.log(response.data);
                    this.suggestedGames = response.data;
                })
                .catch(error => {
                    console.error(error);
                });

        },

        loadGameInfo() {


            axios.get(`https://localhost:7121/api/Pelis/${this.$route.params.id}`)
                .then((response) => {
                    this.game = response.data;
                })
                .catch((err) => {
                    alert(err);
                });
        },
        getRankClass(ranking) {
            if (ranking >= 4.0) return 'green';
            if (ranking >= 2.0) return 'yellow';
            return 'red';
        },
        getRankText(ranking) {
            if (ranking >= 4.0) return 'Excelente';
            if (ranking >= 2.0) return 'Bueno';
            return 'Malo';
        },
    },
};
</script>


  
<style scoped>
.cards-container {
    background-image: linear-gradient(45deg, #3867D6, #5733FF, #F47521, #7213CB);
    width: 100%;
}

.custom-card {
    width: 90%;
    height: 100%;
    margin: 20px;
    box-shadow: 5px 5px 10px #f47521;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
}

.custom-card-rese {

    align-content: center;
    margin: 20px;
    box-shadow: 5px 5px 10px #f47521;
    background-color: #fff;
    border-radius: 10px;
}

.custom-card-sug {
    margin: 20px;
    align-content: center;
    box-shadow: 5px 5px 10px #f47521;
    background-color: #fff;
    border-radius: 10px;
    width: 300px;
    height: 300px;
}

.imagen {
    width: 300px;
    height: 250px;
}

.game-title {
    font-size: xx-large;
    /* Tamaño de letra */
    color: #fff;
    /* Color del texto */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

.game-rank {
    display: flex;
    justify-content: center;
    align-items: center;
}

.info-row {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}

.game-feature {
    margin-top: 5px;
}

.game-platform {
    margin-top: 5px;
}

.youtube-frame {
    width: 100%;
    aspect-ratio: 16/9;
}

.game-sinopsis {
    text-align: justify;
    padding: 16px;
}

.game-review {
    text-align: justify;
    padding: 16px;

}

.rank-section {
    text-align: center;
    color: white;
}

.green {
    background-color: green;
}

.yellow {
    background-color: yellow;
}

.red {
    background-color: red;
}

ul {
    list-style-type: none;
    /* Quita los puntos de las listas no ordenadas */
}
</style>
  