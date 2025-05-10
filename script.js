document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const animatedBox = document.getElementById('animatedBox');
    const triggerBtn = document.getElementById('triggerBtn');
    const colorBtn = document.getElementById('colorBtn');
    const saveBtn = document.getElementById('saveBtn');
    const usernameInput = document.getElementById('username');
    const userDataDiv = document.getElementById('userData');
    
    // Load saved data
    loadUserData();
    
    // Trigger animation button
    triggerBtn.addEventListener('click', function() {
        // Toggle pulse animation
        animatedBox.classList.toggle('pulse-animation');
        
        // Add spin animation for 2 seconds
        animatedBox.classList.add('spin');
        setTimeout(() => {
            animatedBox.classList.remove('spin');
        }, 2000);
    });
    
    // Change color button
    colorBtn.addEventListener('click', function() {
        const randomColor = getRandomColor();
        animatedBox.style.backgroundColor = randomColor;
        
        // Store color preference
        localStorage.setItem('boxColor', randomColor);
    });
    
    // Save preferences button
    saveBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        if (username) {
            localStorage.setItem('username', username);
            loadUserData();
        }
    });
    
    // Helper function to generate random colors
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Load and display user data
    function loadUserData() {
        const savedName = localStorage.getItem('username');
        const savedColor = localStorage.getItem('boxColor');
        
        if (savedName) {
            userDataDiv.innerHTML = `<p>Welcome back, ${savedName}!</p>`;
            usernameInput.value = savedName;
        }
        
        if (savedColor) {
            animatedBox.style.backgroundColor = savedColor;
        }
    }
    
    animatedBox.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    
    animatedBox.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});