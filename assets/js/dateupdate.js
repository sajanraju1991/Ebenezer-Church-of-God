


const verses = [
    "John 3:16 - For God so loved the world that He gave His one and only Son.",
    "Philippians 4:13 - I can do all things through Christ who strengthens me.",
    "Psalm 23:1 - The Lord is my shepherd; I shall not want.",
    "Proverbs 3:5 - Trust in the Lord with all your heart and lean not on your own understanding."
];

function displayVerse() {
    const date = new Date();
    const verseIndex = date.getDate() % verses.length; // Rotate verses daily
    document.getElementById('daily-verse').innerText = verses[verseIndex];
}

window.onload = displayVerse;