// signup.js
import { app, db } from "/js/firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

function signup() {
    const auth = getAuth(app);
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Handle successful signup
            set(ref(db, `users/${userCredential.user.uid}`), {
                loggedIn: true,
                email: email, // Store the email in the database
            });
            console.log("Signup successful", userCredential);
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // Handle signup error
            alert(error.message);
            console.error("Signup error", error.message);
        });
}

// Adding signup function to the global scope
window.signup = signup;