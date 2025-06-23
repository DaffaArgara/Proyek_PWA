let deferredPrompt;
const installBtn = document.getElementById("installBtn");

// Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("✅ Service Worker Registered"))
      .catch((err) => console.error("❌ Service Worker Error:", err));
  });
}

// Install PWA
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;

  installBtn.addEventListener("click", () => {
    installBtn.hidden = true;
    deferredPrompt.prompt();
  });
});

// Dark Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// === DATA NOVEL ===
const novels = [
  {
    title: "The Great Adventure",
    chapters: [
      {
        title: "Chapter 1: The Beginning",
        content: [
          "It was a dark and stormy night...",
          "A letter arrived that would change her life forever.",
          "The fire crackled as Eleanor read the final line: 'Find the key beneath the lion’s gaze.'",
          "She didn't know it yet, but this was the start of a great adventure.",
        ],
      },
      {
        title: "Chapter 2: A Stranger Appears",
        content: [
          "Eleanor heard a knock during the thunderstorm.",
          "A stranger introduced himself as Alaric, holding a letter eerily similar to hers.",
          "They shared stories until dawn, realizing fate had tied them together.",
        ],
      },
      {
        title: "Chapter 3: Secrets in the Library",
        content: [
          "Inside the dusty old library, they uncovered a hidden map.",
          "Every book seemed to whisper secrets as they searched.",
          "A trapdoor was found beneath the lion statue's shadow.",
        ],
      },
      {
        title: "Chapter 4: The Descent",
        content: [
          "The spiral staircase led to a glowing cave filled with murals.",
          "A voice whispered in Eleanor’s mind: 'Only the true-hearted may pass.'",
          "The air shimmered with ancient energy.",
        ],
      },
      {
        title: "Chapter 5: Guardian of the Key",
        content: [
          "A golem emerged, blocking their path with a riddle.",
          "Answering 'Time' granted them access to the pedestal.",
          "Alaric retrieved the key, its warmth pulsing through his palm.",
        ],
      },
    ],
  },
  {
    title: "Mystery of the Old House",
    chapters: [
      {
        title: "Chapter 1: The Inheritance",
        content: [
          "Clara inherited a mansion from an aunt she never knew.",
          "The house was silent, but the walls held many secrets.",
          "In the study, she found a locked box with her name on it.",
        ],
      },
      {
        title: "Chapter 2: Night Whispers",
        content: [
          "Every night, Clara heard footsteps though no one was there.",
          "A diary appeared mysteriously on her nightstand.",
          "It warned of a curse hidden within the walls.",
        ],
      },
      {
        title: "Chapter 3: Hidden Passages",
        content: [
          "A loose brick led to a tunnel beneath the kitchen.",
          "Clara found old portraits with scratched-out eyes.",
          "She wondered who was trying to hide the truth.",
        ],
      },
      {
        title: "Chapter 4: The Watcher",
        content: [
          "Through a peephole, Clara saw someone watching her room.",
          "The diary pages were changing by themselves.",
          "She realized someone—or something—was guiding her.",
        ],
      },
      {
        title: "Chapter 5: Secrets Unearthed",
        content: [
          "Clara uncovered the box: inside, a photograph and key.",
          "The key opened a vault behind the fireplace.",
          "Within it, a letter from her aunt: 'Protect our gift. It’s your turn now.'",
        ],
      },
    ],
  },
  {
    title: "Love in Paris",
    chapters: [
      {
        title: "Chapter 1: The Arrival",
        content: [
          "Anna stepped off the train in Paris, heart pounding.",
          "She had come to forget, but the city awakened new hopes.",
          "At a street café, her eyes met his for the first time.",
        ],
      },
      {
        title: "Chapter 2: Stolen Glances",
        content: [
          "They kept meeting by chance—on bridges, in bookstores.",
          "She learned his name was Luc, a local artist.",
          "He sketched her without permission, saying: 'You have a face worth remembering.'",
        ],
      },
      {
        title: "Chapter 3: Montmartre Dreams",
        content: [
          "Luc showed her the city through his eyes.",
          "They shared laughter on the steps of Sacré-Cœur.",
          "Anna began to believe in love again.",
        ],
      },
      {
        title: "Chapter 4: The Past Returns",
        content: [
          "A message from her ex shattered her peace.",
          "Luc listened, never judging. 'You’re stronger than your past,' he said.",
          "She smiled through tears, feeling seen for the first time.",
        ],
      },
      {
        title: "Chapter 5: A New Chapter",
        content: [
          "Their final evening was spent on the Eiffel Tower.",
          "Luc whispered, 'Stay. Start over—with me.'",
          "Anna looked out over the lights and whispered, 'Yes.'",
        ],
      },
    ],
  },
];

let novelIndex = 0;
let chapterIndex = 0;

const libraryView = document.getElementById("libraryView");
const readingView = document.getElementById("readingView");
const backBtn = document.getElementById("backBtn");
const novelTitle = document.getElementById("novelTitle");
const chapterTitle = document.getElementById("chapterTitle");
const chapterContent = document.getElementById("chapterContent");
const currentChapter = document.getElementById("currentChapter");
const totalChapters = document.getElementById("totalChapters");
const nextBtn = document.getElementById("nextChapter");
const prevBtn = document.getElementById("prevChapter");

function renderChapter(index) {
  const chapters = novels[novelIndex].chapters;
  const chapter = chapters[index];
  chapterTitle.textContent = chapter.title;
  chapterContent.innerHTML = "";
  currentChapter.textContent = index + 1;
  totalChapters.textContent = chapters.length;

  chapter.content.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    chapterContent.appendChild(p);
  });

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === chapters.length - 1;
}

nextBtn.addEventListener("click", () => {
  const chapters = novels[novelIndex].chapters;
  if (chapterIndex < chapters.length - 1) {
    chapterIndex++;
    renderChapter(chapterIndex);
  }
});

prevBtn.addEventListener("click", () => {
  if (chapterIndex > 0) {
    chapterIndex--;
    renderChapter(chapterIndex);
  }
});

backBtn.addEventListener("click", () => {
  readingView.classList.add("hidden");
  libraryView.classList.remove("hidden");
});

const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    libraryView.classList.add("hidden");
    readingView.classList.remove("hidden");
    novelIndex = index;
    chapterIndex = 0;
    novelTitle.textContent = novels[novelIndex].title;
    renderChapter(chapterIndex);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  novelTitle.textContent = novels[0].title;
  renderChapter(chapterIndex);
});
