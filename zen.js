class Zen {
    constructor() {
        this.embers = [
            'purple',
            'blue',
            'green',
            'orange',
            'pink',
            'darkPink',
            'brightPurple'
        ];

        // Append CSS to the page
        const css = `
            .glow{height:100%;width:100%;position:absolute;background-color:black;top:0;left:0;overflow:hidden;pointer-events:none;z-index:-1;}
            .glow .ember{opacity:0;transition:opacity 4s;height:500px;width:500px;position:absolute;}
            .glow .ember.show{opacity:1;}
            .glow .ember.yellow{background:radial-gradient(circle,rgba(93,80,38,1) 0%,rgba(93,80,38,0) 50%);}
            .glow .ember.purple{background:radial-gradient(circle,rgba(59,23,102,1) 0%,rgba(59,23,102,0) 50%);}
            .glow .ember.blue{background:radial-gradient(circle,rgba(42,204,255,1) 0%,rgba(42,204,255,0) 50%);}
            .glow .ember.brightPurple{background:radial-gradient(circle,rgba(111,6,193,1) 0%,rgba(111,6,193,0) 50%);}
        `;
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    boot() {
        // Check if the container with class 'glow' exists
        const glowContainer = document.querySelector('.glow');
        if (!glowContainer) {
            return; // Do not spawn if no container
        }

        this.spawn(glowContainer);

        setInterval(() => {
            this.spawn(glowContainer);
        }, 2000);
    }

    spawn(glowContainer) {
        const emberName = Math.floor(Date.now() / 1000);
        const emberColor = this.embers[Math.floor(Math.random() * this.embers.length)];

        // Create ember element
        const ember = document.createElement('div');
        ember.classList.add('ember');
        ember.dataset.ember = emberName;
        ember.classList.add(emberColor);

        // Randomize position and scale
        const x = Math.floor(Math.random() * 120) - 20;
        const y = Math.floor(Math.random() * 120) - 20;
        const s = Math.floor(Math.random() * 8) + 5;

        ember.style.top = `${x}%`;
        ember.style.left = `${y}%`;
        ember.style.transform = `scale(${s})`;

        // Append ember to the container
        glowContainer.appendChild(ember);

        // Add animation classes and remove ember after animation
        setTimeout(() => {
            ember.classList.add('show');
            setTimeout(() => {
                ember.classList.remove('show');
                setTimeout(() => {
                    glowContainer.removeChild(ember);
                }, 6000);
            }, 6000);
        }, 500);
    }
}

// Initialize and boot Zen
const zen = new Zen();
zen.boot();
