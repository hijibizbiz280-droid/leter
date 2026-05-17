// ─────────────────────────────────────────────
//  STORY DATA
// ─────────────────────────────────────────────
const story = [
    { chapter: "Prologue", text: "Hey… I made something for you.", bgColor: "#0a0608", imgId: 0 },
    { chapter: "I", text: "Promise me you'll read till the end.", bgColor: "#08090f", imgId: 1 },
    // { chapter: "II", text: "The first time I noticed you… something felt different.", bgColor: "#090c0a", imgId: 2 },
    //  { chapter: "III", text: "I didn't understand it then.", bgColor: "#0d0a0a", imgId: 3 },
    //  { chapter: "IV", text: "But somehow… you stayed in my mind.", bgColor: "#07090e", imgId: 4 },
    //  { chapter: "V", text: "Little things about you started to matter.", bgColor: "#09080d", imgId: 5 },
    //  { chapter: "VI", text: "Your smile… your vibe… your beautiful chaos.", bgColor: "#0c090a", imgId: 6 },
    //   { chapter: "VII", text: "And without realizing… you became important.", bgColor: "#080b0d", imgId: 7 },
    //  { chapter: "VIII", text: "Life's weird like that.", bgColor: "#0a0a08", imgId: 8 },
    //   { chapter: "IX", text: "Out of all people… it had to be you.", bgColor: "#0b0809", imgId: 9 },
    { chapter: "X", text: "And honestly?", bgColor: "#08090c", imgId: 10 },
    { chapter: "Fin.", text: "I'm really glad it is you.", bgColor: "#0a0809", imgId: 11 }
];

// ─────────────────────────────────────────────
//  IMAGE URLS  ← Replace each with your own image URL
//  Google Drive tip:
//  From: https://drive.google.com/file/d/FILE_ID/view
//  To:   https://drive.google.com/thumbnail?id=FILE_ID&sz=w800
// ─────────────────────────────────────────────
const imageUrls = [
    "https://static.vecteezy.com/system/resources/thumbnails/046/896/971/small/woman-with-a-camera-on-a-beautiful-background-for-worldgraphy-day-photo.jpg",   // Prologue
    "https://images.unsplash.com/photo-1556103255-4443dbae8e5a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww",   // I
    "https://media.gettyimages.com/id/929516304/photo/woman-at-the-beach-photographing-the-sunset.jpg?s=612x612&w=0&k=20&c=DQs4HmVPXBk687AfeEXDMev6h4_XBEm_qR6ymdYNhCc=",   // II
    "https://static.vecteezy.com/system/resources/thumbnails/046/896/971/small/woman-with-a-camera-on-a-beautiful-background-for-worldgraphy-day-photo.jpg",   // III
    "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA==",   // IV
    "https://static.vecteezy.com/system/resources/thumbnails/046/896/971/small/woman-with-a-camera-on-a-beautiful-background-for-worldgraphy-day-photo.jpg",   // V
    "https://static.vecteezy.com/system/resources/thumbnails/049/930/715/small/a-little-boy-holding-up-a-picture-frame-photo.jpeg",   // VI
    "https://static.vecteezy.com/system/resources/thumbnails/046/896/971/small/woman-with-a-camera-on-a-beautiful-background-for-worldgraphy-day-photo.jpg",   // VII
    "https://static.vecteezy.com/system/resources/thumbnails/046/896/971/small/woman-with-a-camera-on-a-beautiful-background-for-worldgraphy-day-photo.jpg",   // VIII
    "https://static.vecteezy.com/system/resources/thumbnails/046/896/971/small/woman-with-a-camera-on-a-beautiful-background-for-worldgraphy-day-photo.jpg",   // IX
    "https://static.vecteezy.com/system/resources/thumbnails/046/896/971/small/woman-with-a-camera-on-a-beautiful-background-for-worldgraphy-day-photo.jpg",   // X
    "https://static.vecteezy.com/system/resources/thumbnails/046/896/971/small/woman-with-a-camera-on-a-beautiful-background-for-worldgraphy-day-photo.jpg",   // Fin.
];

// ─────────────────────────────────────────────
//  FLOATING PHOTO HEART IMAGE URL
//  ← Change this to any image you want inside the floating hearts
// ─────────────────────────────────────────────
// Add as many photo URLs as you like — all appear as floating hearts
const HEART_PHOTO_URLS = [
    "https://media.gettyimages.com/id/949429578/photo/browsing-vacation-photographs-at-home.jpg?s=612x612&w=0&k=20&c=LKrElFIkge-BbLUFpJHdueOhSBmAAD9-3-Im9WuKRyQ=",
    "https://images.unsplash.com/photo-1509518408633-d42f618a2bdc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob3RvfGVufDB8fDB8fHww"
];

// 🎵 SONG LIST
const songs = [
    "audio.mp3",
    "audio.mp3",
    "audio.mp3"
];

let currentSong = 0;

// ─────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────
let i = 0;
let typing = false;

// ─────────────────────────────────────────────
//  DOM REFERENCES
// ─────────────────────────────────────────────
const textEl = document.getElementById('text');
const frameEl = document.getElementById('frame');
const chapterEl = document.getElementById('chapter');
const dotsEl = document.getElementById('dots');
const nextBtn = document.getElementById('nextBtn');

// ─────────────────────────────────────────────
//  PROGRESS DOTS
// ─────────────────────────────────────────────
story.forEach((_, idx) => {
    const d = document.createElement('div');
    d.className = 'dot';
    d.id = `dot-${idx}`;
    dotsEl.appendChild(d);
});

function updateDots(current) {
    story.forEach((_, idx) => {
        const d = document.getElementById(`dot-${idx}`);
        d.className = 'dot' + (idx === current ? ' active' : idx < current ? ' past' : '');
    });
}

// ─────────────────────────────────────────────
//  INJECT IMAGE FRAMES
// ─────────────────────────────────────────────
imageUrls.forEach((url, idx) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Scene ${idx}`;
    img.dataset.frame = idx;
    img.style.cssText = `
        position:absolute; inset:0; width:100%; height:100%;
        object-fit:cover; object-position:center;
        opacity:0; transition:opacity 1.4s ease;
    `;
    frameEl.appendChild(img);
});

function showFrame(idx) {
    frameEl.querySelectorAll('img').forEach(img => { img.style.opacity = '0'; });
    const target = frameEl.querySelector(`img[data-frame="${idx}"]`);
    if (target) setTimeout(() => { target.style.opacity = '1'; }, 60);
}

// ─────────────────────────────────────────────
//  TYPEWRITER
// ─────────────────────────────────────────────
function typeText(text, el) {
    let idx = 0;
    typing = true;
    nextBtn.disabled = true;
    el.innerHTML = '';
    function type() {
        if (idx < text.length) {
            el.innerHTML += text.charAt(idx++);
            setTimeout(type, 45);
        } else {
            typing = false;
            nextBtn.disabled = false;
        }
    }
    type();
}

// ─────────────────────────────────────────────
//  NEXT SLIDE
// ─────────────────────────────────────────────
function next() {
    if (typing) return;

    if (i < story.length) {
        const slide = story[i];

        chapterEl.textContent = slide.chapter;
        document.body.style.background = slide.bgColor;
        typeText(slide.text, textEl);
        showFrame(slide.imgId);
        updateDots(i);

        // 🎵 CHANGE SONG WITH FADE
        playSongWithFade(songs[currentSong]);
        currentSong = (currentSong + 1) % songs.length;

        // 🎬 LAST SLIDE
        if (i === story.length - 1) {
            nextBtn.textContent = '— The End —';

            heartExplosion();

            // setTimeout(() => {
            //     document.getElementById('scene').style.transition = 'opacity 2s ease';
            //     document.getElementById('scene').style.opacity = '0.2';
            // }, 1500);

            // 🛑 STOP MUSIC ON END
            nextBtn.onclick = () => {
                const fadeOut = setInterval(() => {
                    if (music.volume > 0.05) {
                        music.volume -= 0.05;
                    } else {
                        clearInterval(fadeOut);
                        music.pause();
                        music.currentTime = 0;
                    }
                }, 50);
            };
            nextBtn.onclick = () => {
                window.location.href = "sendLetter/index.html";
            }
        }

        i++;
    }
}

function playSongWithFade(newSrc) {
    const fadeOut = setInterval(() => {
        if (music.volume > 0.05) {
            music.volume -= 0.05;
        } else {
            clearInterval(fadeOut);

            music.src = newSrc;
            music.load();
            music.play();

            // fade in
            music.volume = 0;
            const fadeIn = setInterval(() => {
                if (music.volume < 0.95) {
                    music.volume += 0.05;
                } else {
                    clearInterval(fadeIn);
                }
            }, 50);
        }
    }, 50);
}

function heartExplosion() {
    const burstCount = 120; // number of hearts

    for (let k = 0; k < burstCount; k++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;

        floaters.push({
            type: ['emoji_❤️', 'emoji_💞', 'emoji_💘'][Math.floor(Math.random() * 3)],
            size: Math.random() * 14 + 16,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            alpha: 1,
            maxAlpha: 1,
            fadeIn: false,
            rot: Math.random(),
            rotV: (Math.random() - 0.5) * 0.2,
            wobble: 0,
            wobbleS: 0,
            pulse: 0,
            pulseS: 0,
            life: 0,
            maxLife: 120
        });
    }
}

// ─────────────────────────────────────────────
//  MUSIC PLAYER
// ─────────────────────────────────────────────
const music = document.getElementById('music');
const playerEl = document.getElementById('player');
const playBtn = document.getElementById('player-play');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const fillEl = document.getElementById('player-fill');
const dotEl = document.getElementById('player-dot');
const curEl = document.getElementById('player-cur');
const durEl = document.getElementById('player-dur');

let playing = false;

function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
}

function setPlaying(state) {
    playing = state;
    iconPlay.style.display = state ? 'none' : 'block';
    iconPause.style.display = state ? 'block' : 'none';
    if (state) {
        playerEl.classList.add('playing');
        music.play().catch(() => { });
    } else {
        playerEl.classList.remove('playing');
        music.pause();
    }
}

function toggleMusic() { setPlaying(!playing); }

function seekMusic(e) {
    if (!music.duration) return;
    const bar = document.getElementById('player-bar');
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    music.currentTime = pct * music.duration;
    updateProgress();
}

function updateProgress() {
    if (!music.duration) return;
    const pct = music.currentTime / music.duration * 100;
    fillEl.style.width = pct + '%';
    dotEl.style.left = pct + '%';
    curEl.textContent = fmt(music.currentTime);
}

music.addEventListener('timeupdate', updateProgress);
music.addEventListener('loadedmetadata', () => { durEl.textContent = fmt(music.duration); });
music.addEventListener('ended', () => { setPlaying(false); });

// auto-play on first user interaction (browser policy)
document.addEventListener('click', function startAudio() {
    if (!playing) setPlaying(true);
    document.removeEventListener('click', startAudio);
}, { once: true });

// try immediate autoplay
music.play().then(() => { setPlaying(true); }).catch(() => { setPlaying(false); });

// ─────────────────────────────────────────────
//  CANVAS SETUP
// ─────────────────────────────────────────────
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

// ─────────────────────────────────────────────
//  HEART CLIP PATH HELPER
//  (cx, cy) = centre, s = half-width
// ─────────────────────────────────────────────
function heartClipPath(c, cx, cy, s) {
    c.beginPath();
    c.moveTo(cx, cy + s * 0.35);
    c.bezierCurveTo(cx, cy - s * 0.30, cx - s, cy - s * 0.30, cx - s, cy + s * 0.05);
    c.bezierCurveTo(cx - s, cy + s * 0.60, cx, cy + s * 1.00, cx, cy + s * 1.10);
    c.bezierCurveTo(cx, cy + s * 1.00, cx + s, cy + s * 0.60, cx + s, cy + s * 0.05);
    c.bezierCurveTo(cx + s, cy - s * 0.30, cx, cy - s * 0.30, cx, cy + s * 0.35);
    c.closePath();
}

// ─────────────────────────────────────────────
//  BUILD PHOTO-HEART SPRITE
//  Renders image clipped to heart shape with
//  red glow border + inner highlight into an
//  offscreen canvas. Stamped via drawImage.
// ─────────────────────────────────────────────
function buildPhotoHeartSprite(img, size) {
    const r = size * 0.92;           // circle radius
    const pad = size * 2.0;
    const oc = document.createElement('canvas');
    oc.width = size * 5 + pad * 2;
    oc.height = size * 5 + pad * 2;
    const c = oc.getContext('2d');
    const cx = oc.width / 2;
    const cy = oc.height / 2;

    // 1. Red glow behind circle
    c.shadowColor = 'rgba(220,20,40,1)';
    c.shadowBlur = size * 1.7;
    c.fillStyle = '#cc1122';
    c.beginPath();
    c.arc(cx, cy, r, 0, Math.PI * 2);
    c.fill();
    c.shadowBlur = 0;

    // 2. Clip to circle and draw photo
    c.save();
    c.beginPath();
    c.arc(cx, cy, r, 0, Math.PI * 2);
    c.clip();
    const iw = img.naturalWidth || img.width || 612;
    const ih = img.naturalHeight || img.height || 612;
    const scale = Math.max((r * 2) / iw, (r * 2) / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    c.drawImage(img, cx - dw / 2, cy - dh / 2, dw, dh);
    c.restore();

    // 3. Subtle red tint overlay
    c.save();
    c.beginPath();
    c.arc(cx, cy, r, 0, Math.PI * 2);
    c.clip();
    c.fillStyle = 'rgba(180,10,30,0.20)';
    c.fill();
    c.restore();

    // 4. Glowing red border
    c.strokeStyle = 'rgba(255,60,80,0.90)';
    c.lineWidth = 2.8;
    c.shadowColor = 'rgba(255,30,50,0.7)';
    c.shadowBlur = size * 0.5;
    c.beginPath();
    c.arc(cx, cy, r, 0, Math.PI * 2);
    c.stroke();
    c.shadowBlur = 0;

    // 5. Inner shine highlight (top-left arc)
    c.save();
    c.beginPath();
    c.arc(cx - r * 0.18, cy - r * 0.22, r * 0.38, 0, Math.PI * 2);
    c.clip();
    c.fillStyle = 'rgba(255,200,200,0.24)';
    c.fill();
    c.restore();

    return oc;
}

// ─────────────────────────────────────────────
//  BUILD PLAIN RED HEART SPRITE
// ─────────────────────────────────────────────
function buildRedHeartSprite(size) {
    const pad = size * 1.8;
    const oc = document.createElement('canvas');
    oc.width = size * 2 + pad * 2;
    oc.height = size * 2 + pad * 2;
    const c = oc.getContext('2d');
    const cx = oc.width / 2;
    const cy = oc.height / 2;

    // glow + fill
    c.shadowColor = 'rgba(230,20,40,1)';
    c.shadowBlur = size * 1.5;
    c.fillStyle = '#dd1122';
    heartClipPath(c, cx, cy, size * 0.90);
    c.fill();
    c.shadowBlur = 0;

    // inner highlight
    c.fillStyle = 'rgba(255,160,160,0.28)';
    heartClipPath(c, cx - size * 0.10, cy - size * 0.18, size * 0.36);
    c.fill();

    return oc;
}

// ─────────────────────────────────────────────
//  DRAW HELPERS
// ─────────────────────────────────────────────
function drawInfinity(x, y, s) {
    const r = s * 0.45;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - r * 0.5, y - r, x - r * 2.1, y - r, x - r * 2.1, y);
    ctx.bezierCurveTo(x - r * 2.1, y + r, x - r * 0.5, y + r, x, y);
    ctx.bezierCurveTo(x + r * 0.5, y - r, x + r * 2.1, y - r, x + r * 2.1, y);
    ctx.bezierCurveTo(x + r * 2.1, y + r, x + r * 0.5, y + r, x, y);
    ctx.closePath();
}

function drawStar4(x, y, s) {
    const o = s * 0.55, inn = s * 0.16;
    ctx.beginPath();
    ctx.moveTo(x, y - o);
    ctx.quadraticCurveTo(x + inn, y - inn, x + o, y);
    ctx.quadraticCurveTo(x + inn, y + inn, x, y + o);
    ctx.quadraticCurveTo(x - inn, y + inn, x - o, y);
    ctx.quadraticCurveTo(x - inn, y - inn, x, y - o);
    ctx.closePath();
}

// ─────────────────────────────────────────────
//  SPRITE REFERENCES  (populated after image load)
// ─────────────────────────────────────────────
// HRT_PHOTO_SPRITES[i] = { lg, md } for the i-th photo URL
let HRT_PHOTO_SPRITES = [];
let HRT_LG = null;
let HRT_MD = null;
let HRT_SM = null;
let spritesReady = false;
let photosLoaded = 0;

// ─────────────────────────────────────────────
//  STARS
// ─────────────────────────────────────────────
const stars = Array.from({ length: 90 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.0 + 0.2,
    speed: Math.random() * 0.025 + 0.006,
    phase: Math.random() * Math.PI * 2
}));

// ─────────────────────────────────────────────
//  FLOATER FACTORY
// ─────────────────────────────────────────────
function makeFloater(photoReady) {
    const baseTypes = ['emoji_❤️', 'emoji_❤️', 'emoji_❤️', 'emoji_💘', 'emoji_💘', 'emoji_💞', 'emoji_💞', 'emoji_❤️', 'emoji_💘', 'emoji_💞', 'infinity', 'star4', 'spark', 'spark'];
    // inject photo entries if any sprites are ready
    const photoEntries = photoReady && HRT_PHOTO_SPRITES.length > 0
        ? HRT_PHOTO_SPRITES.flatMap((_, pi) => [`photo_${pi}_lg`, `photo_${pi}_lg`, `photo_${pi}_md`])
        : [];
    const types = [...photoEntries, ...baseTypes];

    const type = types[Math.floor(Math.random() * types.length)];
    const emojiSize = Math.random() * 30 + 14;
    const sizeMap = { infinity: 11, star4: 9, spark: 2.5, 'emoji_❤️': emojiSize, 'emoji_💘': emojiSize, 'emoji_💞': emojiSize };

    return {
        type,
        size: sizeMap[type] || 0,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + Math.random() * 120 + 40,
        vy: -(Math.random() * 0.55 + 0.18),
        vx: (Math.random() - 0.5) * 0.35,
        alpha: 0,
        maxAlpha: type.startsWith('photo') ? Math.random() * 0.85 + 0.45
            : type.startsWith('emoji') ? Math.random() * 0.70 + 0.40
                : Math.random() * 0.50 + 0.20,
        fadeIn: true,
        rot: (Math.random() - 0.5) * 0.30,
        rotV: (Math.random() - 0.5) * 0.010,
        wobble: Math.random() * Math.PI * 2,
        wobbleS: Math.random() * 0.026 + 0.008,
        pulse: Math.random() * Math.PI * 2,
        pulseS: Math.random() * 0.042 + 0.018,
        life: 0,
        maxLife: Math.random() * 600 + 380
    };
}

// ─────────────────────────────────────────────
//  FLOATERS ARRAY
// ─────────────────────────────────────────────
let floaters = [];

function initFloaters(photoReady) {
    floaters = Array.from({ length: 42 }, () => {
        const f = makeFloater(photoReady);
        // pre-spread across screen so canvas isn't empty on load
        f.y = Math.random() * window.innerHeight;
        f.life = Math.random() * f.maxLife * 0.55;
        f.alpha = f.maxAlpha * (0.25 + Math.random() * 0.60);
        f.fadeIn = false;
        return f;
    });
}

// ─────────────────────────────────────────────
//  MAIN RENDER LOOP
// ─────────────────────────────────────────────
let frameCount = 0;

function drawBg() {
    if (!spritesReady) { requestAnimationFrame(drawBg); return; }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frameCount++;

    // ── Stars ──
    stars.forEach(s => {
        const a = 0.08 + 0.15 * Math.sin(frameCount * s.speed + s.phase);
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,200,200,${a.toFixed(3)})`;
        ctx.fill();
    });

    // ── Floaters ──
    floaters.forEach((f, idx) => {
        f.life++;
        f.wobble += f.wobbleS;
        f.pulse += f.pulseS;
        f.x += f.vx + Math.sin(f.wobble) * 0.32;  // sway
        f.y += f.vy;
        f.rot += f.rotV;

        // fade in
        if (f.fadeIn) {
            f.alpha = Math.min(f.maxAlpha, f.alpha + 0.013);
            if (f.alpha >= f.maxAlpha) f.fadeIn = false;
        }
        // fade out in last 28% of life
        if (f.life > f.maxLife * 0.72) {
            f.alpha = Math.max(0, f.alpha - 0.009);
        }
        // recycle
        if (f.life >= f.maxLife || f.y < -130 || f.alpha <= 0) {
            floaters[idx] = makeFloater(true);
            return;
        }

        const ps = 1 + 0.09 * Math.sin(f.pulse);  // heartbeat

        ctx.save();
        ctx.globalAlpha = f.alpha;
        ctx.translate(f.x, f.y);
        ctx.rotate(f.rot);

        if (f.type.startsWith('photo_')) {
            // parse "photo_N_lg" or "photo_N_md"
            const parts = f.type.split('_');   // ['photo','N','lg'|'md']
            const pidx = parseInt(parts[1]);
            const variant = parts[2];             // 'lg' or 'md'
            const sprite = HRT_PHOTO_SPRITES[pidx];
            if (sprite) {
                const spr = variant === 'lg' ? sprite.lg : sprite.md;
                ctx.scale(ps, ps);
                ctx.drawImage(spr, -spr.width / 2, -spr.height / 2);
            }
        } else if (f.type === 'infinity') {
            ctx.strokeStyle = 'rgba(255,60,60,1)';
            ctx.lineWidth = 1.8;
            ctx.shadowColor = 'rgba(255,0,0,0.7)';
            ctx.shadowBlur = 8;
            drawInfinity(0, 0, f.size);
            ctx.stroke();
            ctx.shadowBlur = 0;

        } else if (f.type === 'star4') {
            ctx.fillStyle = 'rgba(255,70,70,1)';
            ctx.shadowColor = 'rgba(255,0,0,0.6)';
            ctx.shadowBlur = 7;
            drawStar4(0, 0, f.size);
            ctx.fill();
            ctx.shadowBlur = 0;

        } else if (f.type === 'spark') {
            ctx.fillStyle = 'rgba(255,90,90,1)';
            ctx.shadowColor = 'rgba(255,30,30,0.9)';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(0, 0, f.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

        } else if (f.type.startsWith('emoji_')) {
            const em = f.type.slice(6); // '❤️', '💘', or '💞'
            const sz = f.size * ps;
            ctx.font = `${sz}px serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = 'rgba(255,40,80,0.55)';
            ctx.shadowBlur = sz * 0.6;
            ctx.fillText(em, 0, 0);
            ctx.shadowBlur = 0;
        }

        ctx.restore();
    });

    requestAnimationFrame(drawBg);
}

// ─────────────────────────────────────────────
//  LOAD ALL PHOTOS → BUILD SPRITES → START LOOP
// ─────────────────────────────────────────────

// Always build plain red heart sprites immediately
HRT_LG = buildRedHeartSprite(22);
HRT_MD = buildRedHeartSprite(13);
HRT_SM = buildRedHeartSprite(7);

function checkAllLoaded() {
    // Ready as soon as at least one photo loaded (or all failed)
    if (photosLoaded === HEART_PHOTO_URLS.length) {
        spritesReady = true;
        initFloaters(HRT_PHOTO_SPRITES.length > 0);
    }
}

if (HEART_PHOTO_URLS.length === 0) {
    // No photos configured — just show red hearts
    spritesReady = true;
    initFloaters(false);
} else {
    HEART_PHOTO_URLS.forEach((url, pidx) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            HRT_PHOTO_SPRITES[pidx] = {
                lg: buildPhotoHeartSprite(img, 38),
                md: buildPhotoHeartSprite(img, 22)
            };
            photosLoaded++;
            checkAllLoaded();
        };
        img.onerror = () => {
            // this photo failed — slot stays empty, others still load
            photosLoaded++;
            checkAllLoaded();
        };
        img.src = url;
    });
}

drawBg();  // starts loop; waits internally until spritesReady = true

// ─────────────────────────────────────────────
//  INITIALISE STORY
// ─────────────────────────────────────────────
music.src = songs[0];
typeText('Tap Continue…', textEl);
chapterEl.textContent = '';
showFrame(0);
updateDots(-1);