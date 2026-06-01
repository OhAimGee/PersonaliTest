/**
 * Module de rendu du test Ennéagramme
 * Gère l'affichage question par question (échelle Likert 1-4)
 */
var EnneagrammeTest = (function() {
  var answers    = {};
  var currentIdx = 0;
  var questions  = [];
  var container  = null;
  var onComplete = null;
  var onProgress = null;

  var LIKERT_LABELS = ['Pas du tout', 'Un peu', 'Assez', 'Tout à fait'];
  var TYPE_COLORS = {
    1:'#f59e0b',2:'#ec4899',3:'#f97316',4:'#8b5cf6',5:'#06b6d4',
    6:'#3b82f6',7:'#10b981',8:'#dc2626',9:'#64748b'
  };
  var TYPE_NAMES = {
    1:'Le Perfectionniste',2:"L'Assistant",3:'Le Battant',4:"L'Individualiste",
    5:"L'Observateur",6:'Le Loyaliste',7:"L'Épicurien",8:'Le Chef',9:'Le Médiateur'
  };

  function init(savedAnswers, opts) {
    answers    = savedAnswers || {};
    questions  = window.QUESTIONS_ENNEAGRAMME || [];
    container  = document.getElementById('enneagramme-question-container');
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
    var btnPrev = document.getElementById('enneagramme-prev');
    var btnNext = document.getElementById('enneagramme-next');
    if (btnPrev) btnPrev.addEventListener('click', prev);
    if (btnNext) btnNext.addEventListener('click', next);
  }

  function render() {
    if (!container || questions.length === 0) return;

    var q   = questions[currentIdx];
    var ans = answers[q.id] !== undefined ? answers[q.id] : null;

    var counter = document.getElementById('enneagramme-counter');
    if (counter) counter.textContent = (currentIdx + 1) + ' / ' + questions.length;

    if (onProgress) onProgress(countAnswered(), questions.length);
    updateNavButtons();

    container.innerHTML = '';

    // Badge type
    var color = TYPE_COLORS[q.type] || '#6366f1';
    var badge = document.createElement('div');
    badge.className            = 'question-badge';
    badge.textContent          = 'Type ' + q.type + ' — ' + (TYPE_NAMES[q.type] || '');
    badge.style.backgroundColor = color + '22';
    badge.style.color           = color;
    badge.style.borderColor     = color;
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

    // Étiquettes extrêmes
    var extremes = document.createElement('div');
    extremes.className = 'likert-extremes';
    extremes.innerHTML = '<span>Pas du tout</span><span>Tout à fait</span>';
    container.appendChild(extremes);

    // Boutons Likert 1-4
    var likertWrap = document.createElement('div');
    likertWrap.className = 'likert-scale likert-4';

    for (var v = 1; v <= 4; v++) {
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

      if (ans === v) {
        btn.style.borderColor     = color;
        btn.style.backgroundColor = color + '22';
      }

      (function(val) {
        btn.addEventListener('click', function() { selectAnswer(val); });
      })(v);

      likertWrap.appendChild(btn);
    }

    container.appendChild(likertWrap);

    // Indicateur de groupe (ex: questions 1-5 = Type 1, etc.)
    var groupInfo = document.createElement('p');
    groupInfo.className = 'group-info';
    var groupStart = (q.type - 1) * 5 + 1;
    var groupEnd   = q.type * 5;
    groupInfo.textContent = 'Série ' + q.type + '/9 — Questions ' + groupStart + ' à ' + groupEnd;
    container.appendChild(groupInfo);

    container.classList.remove('fade-in');
    void container.offsetWidth;
    container.classList.add('fade-in');
  }

  function selectAnswer(val) {
    var q = questions[currentIdx];
    answers[q.id] = val;
    var color = TYPE_COLORS[q.type] || '#6366f1';

    var btns = container.querySelectorAll('.likert-btn');
    btns.forEach(function(b) {
      var isSelected = parseInt(b.getAttribute('data-value')) === val;
      b.classList.toggle('selected', isSelected);
      if (isSelected) {
        b.style.borderColor     = color;
        b.style.backgroundColor = color + '22';
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
    var btnPrev = document.getElementById('enneagramme-prev');
    var btnNext = document.getElementById('enneagramme-next');
    if (btnPrev) btnPrev.disabled = (currentIdx === 0);
    if (btnNext) btnNext.textContent = (currentIdx === questions.length - 1) ? 'Terminer' : 'Suivant';
  }

  function getAnswers() { return answers; }
  function reset() { answers = {}; currentIdx = 0; }

  return { init: init, getAnswers: getAnswers, reset: reset };
})();
