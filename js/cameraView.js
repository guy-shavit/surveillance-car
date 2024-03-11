// Ensure Firebase is initialized before using it
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyA039JQ55yjja6YSmN1GmdP21thStIHiSE",
    authDomain: "carprojectiot.firebaseapp.com",
    databaseURL: "https://carprojectiot-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "carprojectiot",
    storageBucket: "carprojectiot.appspot.com",
    messagingSenderId: "1015948675661",
    appId: "1:1015948675661:web:423099d8bf8c5e5c8c2a04"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the database
const database = getDatabase(firebaseApp);

// Firebase Realtime Database Get IP address
const camStream = document.getElementById('camStream');
let ipAddress;



// Get the IP address from the database and update the iframe src
onValue(ref(database, '/ip'), (snapshot) => {
    ipAddress = snapshot.val();
    camStream.src = `http://${ipAddress}:81/stream`;    
    console.log(ipAddress)


});

    // Redirect to the IP control page when the button is clicked
    redirectToIpButton.addEventListener('click', () => {
      window.location.href = `http://${ipAddress}`;
      console.log(ipAddress)
  });