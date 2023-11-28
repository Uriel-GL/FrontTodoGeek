<template>
    <v-card class="cardAnime mx-auto" max-width="240" height="470" elevation="2">
      <v-img
        class="align-end text-white"
        height="280px"
        cover
        :src="data.imagen"
      >
      </v-img>
      <div class="bodyCardAnime">
        <v-row>
          <v-col cols="8">
            <v-chip color="secondary" link>
              {{ data.autor }}
            </v-chip>
          </v-col>
          <v-col cols="4">
            <v-chip color="warning" link>
              {{ data.capitulos }}
            </v-chip>
          </v-col>
        </v-row>
        <br>
        <v-row>
          <v-col>
            <h4 class="mt-3">{{ data.nombre }}</h4>
            <v-btn block="" color="orange" @click="goTodetalle(data.id)">Detalle</v-btn>

          </v-col>
        </v-row>
      </div>
    </v-card>
  </template>
  
  <script>
  export default {
      name: "AppBarComponent",
  
      props: ['data'],
  
      data: () => ({   
           
      }),
      created(){
        console.log(this.data)
      },
      methods: {
        verDetalles(Id){
          this.$router.push(`/detalleMultimedia/${Id}`)
        },
        goTodetalle(id){
          this.$router.push(`/detalleMultimedia/${id}`)
        }
      },
  };
  </script>
  
  <style scoped>
  
  .cardAnime {
    padding: 20px;
    margin: 0;

  }
  
  .bodyCardAnime {
      padding: 10px;
  }
  
  </style>