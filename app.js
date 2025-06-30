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
          "It was a dark and stormy night, and the wind howled like a wild beast outside Eleanor’s small cottage.",
          "As thunder shook the sky, a knock echoed through the empty halls—louder than it should’ve been.",
          "A letter arrived, sealed in wax with a lion’s emblem. It would change her life forever.",
          "The letter read, 'Seek the key beneath the lion’s gaze. Time is running short. Trust no one.'",
          "The fire crackled as Eleanor reread the final line, chills dancing along her spine.",
          "She didn’t know it yet, but this was the start of a great adventure that would shape the fate of more than just herself.",
          "Outside, the storm raged on, but in Eleanor’s heart, something had already begun to stir: destiny.",
        ],
      },
      {
        title: "Chapter 2: A Stranger Appears",
        content: [
          "Eleanor heard a knock during the thunderstorm, softer this time, but unmistakable.",
          "She opened the door to find a cloaked figure soaked from head to toe—eyes piercing, yet calm.",
          "He introduced himself as Alaric and held a letter eerily similar to hers.",
          "As lightning flashed, she saw the same lion seal on his envelope.",
          "They talked by the fireplace, sharing stories and theories late into the night.",
          "Alaric spoke of hidden cities, forgotten kings, and maps that bleed when read aloud.",
          "By dawn, Eleanor felt an odd connection with him—as if fate had tied them together long before this storm.",
        ],
      },
      {
        title: "Chapter 3: Secrets in the Library",
        content: [
          "The old library smelled of dust, leather, and mystery.",
          "Every book seemed to whisper secrets as Eleanor and Alaric combed through them.",
          "Behind the shelves, they found a torn parchment with faded runes and a tiny drawing of a lion statue.",
          "The floor creaked ominously as they followed the trail of symbols engraved on the wooden panels.",
          "A hidden compartment popped open revealing a glowing compass and a single golden feather.",
          "Alaric turned and pointed at the lion statue across the room—the shadows beneath it didn’t match the rest of the room.",
          "They moved the statue, revealing a trapdoor under the lion’s shadow—just as the letter had said.",
        ],
      },
      {
        title: "Chapter 4: The Descent",
        content: [
          "They descended the spiral staircase, each step echoing in the deep stillness.",
          "Faint glowing crystals lit the way, illuminating ancient murals on the cave walls.",
          "The images showed a story—of guardians, betrayal, and a key that could either seal or destroy the realm.",
          "As they went deeper, the air shimmered and a soft humming began—almost like a voice.",
          "Eleanor paused, closing her eyes. A whisper filled her mind: 'Only the true-hearted may pass.'",
          "Alaric touched the wall, triggering a symbol to glow, revealing a large chamber ahead.",
          "The path had been waiting for them, but it would not be kind.",
        ],
      },
      {
        title: "Chapter 5: Guardian of the Key",
        content: [
          "The chamber was silent until a rumble shook the ground.",
          "From the center rose a golem, its eyes glowing blue and mouth moving with stone-slow words.",
          "'Answer this and be worthy,' it intoned. 'What devours all yet is never full?'",
          "Eleanor whispered, 'Time.' The golem’s eyes flickered, then dimmed.",
          "It stepped aside, revealing a pedestal holding an ornate key that pulsed with warmth.",
          "Alaric reached for it. The moment his fingers touched the metal, memories not his own flashed before his eyes.",
          "As the chamber settled, a new path revealed itself—lit by the key’s glow and their growing purpose.",
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
