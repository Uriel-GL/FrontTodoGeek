<template>
    <v-card class="cardAnime mx-auto" max-width="240" height="400" elevation="2">
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
        <h4 class="mt-3">{{ data.nombre }}</h4>
        <v-btn block="" color="orange" @click="verDetalles(data.id)">Detalle</v-btn>
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
            this.$router.push({name: 'VistaDetalle', params: {id: Id}})
        }
      },
  };
  </script>
  
  <style scoped>
  
  .cardAnime {
    padding: 0;
    margin: 0;
  }
  
  .bodyCardAnime {
      padding: 10px;
  }
  
  </style>