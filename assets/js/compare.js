function extractBody(text) {
    const startMark = "*** START OF THE PROJECT GUTENBERG EBOOK";
    const endMark = "*** END OF THE PROJECT GUTENBERG EBOOK";
    
    const startIdx = text.indexOf(startMark);
    const endIdx = text.indexOf(endMark);
    
    return text.slice(startIdx, endIdx);
}

function getWords(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?;:'"''""()\[\]_*]/g, "")
        .split(/\s+/)
        .filter(w => w.length > 0);
}

function removeStopwords(words, stopwords) {
    return words.filter(w => !stopwords.includes(w));
}

function countWords(words) {
    const counts = {};
    for (const word of words) {
        counts[word] = (counts[word] || 0) + 1;
    }
    return counts;
}


function topN(counts, n) {
    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n);
}

function analyze(text, stopwords) {
    const body = extractBody(text);
    const words = getWords(body);
    const cleaned = removeStopwords(words, stopwords);
    const counts = countWords(cleaned);
    return topN(counts, 30);
}

function drawChart(selector, top, color) {
    const canvas = document.querySelector(selector);
    new Chart(canvas, {
        type: "bar",
        data: {
            labels: top.map(item => item[0]),
            datasets: [{
                label: "빈도",
                data: top.map(item => item[1]),
                backgroundColor: color,
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: "y",
            maintainAspectRatio: false,
            scales: {
                x: { beginAtZero: true },
                y: { ticks: { autoSkip: false } }
            }
        }
    });
}

Promise.all([
    fetch("/data/scarlet.txt").then(r => r.text()),
    fetch("/data/hound.txt").then(r => r.text()),
    fetch("/data/stopwords-en.txt").then(r => r.text())
]).then(([scarletText, houndText, stopwordsText]) => {
    
    const stopwords = stopwordsText.split(/\s+/).filter(w => w.length > 0);
    
    const scarletTop = analyze(scarletText, stopwords);
    const houndTop = analyze(houndText, stopwords);
    
    drawChart("#chart-scarlet", scarletTop, "rgba(220, 53, 69, 0.6)");
    drawChart("#chart-hound", houndTop, "rgba(54, 162, 235, 0.6)");
});