
function extractBody(text) {
	const startMark = "*** START OF THE PROJECT GUTENBERG EBOOK";
	const endMark = "*** END OF THE PROJECT GUTENBERG EBOOK";
	return text.slice(text.indexOf(startMark), text.indexOf(endMark));
}

function analyze (text, stopwords) {
	const body = extractBody(text);
	const words = getWords (body);
	const cleaned = removeStopwords (words, stopwords);
	const counts = countWords (cleaned);
	return topN (counts, 30);
}

Promise.all([
	fetch("/data/scarlet.txt").then(r => r.text()),
	fetch("/data/hound.txt").then(r => r.text()),
	fetch("/data/stopwords-en.txt").then(r => r.text()),
]).then(([scarletText, houndText, stopwordsText]) => {
	const stopwords = stopwordsText.split(/\s+/)
		.filter(w => w.length > 0);
	const scarletTop = analyze (scarletText, stopwords);
	const houndTop = analyze (houndText, stopwords);
	drawChart("#chart-scarlet", scarletTop, "rgba(220, 53, 69, 0.6)");
	drawChart("#chart-hound", houndTop, "rgba(54, 162, 235, 0.6)");
});
