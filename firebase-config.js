// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCKtOZvzRGI_ljQV2SRpMPqxDFjxRDxGyY",
    authDomain: "bookspace-app-b7504.firebaseapp.com",
    projectId: "bookspace-app-b7504",
    storageBucket: "bookspace-app-b7504.firebasestorage.app",
    messagingSenderId: "472939929897",
    appId: "1:472939929897:web:de752fa0932a7857c01738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
