---
layout: page
title: 고딕 소설 비교
permalink: /gothic/
---

# Frankenstein vs. Dracula 단어 빈도 비

<h2>Frankenstein vs. Dracula 상위 30개 단어</h2>

<div style="display: flex; gap: 1em;">
    <div style="flex: 1;">
        <h3>Frankenstein (Shelley, 1818)</h3>
        <div style="height: 600px;">
            <canvas id="chart-frankenstein"></canvas>
        </div>
    </div>
    <div style="flex: 1;">
        <h3>Dracula (Stoker, 1897)</h3>
        <div style="height: 600px;">
            <canvas id="chart-dracula"></canvas>
        </div>
    </div>
</div>

## 보고서

### 추가한 불용어와 근거

NLTK 기본 목록 외에 다음 5개의 단어를 `data/stopwords-custom.txt`에 추가했습니다: `time`, `saw`, `came`, `went`, `much`.

이 단어들은 두 소설의 본문 빈도 분석 결과 상위권에 공통으로 나타났으나, 단순한 시점이나 기본적인 동작, 정도를 나타내는 부사 및 동사로서 작품의 고유한 서사나 주제를 드러내는 데에는 잡음으로 작용한다고 판단하여 제외했습니다.

### 두 작품의 단어 빈도가 들려주는 이야기

* **공통으로 도드라지는 단어**: `night`, `eyes`, `thought` 등 고딕 문학 특유의 어두운 배경 묘사와 인물의 두려운 심리 상태를 나타내는 단어들이 전반적인 분위기를 조성하고 있습니다.
* **한 작품에만 도드라지는 단어와 그것이 시사하는 작품의 특성**:
  * **Frankenstein**: `father`, `elizabeth`, `fiend`, `monster`, `life` 등의 단어가 압도적으로 많습니다. 이는 단순한 공포를 넘어 생명(life) 창조에 대한 철학적 고뇌와, 피조물이 느끼는 가족(father) 및 유대에 대한 갈망이라는 작품의 핵심 주제를 직접적으로 시사합니다.
  * **Dracula**: `count`, `castle`, `room`, `door`, `window`, `wolves` 같은 공간 및 사물 명사가 크게 두드러집니다. 이는 조나단 하커가 백작(count)의 낯선 성(castle)에 갇힌 채 방과 문, 창문을 통해 겪는 공간적인 폐쇄성과 직접적인 생존의 공포를 생생하게 보여줍니다.

{% include chartjs.html %}
<script src="/assets/js/analysis.js"></script>
<script src="/assets/js/gothic.js"></script>