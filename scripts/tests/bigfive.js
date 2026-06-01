/**
 * Module de rendu du test Big Five
 * Gère l'affichage question par question (échelle Likert 1-5)
 */
var BigFiveTest = (function() {
  var answers    = {};
  var currentIdx = 0;
  var questions  = [];
  var container  = null;
  var onComplete = null;
  var onProgress = null;

  var LIKERT_LABELS = ['Pas du tout', 'Plutôt non', 'Neutre', 'Plutôt oui', 'Tout à fait'];
  var DIM_LABELS    = { O: 'Ouverture', C: 'Conscience', E: 'Extraversion', A: 'Agréabilité', N: 'Stabilité' };
  var DIM_COLORS    = { O: '#8b5cf6', C: '#06b6d4', E: '#f59e0b', A: '#10b981', N: '#ef4444' };

  function init(savedAnswers, opts) {
    answers    = savedAnswers || {};
    questions  = window.QUESTIONS_BIGFIVE || [];
    container  = document.getElementById('bigfive-question-container');
    onComplete = (opts && opts.onComplete) || null;
    onProgress = (opts && opts.onProgress) || null;

    currentIdx = 0;
    for (var i = 0; i < questions.length; i++) {
      if (answers[questions[i].id] !== undefined) currentIdx = i;
    }
    if (currentIdx > 0 && answers[questions[currentIdx].id] !== undefined) {
      currentIdx = Math.min(currentIdx + 1, questions.length - 1);
    }

    bindNav();
    render();
  }

  function bindNav() {
    var btnPrev = document.getElementById('bigfive-prev');
    var btnNext = document.getElementById('bigfive-next');
    if (btnPrev) btnPrev.addEventListener('click', prev);
    if (btnNext) btnNext.addEventListener('click', next);
  }

  function render() {
    if (!container || questions.length === 0) return;

    var q   = questions[currentIdx];
    var ans = answers[q.id] !== undefined ? answers[q.id] : null;

    var counter = document.getElementById('bigfive-counter');
    if (counter) counter.textContent = (currentIdx + 1) + ' / ' + questions.length;

    if (onProgress) onProgress(countAnswered(), questions.length);
    updateNavButtons();

    container.innerHTML = '';

    // Badge dimension
    var badge = document.createElement('div');
    badge.className   = 'question-badge';
    badge.textContent = DIM_LABELS[q.dimension] || q.dimension;
    badge.style.backgroundColor = (DIM_COLORS[q.dimension] || '#6366f1') + '22';
    badge.style.color           = DIM_COLORS[q.dimension] || '#6366f1';
    badge.style.borderColor     = DIM_COLORS[q.dimension] || '#6366f1';
    container.appendChild(badge);

    // Numéro + texte
    var qNum = document.createElement('p');
    qNum.className   = 'question-number';
    qNum.textContent = 'Question ' + (currentIdx + 1);
    container.appendChild(qNum);

    var qText = document.createElement('h3');
    qText.className   = 'question-text';
    qText.textContent = q.text;
    container.appendChild(qText);

    // Étiquettes Likert
    var extremes = document.createElement('div');
    extremes.className   = 'likert-extremes';
    extremes.innerHTML   = '<span>Pas du tout d\'accord</span><span>Tout à fait d\'accord</span>';
    container.appendChild(extremes);

    // Boutons Likert 1-5
    var likertWrap = document.createElement('div');
    likertWrap.className = 'likert-scale';

    for (var v = 1; v <= 5; v++) {
      var btn = document.createElement('button');
      btn.className = 'likert-btn' + (ans === v ? ' selected' : '');
      btn.setAttribute('data-value', v);

      var num = document.createElement('span');
      num.className   = 'likert-num';
      num.textContent = v;

      var lbl = document.createElement('span');
      lbl.className   = 'likert-label';
      lbl.textContent = LIKERT_LABELS[v - 1];

      btn.appendChild(num);
      btn.appendChild(lbl);

      (function(val) {
        btn.addEventListener('click', function() { selectAnswer(val); });
      })(v);

      if (ans === v) {
        btn.style.borderColor     = DIM_COLORS[q.dimension] || '#6366f1';
        btn.style.backgroundColor = (DIM_COLORS[q.dimension] || '#6366f1') + '22';
      }

      likertWrap.appendChild(btn);
    }

    container.appendChild(likertWrap);

    container.classList.remove('fade-in');
    void container.offsetWidth;
    container.classList.add('fade-in');
  }

  function selectAnswer(val) {
    var q = questions[currentIdx];
    answers[q.id] = val;

    var btns = container.querySelectorAll('.likert-btn');
    btns.forEach(function(b) {
      var isSelected = parseInt(b.getAttribute('data-value')) === val;
      b.classList.toggle('selected', isSelected);
      if (isSelected) {
        b.style.borderColor     = DIM_COLORS[q.dimension] || '#6366f1';
        b.style.backgroundColor = (DIM_COLORS[q.dimension] || '#6366f1') + '22';
      } else {
        b.style.borderColor     = '';
        b.style.backgroundColor = '';
      }
    });

    if (onProgress) onProgress(countAnswered(), questions.length);

    setTimeout(function() {
      if (currentIdx < questions.length - 1) {
        currentIdx++;
        render();
      } else {
        checkComplete();
      }
    }, 350);
  }

  function next() {
    if (currentIdx < questions.length - 1) { currentIdx++; render(); }
    else checkComplete();
  }

  function prev() {
    if (currentIdx > 0) { currentIdx--; render(); }
  }

  function checkComplete() {
    if (countAnswered() >= Math.floor(questions.length * 0.8) && onComplete) {
      onComplete(answers);
    }
  }

  function countAnswered() { return Object.keys(answers).length; }
  function updateNavButtons() {
    var btnPrev = document.getElementById('bigfive-prev');
    var btnNext = document.getElementById('bigfive-next');
    if (btnPrev) btnPrev.disabled = (currentIdx === 0);
    if (btnNext) btnNext.textContent = (currentIdx === questions.length - 1) ? 'Terminer' : 'Suivant';
  }

  function getAnswers() { return answers; }
  function reset() { answers = {}; currentIdx = 0; }

  return { init: init, getAnswers: getAnswers, reset: reset };
})();
