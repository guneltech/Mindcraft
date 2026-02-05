/**
 * Mindcraft MVP - App Logic
 */

// Simple Router / State
const App = {
    state: {
        user: null,
        currentView: 'view-loading',
    },

    init() {
        console.log('Mindcraft Initializing...');
        this.cacheDOM();
        this.bindEvents();

        // Simulate Auth Check for MVP scaffolding
        setTimeout(() => {
            this.router('view-login');
        }, 1000);
    },

    cacheDOM() {
        this.dom = {
            views: document.querySelectorAll('.view'),
            loginBtnGuest: document.getElementById('login-guest-btn'),
            startGameBtn: document.getElementById('start-game-btn'),
            homeBtn: document.getElementById('home-btn'),
            logoutBtn: document.getElementById('logout-btn'),
            mainHeader: document.getElementById('main-header'),
        };
    },

    bindEvents() {
        this.dom.loginBtnGuest.addEventListener('click', () => this.loginAsGuest());
        this.dom.startGameBtn.addEventListener('click', () => {
            // In future steps: Import Game Module and start it
            this.router('view-game');
            console.log("Game started (placeholder)");
        });
        this.dom.homeBtn.addEventListener('click', () => this.router('view-home'));
        this.dom.logoutBtn.addEventListener('click', () => this.logout());
    },

    router(viewId) {
        // Hide all views
        this.dom.views.forEach(el => el.classList.add('hidden'));
        this.dom.views.forEach(el => el.classList.remove('active'));

        // Show target view
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.remove('hidden');
            target.classList.add('active');
            this.state.currentView = viewId;
        }

        // Toggle Header
        if (viewId === 'view-login' || viewId === 'view-loading') {
            this.dom.mainHeader.classList.add('hidden');
        } else {
            this.dom.mainHeader.classList.remove('hidden');
        }
    },

    loginAsGuest() {
        // Mock Login
        this.state.user = { uid: 'guest123', name: 'Guest' };
        this.router('view-home');
    },

    logout() {
        this.state.user = null;
        this.router('view-login');
    }
};

// Start App when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
