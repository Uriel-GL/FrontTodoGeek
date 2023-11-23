<template>
    <div class="cards-container">
        <v-row class="d-flex justify-center align-center">
            <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                <v-card class="custom-card">
                    <v-card class="poster-image">
                        <v-img class="image" src="/src/assets/Movie.png" alt="Película"></v-img>
                    </v-card>
                    <div>
                        <v-btn prepend-icon="$vuetify" append-icon="$vuetify" class="geek-button" @click="verMovies()">
                            Movies
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                <v-card class="custom-card">
                    <v-btn prepend-icon="$vuetify" append-icon="$vuetify" class="geek-button" @click="verSeries()">
                            Series
                        </v-btn>
                    <v-card class="poster-image">
                        <v-img class="image" src="/src/assets/Serie.png" alt="Serie"></v-img>
                    </v-card>
                  
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                <v-card class="custom-card">
                    <v-card class="poster-image">
                        <v-img class="image" src="/src/assets/Anime.png" alt="Anime"></v-img>
                    </v-card>
                    <div>
                        <v-btn prepend-icon="$vuetify" append-icon="$vuetify" class="geek-button" @click="verAnimes()">
                            Anime
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                <v-card class="custom-card">
                    <v-btn prepend-icon="$vuetify" append-icon="$vuetify" class="geek-button" @click="verGames()">
                           Games
                        </v-btn>
                    <v-card class="poster-image">
                        <v-img class="image" src="/src/assets/Game.png" alt="Videojuego"></v-img>
                    </v-card>
                   
                </v-card>
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

export default {
    components: {
    },
    methods: {
        verMovies(){
            this.$router.push("/PelisView")
        },
        verSeries(){
            this.$router.push("/SeriesView")
        },
        verAnimes(){
            this.$router.push("/AnimesView")
        },
        verGames(){
            this.$router.push("/GamesView")
        }
    }
};
</script>
  
<style scoped>
.cards-container {
    background-image: linear-gradient(45deg, #3867D6, #5733FF, #F47521, #7213CB);
   

    justify-content: center;
    align-items: center;
}

.custom-card {
    width: 300px;
    height: 500px;
    margin-top: 10px;
    margin-bottom: -20px;
    box-shadow: 5px 5px 10px transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: transparent;
    /* Cambié a blanco para que sea visible en el gradiente */
    border-radius: 40px;
}

.poster-image {
    width: 80%;
    height: 400px;
    box-shadow: 5px 5px 10px #F47521;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: black;
    padding: 10px;
    border-radius: 10px;
}

.image {
    width: 100%;
    height: 100%;
    /* Ajustado el alto para que se vea mejor */
}

.geek-button {
    background-color: #F47521;
    margin: 10px;
    color: #fff;
    border: 4px solid #ffffff;
    transition: background-color 0.3s, color 0.3s;
}

.geek-button:hover {
    background-color: #000;
}
</style>
  