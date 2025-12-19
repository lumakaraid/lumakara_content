/**
 * Futuristic UI Effects - Production Version
 * Subtle enhancements only - does not interfere with existing functionality
 */

(function() {
    'use strict';
    
    // Only initialize once
    if (window._futuristicInit) return;
    window._futuristicInit = true;
    
    // ==================== PARTICLE BACKGROUND ====================
    function createParticles() {
        const container = document.createElement('div');
        container.id = 'particles-bg';
        container.style.cssText = `
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        document.body.prepend(container);
        
        // Create 15 subtle particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 3 + 1;
            const left = Math.random() * 100;
            const delay = Math.random() * 20;
            const duration = Math.random() * 30 + 25;
            const hue = Math.random() > 0.5 ? 240 : 280;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${left}%;
                bottom: -10px;
                background: hsla(${hue}, 70%, 60%, 0.25);
                border-radius: 50%;
                animation: particleRise ${duration}s linear ${delay}s infinite;
                box-shadow: 0 0 ${size * 2}px hsla(${hue}, 70%, 60%, 0.15);
            `;
            
            container.appendChild(particle);
        }
    }
    
    // Add particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleRise {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 0.25; }
            90% { opacity: 0.25; }
            100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // ==================== INITIALIZE ====================
    function init() {
        try {
            createParticles();
            console.log('✨ Futuristic effects loaded');
        } catch (e) {
            console.warn('Futuristic effects error:', e);
        }
    }
    
    // Initialize after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        setTimeout(init, 100);
    }
})();
