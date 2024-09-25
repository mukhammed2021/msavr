import "./style.scss";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBmbM24X5rKdYSp9TL-xlPbwMW--UbUak",
  authDomain: "avr-labs.firebaseapp.com",
  databaseURL:
    "https://avr-labs-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "avr-labs",
  storageBucket: "avr-labs.appspot.com",
  messagingSenderId: "625178762063",
  appId: "1:625178762063:web:46cffca303b2b12ba9033a",
  measurementId: "G-5YVBT5GW9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const sessionRef = ref(
  database,
  "sessions/f59d8fd489ff1fb8ad574300f1a86f40616f81a3/sessionTime"
);

get(sessionRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const sessionTime = snapshot.val(); // 00:00:10
      console.log(sessionTime);

      const sessionTimeElement = document.querySelector(".session-time");
      let hours = sessionTime.slice(0, 2); // 00
      let minutes = sessionTime.slice(3, 5); // 00
      let seconds = sessionTime.slice(6);
      sessionTimeElement.innerText = `${hours} часов ${minutes} минут ${seconds} секунд`;
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
