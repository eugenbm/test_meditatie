/**
 * MAIN.JS - Entry point pentru aplicație
 * Inițializează aplicația și gestionează lifecycle-ul
 */

import App from './app.js';

// Așteptă pentru DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function initApp() {
    const app = new App();
    app.init();
    
    // Expun pentru debugging
    window.__APP__ = app;
}
