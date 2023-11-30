<template>
  <div class="bodyLogin mx-auto" elevation="7" style="padding: 15px">
    <v-row>
      <v-col class="mt-6" cols="12" md="6">
        <div class="form_card">
          <v-card-text class="text-center">
            <h1 class="text-center mt-3">Bienvenido</h1>
            <h4 class="text-center">Ingresa tu email para comenzar</h4>
            <v-form class="mt-4">
              <v-text-field
                variant="outlined"
                label="Correo Electronico"
                name="Email"
                prepend-inner-icon="mdi-email-outline"
                type="text"
                :color="colors.PrimaryAnime"
                v-model="Auth.correo"
              />
              <v-text-field
                variant="outlined"
                label="Contraseña"
                name="Password"
                prepend-inner-icon="mdi-lock-outline"
                type="password"
                :color="colors.PrimaryAnime"
                v-model="Auth.password"
              />
            </v-form>
            <a href="/forgot-password">¿Olvidaste tu Contraseña?</a>
            <br />
            <v-btn
              id="btn"
              block=""
              class="mt-4"
              rounded="15"
              text="Ingresar"
              :color="colors.PrimaryAnime"
              dark
              @click="login"
            />
          </v-card-text>
        </div>
      </v-col>

      <v-col class="info text-center mt-6" cols="12" md="6">
        <v-card-text class="mt-12">
          <h2>Descrube todo nuestro Contenido</h2>
          <h3 class="mt-4">Una Montaña de entretenimiento</h3>
        </v-card-text>
        <v-card-text>
          <a href="#">¿No tienes cuenta?</a>
          <br />
          <v-btn
            class="mt-4"
            id="btn"
            variant="outlined"
            rounded="15"
            :color="colors.PrimaryAnime"
            text="Registrarme"
            @click="goToRegister"
          />
          <h4 class="mt-8">Peliculas, Series, Animes y mas.</h4>
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AuthService from "../Services/AuthService.js";
import ColorsApp from "../js/AppColors";
export default {
  data: () => ({
    colors: ColorsApp,

    Auth: {
      correo: "",
      password: "",
    },

    visible: false,
  }),

  methods: {
    async login() {
      try {
        //Funcionamiento
        var response = await AuthService.login(this.Auth)
        
        if(response.status == 200) {
          var Id = response.data
          console.log(Id)
          localStorage.setItem('token', Id);
          this.$router.push('/principal')
        }else{
          alert("Las credenciales de usuario son incorrectas")
        }

      } catch (error) {
        //En caso de error
        console.log("Ocurrio un error inesperado\n" + error)
      }
    },

    goToRegister(){
      this.$router.push('/register')
    },
  },
};
</script>

<style scoped>

a {
  font-family: "Roboto";
  color: #f47521;
  text-decoration: none;
}

.bodyLogin {
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: #494949;
  /*background-color: #212942;
    box-shadow: 1px 1px 108.8px 19.2px rgb(25,31,53);
  */
  /*background-image: url("./src/images/fondo_3.jpeg");
  background-size: cover;
  background-repeat: no-repeat;*/
  
  background-position: center center;
}

#card-login {
  margin: 0 auto;
  width: 370px;
  height: 426px;
  border-radius: 15px;
  text-align: center;
  padding: 15px;
}

.info h2 {
  color: #f9f9f9;
}

.info h3 {
  color: #f9f9f9;
}

.info h4 {
  color: #f9f9f9;
}

#btnIngresar {
  color: #f9f9f9;
  background: #f47521;
}

#link {
  align-items: center;
  text-align: center;
}

.form_card {
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}
</style>