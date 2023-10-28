<template>
    <h1>NOT FOUND</h1>
    <v-btn
        variant="outlined"
        rounded="15"
        :color="colors.PrimaryAnime"
        @click="regresar"
    >
        Regresar
    </v-btn>
</template>

<script>
import ColorsApp from '../js/AppColors';
export default {
    data: () => ({
        colors: ColorsApp,
    }),

    methods: {
        regresar(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>