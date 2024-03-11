import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA039JQ55yjja6YSmN1GmdP21thStIHiSE",
    authDomain: "carprojectiot.firebaseapp.com",
    databaseURL: "https://carprojectiot-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "carprojectiot",
    storageBucket: "carprojectiot.appspot.com",
    messagingSenderId: "1015948675661",
    appId: "1:1015948675661:web:423099d8bf8c5e5c8c2a04"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };
