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

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyDKPXC3kGaBXBXHw5mgdRpXd1KyrAeeYMU",
  authDomain: "resenaspwa.firebaseapp.com",
  databaseURL: "https://resenaspwa-default-rtdb.firebaseio.com",
  projectId: "resenaspwa",
  storageBucket: "resenaspwa.appspot.com",
  messagingSenderId: "1041047557999",
  appId: "1:1041047557999:web:9e47d199fde808951a3a9a",
  measurementId: "G-BKGJYB34B0"
};


const app = initializeApp(firebaseConfig);





const messaging = getMessaging();


onMessage(messaging, (payload) => {
  
 alert(payload.notification.title)
});

getToken(messaging, { vapidKey: 'BEBUJuzOZ941cKXg4C7dOnFx_afen2YNJYhXJVWEZmA5kSVF2ybluwv92gotCh7rSFqTnih0keKgfZkl0IGYr7Q' }).then((currentToken) => {
  if (currentToken) {
   console.log(currentToken);
  } else {
   
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
</script>

<style scoped>

</style>
