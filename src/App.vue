<template>
  <v-app>
    <v-main>
      <v-conatiner fluid>
        <AppBarComponent></AppBarComponent>
        <router-view />
      </v-conatiner>
    </v-main>
  </v-app>
</template>

<script>
import AppBarComponent from './components/AppBarComponent.vue'
export default {
    name: "App",
    data: () => ({
        //
        addCustomClass: true,
    }),
    components: { AppBarComponent }
};
</script>

<style scoped>

</style>
