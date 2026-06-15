---
layout: page
tutle: 텍스트 분석기
permalink: /analyzer/
---

<h2>영문 텍스트 단어 빈도 분석기</h2>
<p>입력창에 분석하고자 하는 영어 텍스트를 붙이고 분석 버튼을 누르면, 상위 20개 단어 빈도가 막대그래프로 표시됩니다.</p>

<textarea id="input-text" rows="10" style="width: 100%; font-family: sans-serif; padding: 0.5em;" placeholder="이곳에 영어 텍스트를 붙여 넣으세요..."></textarea>
<button id="analyze-btn" style="margin: 0.5em 0; padding: 0.4em 1.5em; cursor: pointer;">분석 실행</button>

<div style="height: 600px; margin-top: 1.5em;">
    <canvas id="result-chart"></canvas>
</div>

{% include chartjs.html %}
<script src="/assets/js/analysis.js"></script>
<script src="/assets/js/analyzer.js"></script>