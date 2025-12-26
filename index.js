// Add ornaments to the tree
setTimeout(() => {
    addOrnaments();
}, 4000);

// Add twinkling lights to the tree
setTimeout(() => {
    addLights();
}, 4200);

// Add falling snow
createSnow();

// Modal elements
const accessBtn = document.getElementById('accessBtn');
const accessModal = document.getElementById('accessModal');
const closeAccess = document.getElementById('closeAccess');
const accessInput = document.getElementById('accessInput');
const accessSubmit = document.getElementById('accessSubmit');
const accessError = document.getElementById('accessError');
const treeContainer = document.querySelector('.tree-container');
const revealSection = document.getElementById('revealSection');

const mamaModal = document.getElementById('mamaModal');
const daddyModal = document.getElementById('daddyModal');
const closeMama = document.getElementById('closeMama');
const closeDaddy = document.getElementById('closeDaddy');

accessBtn.addEventListener('click', () => {
    accessInput.value = '';
    accessError.textContent = '';
    accessModal.classList.add('show');
    accessInput.focus();
});

closeAccess.addEventListener('click', () => {
    accessModal.classList.remove('show');
});

function openForAnswer(answer) {
    const normalized = answer.trim().toLowerCase();
    if (['daddy davis', 'daddy'].includes(normalized)) {
        accessModal.classList.remove('show');
        daddyModal.classList.add('show');
        return true;
    }
    if (['mama neneng', 'mama'].includes(normalized)) {
        accessModal.classList.remove('show');
        mamaModal.classList.add('show');
        return true;
    }
    return false;
}

function handleAccessSubmit() {
    const ok = openForAnswer(accessInput.value);
    if (!ok) {
        accessError.textContent = 'Wrong!! No, I do not call u thaatt!';
    }
}

accessSubmit.addEventListener('click', handleAccessSubmit);
accessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleAccessSubmit();
    }
});

closeMama.addEventListener('click', () => {
    mamaModal.classList.remove('show');
});

closeDaddy.addEventListener('click', () => {
    daddyModal.classList.remove('show');
});

// Close modals when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === accessModal) {
        accessModal.classList.remove('show');
    }
    if (event.target === mamaModal) {
        mamaModal.classList.remove('show');
    }
    if (event.target === daddyModal) {
        daddyModal.classList.remove('show');
    }
});

// After tree build completes, replace tree with reveal image/text
setTimeout(() => {
    treeContainer.classList.add('fade-out');
    setTimeout(() => {
        treeContainer.classList.add('hidden');
        revealSection.classList.add('show');
    }, 600);
}, 5200);

function addOrnaments() {
    const ornamentsContainer = document.getElementById('ornaments');
    // Using percentages for responsive positioning
    const ornamentPositions = [
        { top: '20%', left: '46.67%', color: '#FF0000' },
        { top: '25%', left: '36.67%', color: '#FFD700' },
        { top: '25%', left: '60%', color: '#FF69B4' },
        { top: '37.5%', left: '30%', color: '#00BFFF' },
        { top: '37.5%', left: '50%', color: '#FF0000' },
        { top: '37.5%', left: '70%', color: '#9370DB' },
        { top: '52.5%', left: '23.33%', color: '#FFD700' },
        { top: '52.5%', left: '43.33%', color: '#FF69B4' },
        { top: '52.5%', left: '56.67%', color: '#00BFFF' },
        { top: '52.5%', left: '76.67%', color: '#FF0000' }
    ];

    ornamentPositions.forEach((pos, index) => {
        setTimeout(() => {
            const ornament = document.createElement('div');
            ornament.style.position = 'absolute';
            ornament.style.top = pos.top;
            ornament.style.left = pos.left;
            ornament.style.width = '15px';
            ornament.style.height = '15px';
            ornament.style.borderRadius = '50%';
            ornament.style.background = `radial-gradient(circle at 30% 30%, ${pos.color}, ${adjustColor(pos.color, -40)})`;
            ornament.style.boxShadow = `0 0 10px ${pos.color}`;
            ornament.style.opacity = '0';
            ornament.style.transform = 'scale(0)';
            ornament.style.animation = 'popIn 0.3s ease-out forwards';
            ornamentsContainer.appendChild(ornament);
        }, index * 100);
    });
}

function addLights() {
    const lightsContainer = document.getElementById('lights');
    // Using percentages for responsive positioning
    const lightPositions = [
        { top: '17.5%', left: '50%' },
        { top: '23.75%', left: '40%' },
        { top: '23.75%', left: '56.67%' },
        { top: '35%', left: '33.33%' },
        { top: '35%', left: '66.67%' },
        { top: '47.5%', left: '26.67%' },
        { top: '47.5%', left: '50%' },
        { top: '47.5%', left: '73.33%' },
        { top: '60%', left: '36.67%' },
        { top: '60%', left: '63.33%' }
    ];

    const colors = ['#FFFF00', '#FF6B00', '#00FF00', '#0099FF', '#FF0099'];

    lightPositions.forEach((pos, index) => {
        const light = document.createElement('div');
        light.style.position = 'absolute';
        light.style.top = pos.top;
        light.style.left = pos.left;
        light.style.width = '8px';
        light.style.height = '8px';
        light.style.borderRadius = '50%';
        const color = colors[index % colors.length];
        light.style.background = color;
        light.style.boxShadow = `0 0 15px ${color}, 0 0 25px ${color}`;
        light.style.animation = `twinkle ${1 + Math.random()}s ease-in-out infinite`;
        light.style.animationDelay = `${Math.random() * 2}s`;
        lightsContainer.appendChild(light);
    });
}

function createSnow() {
    const snowContainer = document.querySelector('.snow-container');

    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.innerHTML = '❄';
        snowflake.style.position = 'absolute';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.top = '-20px';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.color = 'white';
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        snowflake.style.pointerEvents = 'none';
        snowflake.style.animation = `fall ${Math.random() * 3 + 5}s linear forwards`;

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 8000);
    }, 200);
}

function adjustColor(color, amount) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes fall {
        to {
            top: 100vh;
            transform: translateX(${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(style);