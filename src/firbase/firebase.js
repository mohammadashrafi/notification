// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCSAloRZeWAeLW3UyROIxgErZN_lRr4z1c",
  authDomain: "push-notification-6cecf.firebaseapp.com",
  projectId: "push-notification-6cecf",
  storageBucket: "push-notification-6cecf.firebasestorage.app",
  messagingSenderId: "547634632636",
  appId: "1:547634632636:web:490bdf57aaea15a9433db9",
  measurementId: "G-HPDTCH9GFG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);
export const generateToken = async () => {
  const result = await navigator.permissions.query({ name: "notifications" });
  if (result.state === "granted") {
    await getToken(messaging, {
      vapidKey:
        "BI6a8b38muUqQtDHzHse12wy-As4ODtAL_7SEHnNOOZkebwPjbCKoaAgZDeI1kKLP1sFWATDuGQNerM-3naYqWI",
    });
  }
};
