<template>
  <div class="bodyFP">
    <!-- variant="tonal" color="#F47521" -->
    <v-card class="text-center" elevation="7" :loading="isLoading">
      <v-card-title>¿Olvidaste tu contraseña?</v-card-title>
      <v-card-subtitle>Recupera tu cuenta</v-card-subtitle>

      <v-card-text class="bodycard text-center">
        <p>
          Simplemente ingrese la dirección de correo electrónico asociada con su
          cuenta y le enviaremos un vínculo para restablecer su contraseña.
        </p>

        <v-form class="mt-4">
          <v-text-field
            variant="outlined"
            label="Correo de Recuperación"
            name="Email"
            prepend-inner-icon="mdi-email-outline"
            type="email"
            :color="colors.PrimaryAnime"
            v-model="correo"
          />
        </v-form>

        <v-btn
          id="btnRecuperar"
          rounded="15"
          text="Recuperar"
          :color="colors.PrimaryAnime"
          dark
          :disabled="isDisabled"
          @click="ForgotPassword"
        />

        <v-btn
          id="btnCancelar"
          rounded="15"
          variant="text"
          text="Cancelar"
          :color="colors.PrimaryAnime"
          dark
          @click="cancelar"
        />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import AuthService from "../Services/AuthService";
import ColorsApp from "../js/AppColors";

export default {
  data: () => ({
    colors: ColorsApp,

    isLoading: false,
    isDisabled: false,
    correo: "",
  }),

  methods: {
    async ForgotPassword() {
      try {
        this.isLoading = true;
        this.isDisabled = true;
        var response = await AuthService.forgotPassword();
        console.log(response.status);
      } catch (error) {
        console.log("Ocurrio un error inesperado\n" + error);
      }
    },

    cancelar() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.bodycard {
  padding: 20px;
}

.bodyFP {
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("./src/images/fondo_1.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#btnRecuperar {
  /*width: 100%;*/
  border-radius: 9px;
}

#btnCancelar {
  /*width: 100%;*/
  border-radius: 9px;
}
</style>