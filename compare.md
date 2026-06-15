---
layout: page
title: 셜록 홈즈 비교
permalink: /compare/
---

<h2>A Study in Scarlet vs. The Hound of the Baskervilles</h2>
<div style="display: flex; gap: 1em;">
	<div style="flex: 1;">
		<h3>A Study in Scarlet</h3>
		<div style="height: 750px;"><canvas id="chart-scarlet"></canvas></div>
	</div>
	<div style="flex: 1;">
		<h3>The Hound of the Baskervilles</h3>
		<div style="height: 750px;"><canvas id="chart-hound"></canvas></div>
	</div>
</div>

{% include charts.html %}
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="/assets/js/compare.js"></script>