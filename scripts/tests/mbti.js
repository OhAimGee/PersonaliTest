/**
 * Module de rendu du test MBTI
 * Gère l'affichage question par question (format A/B)
 */
var MBTITest = (function() {
  var answers     = {};
  var currentIdx  = 0;
  var questions   = [];
  var container   = null;
  var onComplete  = null;
  var onProgress  = null;

  function init(savedAnswers, opts) {
    answers   = savedAnswers || {};
    questions = window.QUESTIONS_MBTI || [];
    container = document.getElementById('mbti-question-container');
    onComplete = (opts && opts.onComplete) || null;
    onProgress = (opts && opts.onProgress) || null;

    // Reprendre là où on s'est arrêté
    currentIdx = 0;
    for (var i = 0; i < questions.length; i++) {
      if (answers[questions[i].id]) currentIdx = i;
    }
    if (currentIdx > 0 && answers[questions[currentIdx].id]) {
      currentIdx = Math.min(currentIdx + 1, questions.length - 1);
    }

    bindNav();
    render();
  }

  function bindNav() {
    var btnPrev = document.getElementById('mbti-prev');
    var btnNext = document.getElementById('mbti-next');
    if (btnPrev) btnPrev.addEventListener('click', prev);
    if (btnNext) btnNext.addEventListener('click', next);
  }

  function render() {
    if (!container || questions.length === 0) return;

    var q   = questions[currentIdx];
    var ans = answers[q.id] || null;

    // Compteur
    var counter = document.getElementById('mbti-counter');
    if (counter) counter.textContent = (currentIdx + 1) + ' / ' + questions.length;

    // Progression
    if (onProgress) onProgress(countAnswered(), questions.length);
    updateNavButtons();

    // Étiquette de dimension
    var dimLabels = { EI: 'Énergie', SN: 'Perception', TF: 'Décision', JP: 'Organisation' };
    var dimLabel  = dimLabels[q.dimension] || q.dimension;

    container.innerHTML = '';

    // Badge dimension
    var badge = document.createElement('div');
    badge.className = 'question-badge';
    badge.textContent = dimLabel;
    container.appendChild(badge);

    // Numéro + texte
    var qNum = document.createElement('p');
    qNum.className = 'question-number';
    qNum.textContent = 'Question ' + (currentIdx + 1);
    container.appendChild(qNum);

    var qText = document.createElement('h3');
    qText.className = 'question-text';
    qText.textContent = q.text;
    container.appendChild(qText);

    // Options A/B
    var optionsWrap = document.createElement('div');
    optionsWrap.className = 'options-ab';

    ['A', 'B'].forEach(function(opt) {
      var btn = document.createElement('button');
      btn.className = 'option-btn' + (ans === opt ? ' selected' : '');
      btn.setAttribute('data-option', opt);

      var letter = document.createElement('span');
      letter.className = 'option-letter';
      letter.textContent = opt;

      var text = document.createElement('span');
      text.className = 'option-text';
      text.textContent = opt === 'A' ? q.optionA : q.optionB;

      btn.appendChild(letter);
      btn.appendChild(text);
      btn.addEventListener('click', function() { selectAnswer(opt); });
      optionsWrap.appendChild(btn);
    });

    container.appendChild(optionsWrap);

    // Animation d'entrée
    container.classList.remove('fade-in');
    void container.offsetWidth;
    container.classList.add('fade-in');
  }

  function selectAnswer(opt) {
    var q = questions[currentIdx];
    answers[q.id] = opt;

    // Feedback visuel
    var btns = container.querySelectorAll('.option-btn');
    btns.forEach(function(b) {
      b.classList.toggle('selected', b.getAttribute('data-option') === opt);
    });

    if (onProgress) onProgress(countAnswered(), questions.length);

    // Avancer automatiquement après un délai
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
    if (currentIdx < questions.length - 1) {
      currentIdx++;
      render();
    } else {
      checkComplete();
    }
  }

  function prev() {
    if (currentIdx > 0) {
      currentIdx--;
      render();
    }
  }

  function checkComplete() {
    if (countAnswered() >= questions.length && onComplete) {
      onComplete(answers);
    } else if (currentIdx >= questions.length - 1 && onComplete) {
      // Permettre de continuer même avec quelques questions sans réponse
      if (countAnswered() >= Math.floor(questions.length * 0.8)) {
        onComplete(answers);
      }
    }
  }

  function countAnswered() {
    return Object.keys(answers).length;
  }

  function updateNavButtons() {
    var btnPrev = document.getElementById('mbti-prev');
    var btnNext = document.getElementById('mbti-next');
    if (btnPrev) btnPrev.disabled = (currentIdx === 0);
    if (btnNext) {
      var isLast = (currentIdx === questions.length - 1);
      btnNext.textContent = isLast ? 'Terminer' : 'Suivant';
    }
  }

  function getAnswers() { return answers; }
  function reset() { answers = {}; currentIdx = 0; }

  return { init: init, getAnswers: getAnswers, reset: reset };
})();
