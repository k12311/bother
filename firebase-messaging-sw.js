
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB4DjxxWFZvaN54loy0fzo010sxslXfMeg",
  authDomain: "ffjj-67dcf.firebaseapp.com",
  projectId: "ffjj-67dcf",
  storageBucket: "ffjj-67dcf.firebasestorage.app",
  messagingSenderId: "572382978762",
  appId: "1:572382978762:web:83302fb8bcbee65be5ca33",
  measurementId: "G-P8FYRJH421"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: icon || "/icon-192.png"
  });
});
