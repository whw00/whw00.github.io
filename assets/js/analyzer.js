// 페이지 로드 시 영어 불용어 데이터를 미리 받아두고 재사용
const stopwordsPromise = fetch("/data/stopwords-en.txt")
    .then(res => res.text())
    .then(text => text.split(/\s+/).filter(w => w.length > 0));

let resultChart = null;

const analyzeButton = document.querySelector("#analyze-btn");
analyzeButton.addEventListener("click", () => {
    const rawText = document.querySelector("#input-text").value;
    
    if (!rawText.trim()) {
        alert("분석할 영문 텍스트를 입력해 주세요.");
        return;
    }

    stopwordsPromise.then(stopwords => {
        const words = getWords(rawText);
        const cleanedWords = removeStopwords(words, stopwords);
        const frequencyMap = countWords(cleanedWords);
        const top20Words = topN(frequencyMap, 20);

        if (resultChart) {
            resultChart.destroy();
        }

        resultChart = drawChart("#result-chart", top20Words, "rgba(40, 167, 69, 0.6)");
    });
});