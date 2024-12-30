


const verses = [
    "But if the Spirit of Him who raised Jesus from the dead dwells in you, He who raised Christ from the dead will also give life to your mortal bodies through His Spirit who dwells in you. Romans-8:11 NKJV",
    "But if the Spirit of Him who raised Jesus from the dead dwells in you, He who raised Christ from the dead will also give life to your mortal bodies through His Spirit who dwells in you. Romans-8:11 NKJV",
    "But if the Spirit of Him who raised Jesus from the dead dwells in you, He who raised Christ from the dead will also give life to your mortal bodies through His Spirit who dwells in you. Romans-8:11 NKJV",
    "But if the Spirit of Him who raised Jesus from the dead dwells in you, He who raised Christ from the dead will also give life to your mortal bodies through His Spirit who dwells in you. Romans-8:11 NKJV",
];

function displayVerse() {
    const date = new Date();
    const verseIndex = date.getDate() % verses.length; // Rotate verses daily
    document.getElementById('daily-verse').innerText = verses[verseIndex];
}

window.onload = displayVerse;
