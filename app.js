const FRAME_COUNT = 300;
const FRAME_DIR = './ezgif-7bb9792e4092fcb8-jpg/';

const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('loader');
const progressText = document.getElementById('progress-text');

const images = [];
const loadedFrames = new Set();

let targetFrame = 0;
let currentFrame = 0;

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  render();
}

window.addEventListener('resize', resizeCanvas);

function getFramePath(index) {
  const paddedIndex = String(index).padStart(3, '0');
  return `${FRAME_DIR}ezgif-frame-${paddedIndex}.jpg`;
}

// Calculate cover bounds (object-fit: cover math for canvas)
function drawImageCover(img) {
  if (!img || !img.complete || img.naturalWidth === 0) return;

  const w = canvas.width;
  const h = canvas.height;
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = w / h;

  let renderWidth, renderHeight, offsetX, offsetY;

  if (canvasRatio > imgRatio) {
    renderWidth = w;
    renderHeight = w / imgRatio;
    offsetX = 0;
    offsetY = (h - renderHeight) / 2;
  } else {
    renderWidth = h * imgRatio;
    renderHeight = h;
    offsetX = (w - renderWidth) / 2;
    offsetY = 0;
  }

  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
}

// Find closest loaded frame if target index image isn't loaded yet
function getBestAvailableImage(targetIndex) {
  if (loadedFrames.has(targetIndex)) {
    return images[targetIndex];
  }
  
  for (let offset = 1; offset < FRAME_COUNT; offset++) {
    const prev = targetIndex - offset;
    const next = targetIndex + offset;
    if (prev >= 0 && loadedFrames.has(prev)) return images[prev];
    if (next < FRAME_COUNT && loadedFrames.has(next)) return images[next];
  }
  return images[0];
}

function render() {
  const index = Math.min(Math.max(Math.round(currentFrame), 0), FRAME_COUNT - 1);
  const img = getBestAvailableImage(index);
  if (img) {
    drawImageCover(img);
  }
}

function updateScrollProgress() {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  );
  const maxScroll = scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  
  if (maxScroll > 0) {
    const progress = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);
    targetFrame = progress * (FRAME_COUNT - 1);
  }
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);

let totalLoaded = 0;

function preloadImages() {
  for (let i = 0; i < FRAME_COUNT; i++) {
    const img = new Image();
    const src = getFramePath(i + 1);
    const frameIdx = i;

    img.onload = () => {
      loadedFrames.add(frameIdx);
      totalLoaded++;

      const percent = Math.floor((totalLoaded / FRAME_COUNT) * 100);
      if (progressText) {
        progressText.textContent = `LOADING FRAMES ${percent}%`;
      }

      if (totalLoaded >= 5 && loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
      }
      
      render();
    };

    img.onerror = () => {
      totalLoaded++;
      if (totalLoaded >= 5 && loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
      }
    };

    img.src = src;
    images.push(img);
  }
}

function animationLoop() {
  const diff = targetFrame - currentFrame;
  if (Math.abs(diff) > 0.001) {
    currentFrame += diff * 0.15;
    render();
  } else if (currentFrame !== targetFrame) {
    currentFrame = targetFrame;
    render();
  } else {
    render();
  }
  
  requestAnimationFrame(animationLoop);
}

// Initial setup
resizeCanvas();
preloadImages();
updateScrollProgress();
animationLoop();

// Mobile Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navContainer = document.querySelector('.nav-container');

if (menuToggle && navLinks) {
  const closeMenu = () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when clicking links
  document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on ESC key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });
}

// Nav Header Scroll Background Toggle
function handleNavScroll() {
  if (navContainer) {
    if (window.scrollY > 40) {
      navContainer.classList.add('scrolled');
    } else {
      navContainer.classList.remove('scrolled');
    }
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

// Active Nav Link Scroll Highlight
const sections = document.querySelectorAll('section[id], main[id], footer[id]');
const navLinkElements = document.querySelectorAll('.nav-link');

function highlightNavOnScroll() {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinkElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

// Scroll Animations using IntersectionObserver
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Optional: stop observing once animated to keep it visible
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});
