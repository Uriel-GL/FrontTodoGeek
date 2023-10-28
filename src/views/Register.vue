<template>
  <div class="bodyRegister">
    <v-card class="text-center" max-width="600" :loading="isRegister">
      <v-card-title>Crea tu Cuenta</v-card-title>
      <v-card-subtitle
        >Accede a todo nuestro contenido de entretenimiento.</v-card-subtitle
      >

      <div class="formRegister">
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  variant="outlined"
                  label="Ingresa tu nombre"
                  prepend-inner-icon="mdi-account"
                  type="text"
                  :color="colors.PrimaryAnime"
                  :rules="[rules.Nombre]"
                  v-model="UsuarioDto.personas.Nombre"
                  required
                />
              </v-col>

              <v-col cols="6">
                <v-text-field
                  variant="outlined"
                  label="Apellido Paterno"
                  prepend-inner-icon="mdi-account"
                  type="text"
                  :color="colors.PrimaryAnime"
                  :rules="[rules.APaterno]"
                  v-model="UsuarioDto.personas.ApellidoPaterno"
                  required
                />
              </v-col>

              <v-col cols="6">
                <v-text-field
                  variant="outlined"
                  label="Apellido Materno"
                  prepend-inner-icon="mdi-account"
                  type="text"
                  :color="colors.PrimaryAnime"
                  :rules="[rules.AMaterno]"
                  v-model="UsuarioDto.personas.ApellidoMaterno"
                  required
                />
              </v-col>

              <v-col cols="12">
                <v-text-field
                  variant="outlined"
                  label="Núm Telefono"
                  placeholder="Ingresa tu numero de telefono"
                  prepend-inner-icon="mdi-phone"
                  type="text"
                  :color="colors.PrimaryAnime"
                  :rules="[rules.Telefono]"
                  v-model="UsuarioDto.personas.Telefono"
                  required
                />
              </v-col>

              <v-col cols="6">
                <v-text-field
                  variant="outlined"
                  label="Estado"
                  placeholder="Ingresa tu Estado"
                  prepend-inner-icon="mdi-earth"
                  type="text"
                  :color="colors.PrimaryAnime"
                  :rules="[rules.Estado]"
                  v-model="UsuarioDto.personas.Lugar"
                  required
                />
              </v-col>

              <v-col cols="6">
                <v-text-field
                  variant="outlined"
                  label="Municipio"
                  placeholder="Ingresa tu Municipio"
                  prepend-inner-icon="mdi-earth"
                  type="text"
                  :color="colors.PrimaryAnime"
                  :rules="[rules.Municipio]"
                  v-model="UsuarioDto.personas.EstadoLugar"
                  required
                />
              </v-col>

              <v-col cols="12">
                <v-text-field
                  variant="outlined"
                  label="Correo Electronico"
                  prepend-inner-icon="mdi-email-outline"
                  type="email"
                  :color="colors.PrimaryAnime"
                  :rules="[rules.Correo]"
                  v-model="UsuarioDto.auth.correo"
                  required
                />
              </v-col>

              <v-col cols="12">
                <v-text-field
                  variant="outlined"
                  label="Contraseña"
                  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                  prepend-inner-icon="mdi-lock-outline"
                  :type="visible ? 'text' : 'password'"
                  :color="colors.PrimaryAnime"
                  :rules="[rules.Contrasenia]"
                  v-model="UsuarioDto.auth.Password"
                  @click:append-inner="visible = !visible"
                  required
                />
              </v-col>

              <v-col cols="6">
                <v-select
                  label="Sexo"
                  placeholder="Selecciona tu sexo"
                  variant="outlined"
                  prepend-inner-icon="mdi-gender-male-female"
                  :color="colors.PrimaryAnime"
                  v-model="UsuarioDto.personas.Sexo"
                  :rules="[rules.Sexo]"
                  :items="['Masculino', 'Femenino', '39 tipos de gay']"
                  required
                />
              </v-col>

              <v-col cols="6">
                <v-text-field
                  variant="outlined"
                  label="Fecha de Nacimiento"
                  placeholder="dd/mm/yyyy"
                  prepend-inner-icon="mdi-cake"
                  type="text"
                  :color="colors.PrimaryAnime"
                  :rules="[rules.FechaNacimiento]"
                  v-model="UsuarioDto.personas.FechaNacimiento"
                  required
                />
              </v-col>
            </v-row>
          </v-form>
          <v-btn
            class="btnRegistro mt-4"
            text="Registrarme"
            :color="colors.PrimaryAnime"
            :disabled="isDisabled"
            @click="registerUser"
          />
          <v-btn
            class="btnRegistro mt-4"
            text="Cancelar"
            variant="text"
            :color="colors.PrimaryAnime"
            :disabled="isDisabled"
            @click="cancelar"
          />
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import AuthService from "../Services/AuthService";
import ColorsApp from "../js/AppColors.js";
export default {
  data: () => ({
    visible: false,
    isRegister: false,
    isDisabled: false,
    colors: ColorsApp,
    UsuarioDto: {
      auth: {
        correo: "",
        Password: ""
      },

      personas: {
        Id: "",
        Nombre: "",
        ApellidoPaterno: "",
        ApellidoMaterno: "",
        Foto: "",
        Sexo: "",
        FechaNacimiento: "",
        Telefono: "",
        Estado: "",
        Lugar: "",
        EstadoLugar: "",
        IdAuth: "",
      },
    },
    rules: {
      Nombre: (value) => !!value || "El Nombre es requerido",
      APaterno: (value) => !!value || "El apellido paterno es requerido",
      AMaterno: (value) => !!value || "El apellido materno es requerido",
      Telefono: (value) => !!value || "El Núm de telefono es requerido",
      Estado: (value) => !!value || "El estado es requerido",
      Municipio: (value) => !!value || "El municipio paterno es requerido",
      Sexo: (value) => !!value || "El sexo paterno es requerido",
      FechaNacimiento: (value) => !!value || "La fecha es requerida",
      Correo: (value) => !!value || "Se requiere un correo",
      Contrasenia: (value) => !!value || "La contraseña es obligatoria",
    },
  }),
//Dmx6W34FMzSuwuaLSaAws62eROt2
  methods: {
    async registerUser() {
      try {
          this.isRegister = true;
          this.isDisabled = true;
          var response = await AuthService.register(this.UsuarioDto)
          console.log(response)

          setTimeout(() => {
            this.isRegister = false;
            this.isDisabled = false;
          }, "5000");

          if(response.status == 200){
            alert('Registro realizado con exito')
          }else{
            alert("Ocurrio un error intenta mas tarde.")
          }
        
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

<style>
.bodyRegister {
  padding: 16px;
  border-radius: 9px;
  display: flex;
  justify-content: center;
}

.formRegister {
  padding: 16px;
}

.btnRegistro {
  border-radius: 9px;
}
</style>