importScripts('https://www.gstatic.com/firebasejs/9.6.8/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.8/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDKPXC3kGaBXBXHw5mgdRpXd1KyrAeeYMU",
  authDomain: "resenaspwa.firebaseapp.com",
  projectId: "resenaspwa",
  storageBucket: "resenaspwa.appspot.com",
  messagingSenderId: "1041047557999",
  appId: "1:1041047557999:web:9e47d199fde808951a3a9a",
  measurementId: "G-BKGJYB34B0"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});