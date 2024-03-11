// login.js
import { app, db } from "/js/firebase.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

function login() {
    const auth = getAuth(app);
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Handle successful login
            const user = userCredential.user;

            set(ref(db, `users/${user.uid}`), {
                loggedIn: true,
                email: email, // Store the email in the database
            })
            .then(() => {
                // Listen for the authentication state change event
                onAuthStateChanged(auth, (updatedUser) => {
                    if (updatedUser) {
                        // Redirect to main page after authentication state change
                        window.location.href = 'main.html';
                    } else {
                        // Handle the case where the user is not authenticated
                        window.location.href = 'login.html';
                    }
                });
            })
            .catch((error) => {
                console.error("Error updating user status in database", error);
            });
        })
        .catch((error) => {
            // Handle login error
            alert("Password or email are incorrect");
            console.error("Login error", error.message);
        });
}

window.login = login;
