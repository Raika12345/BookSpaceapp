// auth-check.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    const currentPage = window.location.pathname;
    
    if (!user) {
        // Se não está logado e não está nas páginas de login/cadastro
        if (!currentPage.includes('login.html') && !currentPage.includes('cadastro.html')) {
            window.location.href = 'login.html';
        }
    } else {
        // Se está logado e está nas páginas de login/cadastro, redireciona para index
        if (currentPage.includes('login.html') || currentPage.includes('cadastro.html')) {
            window.location.href = 'index.html';
        }
    }
});
