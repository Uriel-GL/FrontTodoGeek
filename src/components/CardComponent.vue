<template>
  <v-card class="cardPeli mx-auto" max-width="240" height="370" elevation="2">
    <v-img
      class="align-end text-white"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="280px"
      cover
    >
    </v-img>
    <div class="bodyCardPeli">
      <v-row>
        <v-col cols="7">
          <v-chip color="secondary" link>
            <v-icon
              icon="mdi mdi-high-definition"
              size="26"
              color="primary"
            ></v-icon>
          </v-chip>
        </v-col>
        <v-col cols="5">
          <v-chip color="warning" link>
            <v-rating
              readonly
              length="1"
              size="25"
              model-value="1"
              color="warning"
              active-color="warning"
            />
            <span class="text-caption me-2">4.8</span>
          </v-chip>
        </v-col>
      </v-row>
      <h4 class="mt-3">Pelicula HD</h4>
    </div>
  </v-card>

  <!-- <v-card class="cardPeli mt-4" max-width="240" height="370" elevation="2">
        <v-img
            class="align-end text-white"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="370px"
            cover
        >
            <div class="chipHd">
                <v-chip class="ma-2" color="" variant="tonal" link>
                    <v-icon icon="mdi mdi-high-definition" size="26" :color="colors.TextPrimary">
                    </v-icon>
                </v-chip>
            </div>

            <div class="chipStar">
                <v-chip class="ma-2" color="warning" variant="tonal" link>
                    <v-rating
                        readonly
                        length="1"
                        size="25"
                        model-value="1"
                        color="warning"
                        active-color="warning"
                    />
                    <span class="text-grey-lighten-5 font-weight-bold text-caption me-2">4.8</span>
                </v-chip>
            </div>
            
            
            <div class="Title">
                <v-card-title>Pelicula HD</v-card-title>
            </div>
        </v-img>
    </v-card> -->

</template>

<script>
export default {
    name: "AppBarComponent",

    props: ['data'],

    data: () => ({      
    }),
};
</script>

<style scoped>

.cardPeli {
  padding: 0;
  margin: 0;
}

.bodyCardPeli {
    padding: 10px;
}

</style>