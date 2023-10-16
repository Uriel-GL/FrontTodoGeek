<template>
  <div class="bodyRegister">
    <v-row>
      <v-col cols="12" md="7">
        <v-card class="card mx-auto pa-11 pb-8">
          <v-row>
              <v-card-text class="text-center">
                <h1 class="text-center mt-4">Bienvenido</h1>
                <h4 class="text-center mt-4">Ingresa tu email para comenzar</h4>
                <v-form class="mt-4">
                  <v-text-field
                    variant="outlined"
                    label="Correo Electronico"
                    name="Email"
                    prepend-inner-icon="mdi-email-outline"
                    type="text"
                    color="#f47521"
                  />
                  <v-text-field
                    variant="outlined"
                    label="Contraseña"
                    name="Password"
                    prepend-inner-icon="mdi-lock-outline"
                    type="password"
                    color="#f47521"
                  />
                </v-form>
                <a href="#">¿Olvidaste tu Contraseña?</a>
                <br />
                <v-btn
                  id="btn"
                  block=""
                  class="mt-4"
                  rounded="15"
                  text="Ingresar"
                  color="#f47521"
                  dark
                />
              </v-card-text>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="5"> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card{
    width: 100%;
}
</style>