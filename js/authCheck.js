// authCheck.js
import { app, db } from "/js/firebase.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { set, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const auth = getAuth(app);

function displayLoggedInUsers() {
    const loggedInUsersList = document.getElementById("loggedInUsersList");

    // Clear the existing list
    loggedInUsersList.innerHTML = "";

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            const userRef = ref(db, `users/${user.uid}/loggedIn`);

            onValue(userRef, (snapshot) => {
                const loggedIn = snapshot.val();
                if (loggedIn) {
                    // Display the user's email in the list
                    const listItem = document.createElement('li');
                    listItem.textContent = user.email;
                    loggedInUsersList.appendChild(listItem);
                } else {
                    // Redirect to login page or perform some action for unauthenticated users
                    window.location.href = 'index.html';
                }
            });
        } else {
            // User is not signed in, redirect to login page
            window.location.href = 'index.html';
        }
    });
}

function logout() {
    const user = auth.currentUser;

    if (user) {
        set(ref(db, `users/${user.uid}/loggedIn`), false)
            .then(() => {
                return signOut(auth);
            })
            .then(() => {
                console.log("User logged out successfully");
                // Redirect or perform other actions after logout
                window.location.href = 'login.html';
            })
            .catch((error) => {
                console.error("Logout error", error.message);
            });
    }
}

// Call the function to display logged-in users when the page loads
displayLoggedInUsers();

// Adding logout function to the global scope
window.logout = logout;
