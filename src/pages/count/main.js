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
   databaseURL: "https://avr-labs-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "avr-labs",
   storageBucket: "avr-labs.appspot.com",
   messagingSenderId: "625178762063",
   appId: "1:625178762063:web:46cffca303b2b12ba9033a",
   measurementId: "G-5YVBT5GW9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const sessionRef = ref(database, "sessions/f59d8fd489ff1fb8ad574300f1a86f40616f81a3/sessionTime");

get(sessionRef)
   .then((snapshot) => {
      if (snapshot.exists()) {
         const sessionTime = snapshot.val(); // например, 360:00:330 или 25:45:34
         console.log(sessionTime);

         const sessionTimeElement = document.querySelector(".session-time__text");

         // Разделяем время на часы, минуты и секунды
         let [hoursStr, minutesStr, secondsStr] = sessionTime.split(":");
         let hours = parseInt(hoursStr); // 360 или 25
         let minutes = parseInt(minutesStr); // 00 или 45
         let seconds = parseInt(secondsStr); // 330 или 34

         // Преобразуем секунды в минуты и оставшиеся секунды
         let extraMinutes = Math.floor(seconds / 60);
         seconds = seconds % 60;

         // Добавляем дополнительные минуты из секунд к текущим минутам
         minutes += extraMinutes;

         // Преобразуем минуты в часы и оставшиеся минуты
         let extraHours = Math.floor(minutes / 60);
         minutes = minutes % 60;

         // Добавляем дополнительные часы из минут к текущим часам
         hours += extraHours;

         // Преобразуем часы в дни и оставшиеся часы
         let days = Math.floor(hours / 24);
         let remainingHours = hours % 24;

         // Выводим результат
         sessionTimeElement.innerHTML = `<span>${days} дней</span> <span>${remainingHours} часов</span> <span>${minutes} минут</span> <span>${seconds} секунд</span>`;
      } else {
         console.log("No data available");
      }
   })
   .catch((error) => {
      console.error("Error fetching data:", error);
   });
