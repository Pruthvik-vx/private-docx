/* =========================================================
   SHIVANI ANNIVERSARY WEBSITE
   PRUTHVIK ❤️ SHIVANI
   Funny Edition + Tiny Pruthvik Letter Heist
========================================================= */

"use strict";

/* =========================================================
   ELEMENTS
========================================================= */

const song = document.getElementById("song");
const musicToggle = document.getElementById("musicToggle");
const songBtn = document.getElementById("songBtn");
const beginBtn = document.getElementById("beginBtn");

const envelope = document.getElementById("envelope");
const letterText = document.getElementById("letterText");

const modal = document.getElementById("surpriseModal");
const modalClose = document.getElementById("modalClose");

const surpriseTitle = document.getElementById("surpriseTitle");
const surpriseText = document.getElementById("surpriseText");
const surpriseEmoji = document.getElementById("surpriseEmoji");
const surpriseActions = document.getElementById("surpriseActions");

const toast = document.getElementById("toast");

const loveRange = document.getElementById("loveRange");
const lovePercent = document.getElementById("lovePercent");
const loveMessage = document.getElementById("loveMessage");

let surpriseIndex = 0;
let musicStarted = false;
let letterUnlocked = false;
let thiefActive = false;
let interruptionCooldown = false;


/* =========================================================
   MUSIC PLAYER
========================================================= */

function toggleMusic() {
    if (!song) return;

    if (song.paused) {
        song.play()
            .then(() => {
                musicStarted = true;

                if (musicToggle) {
                    musicToggle.innerHTML =
                        "♫ <span>Pause our song</span>";
                }

                if (songBtn) {
                    songBtn.textContent = "Pause our song ♫";
                }
            })
            .catch(() => {
                showToast(
                    "Couldn't start the song. Check music.mp3 ❤️"
                );
            });
    } else {
        song.pause();

        if (musicToggle) {
            musicToggle.innerHTML =
                "♫ <span>Play our song</span>";
        }

        if (songBtn) {
            songBtn.textContent = "Play our song ♫";
        }
    }
}

musicToggle?.addEventListener("click", toggleMusic);
songBtn?.addEventListener("click", toggleMusic);


/* =========================================================
   BEGIN OUR STORY
========================================================= */

beginBtn?.addEventListener("click", () => {
    document.querySelector(".intro")?.scrollIntoView({
        behavior: "smooth"
    });

    if (!musicStarted) {
        toggleMusic();
    }
});


/* =========================================================
   RELATIONSHIP COUNTER
========================================================= */

function updateCounter() {
    const start = new Date("2025-10-11T00:00:00");
    const now = new Date();

    let diff = Math.max(0, now - start);

    const days = Math.floor(diff / 86400000);
    diff %= 86400000;

    const hours = Math.floor(diff / 3600000);
    diff %= 3600000;

    const minutes = Math.floor(diff / 60000);
    diff %= 60000;

    const seconds = Math.floor(diff / 1000);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = hours;
    if (minutesEl) minutesEl.textContent = minutes;
    if (secondsEl) secondsEl.textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);


/* =========================================================
   LOVE METER
========================================================= */

function updateLoveMeter() {
    if (!loveRange || !lovePercent || !loveMessage) return;

    const value = Number(loveRange.value);

    lovePercent.textContent = `${value}%`;

    if (value < 20) {
        loveMessage.textContent =
            "WHAT IS THIS BETRAYAL?! 😭💔";
    } else if (value < 40) {
        loveMessage.textContent =
            "Shivani… we need to talk. 😭";
    } else if (value < 60) {
        loveMessage.textContent =
            "Only this much? I am offended. 😭";
    } else if (value < 80) {
        loveMessage.textContent =
            "Hmm… I think you can do better. 😌";
    } else if (value < 95) {
        loveMessage.textContent =
            "Okayyy, that's more like it! ❤️";
    } else if (value < 100) {
        loveMessage.textContent =
            "Almost perfect. Keep going! 👀❤️";
    } else {
        loveMessage.textContent =
            "CORRECT ANSWER! I KNEW IT! 😭❤️";

        burstHearts(
            window.innerWidth / 2,
            window.innerHeight / 2,
            25
        );
    }
}

loveRange?.addEventListener("input", updateLoveMeter);
updateLoveMeter();


/* =========================================================
   TOAST MESSAGE
========================================================= */

function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}


/* =========================================================
   HEART BURST
========================================================= */

function burstHearts(x, y, count = 12, symbol = "♥") {
    const symbols = [
        symbol,
        "♥",
        "♡",
        "💗",
        "💖",
        "✨"
    ];

    for (let i = 0; i < count; i++) {
        const heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left =
            `${x + (Math.random() - 0.5) * 100}px`;

        heart.style.top =
            `${y + (Math.random() - 0.5) * 60}px`;

        heart.style.setProperty(
            "--x",
            `${(Math.random() - 0.5) * 220}px`
        );

        heart.style.setProperty(
            "--r",
            `${(Math.random() - 0.5) * 100}deg`
        );

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1700);
    }
}


/* =========================================================
   SURPRISE QUESTIONS
========================================================= */

const surprises = [
    {
        emoji: "😂",
        title: "Relationship Investigation",
        text: "Who is the bigger drama queen in this relationship?",
        buttons: [
            { label: "Pruthvik 😌", action: "funny" },
            { label: "Shivani 👑", action: "funny" },
            { label: "Both are MAD 😂", action: "funny" }
        ],
        responses: [
            "Pruthvik? Innocent fellow. Definitely. 😇",
            "SHIVANI WON THE DRAMA AWARD! 🏆😂",
            "Both of you need your own reality show. 📺😭"
        ]
    },

    {
        emoji: "😤",
        title: "Be Honest, Shivani",
        text: "Who gets angry first during a silly argument?",
        buttons: [
            { label: "Me 😤", action: "funny" },
            { label: "You 😭", action: "funny" },
            { label: "No comments 🤐", action: "funny" }
        ],
        responses: [
            "Anger level: 100. Apology level: pending. 😂",
            "Pruthvik has entered apology mode. 🥹",
            "SUSPICIOUS ANSWER DETECTED. 🚨😂"
        ]
    },

    {
        emoji: "🥔",
        title: "Extremely Important",
        text: "If we were potatoes, who would be the cuter potato?",
        buttons: [
            { label: "Pruthvik 🥔", action: "funny" },
            { label: "Shivani 🥔", action: "funny" },
            { label: "Two cute potatoes ❤️", action: "funny" }
        ],
        responses: [
            "A handsome potato. Very rare species. 😂",
            "Shivani potato has officially won. 🥔👑",
            "Potato couple goals achieved. ❤️🥔"
        ]
    },

    {
        emoji: "🧠",
        title: "Brain Cell Test",
        text: "Who loses their last remaining brain cell first?",
        buttons: [
            { label: "Pruthvik 🤡", action: "funny" },
            { label: "Shivani 🤡", action: "funny" },
            { label: "What is a brain cell? 😭", action: "funny" }
        ],
        responses: [
            "Pruthvik's brain cell has requested leave. 🧠😂",
            "Shivani.exe has stopped responding. 💀",
            "BOTH SYSTEMS NEED A RESTART. 🔄😭"
        ]
    },

    {
        emoji: "🧟",
        title: "Zombie Apocalypse",
        text: "If zombies attacked, who would survive longer?",
        buttons: [
            { label: "Pruthvik 🏃", action: "funny" },
            { label: "Shivani 🏃", action: "funny" },
            { label: "We run together ❤️", action: "funny" }
        ],
        responses: [
            "Pruthvik ran away and forgot the mission. 🏃😂",
            "Shivani is the final boss. Zombies are scared. 😈",
            "Romantic survival plan: hold hands and RUN! 😂❤️"
        ]
    },

    {
        emoji: "🛌",
        title: "Blanket Investigation",
        text: "Who steals the blanket while sleeping?",
        buttons: [
            { label: "Pruthvik 😴", action: "funny" },
            { label: "Shivani 😴", action: "funny" },
            { label: "We need two blankets 😂", action: "funny" }
        ],
        responses: [
            "Blanket thief exposed. 🚨😂",
            "The blanket belongs to Shivani now. Case closed. 👑",
            "Two blankets, one relationship, zero problems. 😭❤️"
        ]
    },

    {
        emoji: "💌",
        title: "A Tiny Confession",
        text: "Every silly conversation with you becomes a memory I want to keep. ❤️",
        buttons: [
            { label: "Awww 🥹", action: "love" },
            { label: "You're so cheesy 😂", action: "love" }
        ]
    },

    {
        emoji: "👀",
        title: "One Final Investigation",
        text: "Who misses the other person more?",
        buttons: [
            { label: "Me ❤️", action: "funny" },
            { label: "You 😌", action: "funny" },
            { label: "Both, obviously 🥹", action: "love" }
        ],
        responses: [
            "Evidence suggests mutual missing. ❤️",
            "Pruthvik denies it. His smile says otherwise. 😂",
            "CORRECT! BOTH ARE DOWN BAD. 😭❤️"
        ]
    }
];


/* =========================================================
   MODAL CONTROLS
========================================================= */

function closeModal() {
    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
}

function showSurprise(data) {
    if (!modal) return;

    surpriseEmoji.textContent = data.emoji;
    surpriseTitle.textContent = data.title;
    surpriseText.textContent = data.text;

    surpriseActions.innerHTML = "";

    data.buttons.forEach((btn, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = btn.label;

        button.addEventListener("click", () => {
            if (btn.action === "funny") {
                const response = data.responses
                    ? data.responses[index % data.responses.length]
                    : "ANSWER ACCEPTED! 😂❤️";

                surpriseEmoji.textContent = "🤣";
                surpriseTitle.textContent = "OFFICIAL VERDICT";
                surpriseText.textContent = response;

                surpriseActions.innerHTML = "";

                const nextButton = document.createElement("button");
                nextButton.type = "button";
                nextButton.textContent = "Next question ➜";

                nextButton.addEventListener("click", () => {
                    showRandomQuestion();
                });

                const closeButton = document.createElement("button");
                closeButton.type = "button";
                closeButton.textContent = "I'm innocent 😇";
                closeButton.addEventListener("click", closeModal);

                surpriseActions.append(nextButton, closeButton);

                burstHearts(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    10,
                    "😂"
                );

            } else if (btn.action === "love") {
                surpriseEmoji.textContent = "🥹❤️";
                surpriseTitle.textContent = "I KNEW IT!";
                surpriseText.textContent =
                    "Shivani, you're stuck with me forever. 😂❤️";

                surpriseActions.innerHTML = "";

                const closeButton = document.createElement("button");
                closeButton.type = "button";
                closeButton.textContent = "Forever, idiot ❤️";
                closeButton.addEventListener("click", closeModal);

                surpriseActions.appendChild(closeButton);

                burstHearts(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    25
                );

            } else {
                closeModal();
            }
        });

        surpriseActions.appendChild(button);
    });

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
}

function showRandomQuestion() {
    let nextIndex = surpriseIndex;

    if (surprises.length > 1) {
        while (nextIndex === surpriseIndex) {
            nextIndex = Math.floor(Math.random() * surprises.length);
        }
    }

    surpriseIndex = nextIndex;
    showSurprise(surprises[surpriseIndex]);
}

modalClose?.addEventListener("click", closeModal);

modal?.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});


/* =========================================================
   FINAL ANNIVERSARY SURPRISE
========================================================= */

document.getElementById("finalSurprise")?.addEventListener(
    "click",
    () => {
        showSurprise({
            emoji: "💗",
            title: "One Last Question, Shivani…",
            text: "Will you stay my favourite person for another year? And another? And another?",
            buttons: [
                { label: "YES ❤️", action: "love" },
                { label: "OBVIOUSLY 😭", action: "love" }
            ]
        });
    }
);


/* =========================================================
   TINY PRUTHVIK — LETTER THIEF
========================================================= */

const thief = document.createElement("div");

thief.id = "tinyPruthvik";
thief.className = "tiny-pruthvik";

thief.innerHTML = `
    <div class="thief-speech" id="thiefSpeech">
        HEHEHE! CATCH ME! 😈
    </div>

    <button
        type="button"
        class="thief-character"
        id="thiefCharacter"
        aria-label="Catch Tiny Pruthvik to get your letter back"
    >
        <span class="thief-hair">〰️</span>
        <span class="thief-face">😈</span>
        <span class="thief-body">👕</span>
        <span class="thief-legs">👟👟</span>
        <span class="thief-stolen-letter">💌</span>
    </button>

    <p class="thief-instruction">
        CATCH THIS LITTLE THIEF! 😂
    </p>

    <button
        type="button"
        class="thief-catch-btn"
        id="thiefCatchBtn"
    >
        CATCH PRUTHVIK! 🏃
    </button>
`;

document.body.appendChild(thief);

const thiefCharacter = document.getElementById("thiefCharacter");
const thiefSpeech = document.getElementById("thiefSpeech");
const thiefCatchBtn = document.getElementById("thiefCatchBtn");

const thiefMessages = [
    "HAHAHA! YOUR LETTER IS MINE! 😈💌",
    "CATCH ME FIRST, SHIVANI! 🏃‍♂️",
    "YOU CAN'T CATCH THIS HANDSOME GUY! 😂",
    "NO CONFESSION FOR YOU... YET! 😭",
    "HEHEHE! TOO SLOW! 💀",
    "I'M KEEPING THIS LETTER FOREVER! ❤️"
];

function startLetterHeist() {
    if (letterUnlocked || thiefActive) return;

    thiefActive = true;

    envelope.classList.remove("open");
    letterText.classList.remove("show");

    thief.classList.add("thief-active");
    document.body.classList.add("letter-heist-active");

    thiefSpeech.textContent =
        "HAHAHA! CATCH ME FIRST, SHIVANI! 😈💌";

    showToast("OH NO! TINY PRUTHVIK STOLE YOUR LETTER! 😂");

    envelope.classList.add("envelope-shake");

    setTimeout(() => {
        envelope.classList.remove("envelope-shake");
    }, 800);

    moveThief();

    burstHearts(
        window.innerWidth / 2,
        window.innerHeight / 2,
        15,
        "💌"
    );
}

function moveThief() {
    if (!thiefActive) return;

    const padding = 20;

    const maxX = Math.max(
        padding,
        window.innerWidth - thief.offsetWidth - padding
    );

    const maxY = Math.max(
        padding,
        window.innerHeight - thief.offsetHeight - padding
    );

    const x = padding + Math.random() * (maxX - padding);
    const y = padding + Math.random() * (maxY - padding);

    thief.style.left = `${x}px`;
    thief.style.top = `${y}px`;

    thiefSpeech.textContent =
        thiefMessages[Math.floor(Math.random() * thiefMessages.length)];
}

function catchThief() {
    if (!thiefActive) return;

    thiefActive = false;
    letterUnlocked = true;

    thief.classList.remove("thief-active");
    document.body.classList.remove("letter-heist-active");

    thief.style.left = "";
    thief.style.top = "";

    envelope.classList.remove("open");
    letterText.classList.remove("show");

    showToast("YOU CAUGHT PRUTHVIK! NOW READ YOUR LETTER! 💌❤️");

    burstHearts(
        window.innerWidth / 2,
        window.innerHeight / 2,
        40,
        "❤️"
    );

    setTimeout(() => {
        envelope.classList.add("open");

        setTimeout(() => {
            letterText.classList.add("show");

            letterText.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 500);
    }, 500);
}

envelope?.addEventListener("click", () => {
    if (thiefActive) return;

    if (letterUnlocked) {
        envelope.classList.toggle("open");
        letterText.classList.toggle("show");

        burstHearts(
            window.innerWidth / 2,
            window.innerHeight / 2,
            15
        );

        return;
    }

    startLetterHeist();
});

thiefCharacter.addEventListener("pointerenter", moveThief);
thiefCharacter.addEventListener("click", catchThief);
thiefCatchBtn.addEventListener("click", catchThief);


/* =========================================================
   FUNNY PHOTO REACTIONS
========================================================= */

const photoCaptions = [
    "CERTIFIED CUTIES ❤️",
    "TWO IDIOTS, ONE LOVE 😂",
    "MAIN CHARACTERS FR 😎",
    "LOVE LEVEL: UNREAL 💗",
    "CUTE COUPLE ALERT 🚨",
    "SHIVANI STOLE MY HEART 😭",
    "PRUTHVIK IS STILL ANNOYING 😂",
    "MEMORY UNLOCKED 🔓",
    "THESE TWO AGAIN?! 🤣",
    "FOREVER MY FAVOURITE ❤️"
];

const photoEmojis = [
    "💗",
    "😂",
    "🥹",
    "😈",
    "✨",
    "👑",
    "💌",
    "🤡",
    "❤️",
    "🫶"
];

document.querySelectorAll(".photo-grid figure").forEach((figure, index) => {
    figure.classList.add("funny-photo");

    const caption = document.createElement("div");
    caption.className = "funny-photo-caption";

    const sticker = document.createElement("span");
    sticker.className = "funny-photo-sticker";
    sticker.textContent = photoEmojis[index % photoEmojis.length];

    caption.textContent = photoCaptions[index % photoCaptions.length];

    figure.appendChild(sticker);
    figure.appendChild(caption);

    figure.addEventListener("click", () => {
        figure.classList.remove("photo-wobble");

        // Restart the animation on repeated taps.
        void figure.offsetWidth;

        figure.classList.add("photo-wobble");

        sticker.textContent =
            photoEmojis[Math.floor(Math.random() * photoEmojis.length)];

        caption.textContent =
            photoCaptions[Math.floor(Math.random() * photoCaptions.length)];

        burstHearts(
            window.innerWidth / 2,
            window.innerHeight / 2,
            8,
            "💗"
        );

        showToast("MEMORY REPLAYED! 😂❤️");

        setTimeout(() => {
            figure.classList.remove("photo-wobble");
        }, 850);
    });
});


/* =========================================================
   RANDOM FUNNY QUESTION BUTTON
========================================================= */

const questionLauncher = document.createElement("button");

questionLauncher.type = "button";
questionLauncher.className = "random-question-launcher";
questionLauncher.textContent = "ASK US 😂";

questionLauncher.setAttribute(
    "aria-label",
    "Open a random funny relationship question"
);

document.body.appendChild(questionLauncher);

questionLauncher.addEventListener("click", showRandomQuestion);


/* =========================================================
   RANDOM TINY PRUTHVIK POP-UP
========================================================= */

const tinyPop = document.createElement("div");

tinyPop.className = "tiny-pop";
tinyPop.innerHTML = `
    <span class="tiny-pop-face">🤡</span>
    <span class="tiny-pop-text">
        Psst, Shivani! Your boyfriend is annoying. 😂❤️
    </span>
    <button type="button" aria-label="Dismiss message">×</button>
`;

document.body.appendChild(tinyPop);

const tinyPopMessages = [
    "Psst, Shivani! Your boyfriend is annoying. 😂❤️",
    "Reminder: Pruthvik is your favourite idiot. 😌",
    "HEY! Don't forget to smile. 🥹💗",
    "Pruthvik wants your attention. As usual. 🤡",
    "Breaking news: Pruthvik loves you. 🚨❤️",
    "You scrolled this far. Cute. 😭💌"
];

const tinyPopClose = tinyPop.querySelector("button");

tinyPopClose.addEventListener("click", () => {
    tinyPop.classList.remove("tiny-pop-visible");
});

function showTinyPop() {
    if (
        document.hidden ||
        thiefActive ||
        interruptionCooldown ||
        Math.random() > 0.65
    ) {
        return;
    }

    interruptionCooldown = true;

    tinyPop.querySelector(".tiny-pop-text").textContent =
        tinyPopMessages[
            Math.floor(Math.random() * tinyPopMessages.length)
        ];

    tinyPop.classList.add("tiny-pop-visible");

    setTimeout(() => {
        tinyPop.classList.remove("tiny-pop-visible");
        interruptionCooldown = false;
    }, 4200);
}

// Occasional interruption while browsing.
setInterval(showTinyPop, 24000);


/* =========================================================
   WHO IS MOST PAPUCHI? ❤️
========================================================= */

const choiceArea = document.getElementById("choiceArea");
const pruthvikBtn = document.getElementById("pruthvikBtn");
const shivaniBtn = document.getElementById("shivaniBtn");
const answerMessage = document.getElementById("answerMessage");

let shivaniEscapeCount = 0;

function escapeShivaniButton(event) {
    if (event) event.preventDefault();

    if (!choiceArea || !shivaniBtn) return;

    const maxX = Math.max(
        0,
        choiceArea.clientWidth - shivaniBtn.offsetWidth
    );

    const maxY = Math.max(
        0,
        choiceArea.clientHeight - shivaniBtn.offsetHeight
    );

    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    shivaniBtn.style.left = `${newX}px`;
    shivaniBtn.style.top = `${newY}px`;

    shivaniEscapeCount++;

    const messages = [
        "HAHAHA 😂 WRONG ANSWER!",
        "YOU CAN'T CHOOSE YOURSELF, SHIVANI! 😏",
        "PRUTHVIK IS THE ONLY CORRECT ANSWER! ❤️",
        "NICE TRY! CATCH THE BUTTON FIRST! 😂",
        "THE BUTTON SAYS NO! 💀",
        "EVEN THE BUTTON KNOWS THE TRUTH. 😭"
    ];

    if (answerMessage) {
        answerMessage.textContent =
            messages[(shivaniEscapeCount - 1) % messages.length];
    }
}

shivaniBtn?.addEventListener("pointerenter", escapeShivaniButton);
shivaniBtn?.addEventListener("pointerdown", escapeShivaniButton);

pruthvikBtn?.addEventListener("click", () => {
    if (answerMessage) {
        answerMessage.innerHTML =
            "CORRECT ANSWER! 😭❤️<br>" +
            "Shivani loves Pruthvik the most! 💋";
    }

    burstHearts(
        window.innerWidth / 2,
        window.innerHeight / 2,
        35,
        "❤️"
    );

    showToast("CASE CLOSED: PRUTHVIK WINS! ❤️😂");

    pruthvikBtn.textContent = "I KNEW IT! ❤️";
});


/* =========================================================
   DESKTOP CURSOR HEART
========================================================= */

const cursor = document.querySelector(".cursor-heart");

let lastX = -100;
let lastY = -100;

window.addEventListener("pointermove", event => {
    if (!cursor) return;

    if (
        Math.abs(event.clientX - lastX) < 25 &&
        Math.abs(event.clientY - lastY) < 25
    ) {
        return;
    }

    lastX = event.clientX;
    lastY = event.clientY;

    cursor.style.left = `${event.clientX + 8}px`;
    cursor.style.top = `${event.clientY + 8}px`;
    cursor.style.opacity = "1";

    clearTimeout(cursor.timer);

    cursor.timer = setTimeout(() => {
        cursor.style.opacity = "0";
    }, 300);
});


/* =========================================================
   RANDOM FLOATING HEARTS
========================================================= */

setInterval(() => {
    if (document.hidden || Math.random() > 0.45) return;

    burstHearts(
        Math.random() * window.innerWidth,
        window.innerHeight,
        2
    );
}, 7000);


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal();

        if (thiefActive) {
            thiefSpeech.textContent =
                "YOU CAN'T ESCAPE THE HEIST! 😂💌";
        }
    }
});


/* =========================================================
   WELCOME MESSAGE
========================================================= */

window.addEventListener("load", () => {
    setTimeout(() => {
        showToast("Psst… Shivani, keep scrolling. 👀❤️");
    }, 1600);
});