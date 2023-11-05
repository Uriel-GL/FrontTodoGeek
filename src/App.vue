<template>
  <v-app>
    <v-main>
      <v-conatiner fluid>
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

<style>
:root {
 font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
</style>
