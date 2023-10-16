<template>
    <v-app-bar style="background-color: #2d3436" elevation="2">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/tiendaservicios-b7281.appspot.com/o/Imagenes%2FLOGO.png?alt=media&token=11c0c69a-5b47-4ac6-b1f3-acd299492adb&_gl=1*1hz4lps*_ga*NzIwMjY2NTg1LjE2ODg2NjQ4MDA.*_ga_CW55HF8NVT*MTY5NzE3NTI1Ny4yNi4xLjE2OTcxNzY3NTIuMi4wLjA."
        width="46"
        height="46"
        alt=""
      />
      <v-app-bar-title style="color: #f9f9f9">TodoGeek</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn id="btn_navbar">Iniciar Sesión</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppBarComponent",

  components: {},

  data: () => ({
    //
  }),
}
</script>

<style>
#btn_navbar{
  border-radius: 9px;
  color: #F9F9F9;
  background-color: #f47521;
}
</style>