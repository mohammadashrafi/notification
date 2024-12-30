/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts(
  "./firebase-app-compat.js"
);
 importScripts(
  "./firebase-messaging-compat.js"
);


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp = {
  apiKey: "AIzaSyCSAloRZeWAeLW3UyROIxgErZN_lRr4z1c",
  authDomain: "push-notification-6cecf.firebaseapp.com",
  projectId: "push-notification-6cecf",
  storageBucket: "push-notification-6cecf.firebasestorage.app",
  messagingSenderId: "547634632636",
  appId: "1:547634632636:web:490bdf57aaea15a9433db9",
  measurementId: "G-HPDTCH9GFG",
};

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
