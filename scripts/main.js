/**
 * main.js — Contrôleur principal de l'application PersonaliTest
 * Gère la navigation, l'état global et la sauvegarde localStorage
 */
var App = (function() {

  var STORAGE_KEY = 'personnalitest_v1';

  // État global de l'application
  var state = {
    currentScreen:       'welcome',
    mbtiAnswers:         {},
    bigfiveAnswers:      {},
    enneagrammeAnswers:  {},
    results:             null,
    candidatName:        '',
    testDate:            ''
  };

  // ── Initialisation ────────────────────────────────────────────────────────
  function init() {
    UI.initTheme();
    loadState();
    bindGlobalEvents();

    if (state.results) {
      UI.showScreen('results');
      UI.hideProgress();
      UI.renderResults(state.results.mbti, state.results.bigfive, state.results.ennea);
      UI.initAccordions();
      showResumeButton();
    } else {
      UI.showScreen('welcome');
      UI.hideProgress();
      if (hasPartialProgress()) showResumeButton();
    }
  }

  // ── Chargement / sauvegarde ───────────────────────────────────────────────
  function loadState() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        var parsed = JSON.parse(saved);
        state = Object.assign(state, parsed);
      }
    } catch(e) { /* état corrompu — on repart à zéro */ }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch(e) {}
  }

  function hasPartialProgress() {
    return Object.keys(state.mbtiAnswers).length > 0 ||
           Object.keys(state.bigfiveAnswers).length > 0 ||
           Object.keys(state.enneagrammeAnswers).length > 0;
  }

  function showResumeButton() {
    var btn = document.getElementById('btn-resume');
    if (btn) btn.style.display = 'inline-flex';
  }

  // ── Navigation ────────────────────────────────────────────────────────────
  function goToMBTI() {
    var inputName = document.getElementById('input-candidat');
    if (inputName && inputName.value.trim()) {
      state.candidatName = inputName.value.trim();
    }
    if (!state.testDate) {
      state.testDate = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
    }
    state.currentScreen = 'mbti';
    saveState();
    UI.showScreen('mbti');

    MBTITest.init(state.mbtiAnswers, {
      onProgress: function(done, total) {
        state.mbtiAnswers = MBTITest.getAnswers();
        saveState();
        UI.updateProgress(done, total, 'MBTI (' + total + ' questions)');
      },
      onComplete: function(answers) {
        state.mbtiAnswers = answers;
        saveState();
        goToBigFive();
      }
    });

    UI.updateProgress(Object.keys(state.mbtiAnswers).length, 40, 'MBTI (40 questions)');
  }

  function goToBigFive() {
    state.currentScreen = 'bigfive';
    saveState();
    UI.showScreen('bigfive');

    BigFiveTest.init(state.bigfiveAnswers, {
      onProgress: function(done, total) {
        state.bigfiveAnswers = BigFiveTest.getAnswers();
        saveState();
        UI.updateProgress(done, total, 'Big Five (' + total + ' questions)');
      },
      onComplete: function(answers) {
        state.bigfiveAnswers = answers;
        saveState();
        goToEnneagramme();
      }
    });

    UI.updateProgress(Object.keys(state.bigfiveAnswers).length, 50, 'Big Five (50 questions)');
  }

  function goToEnneagramme() {
    state.currentScreen = 'enneagramme';
    saveState();
    UI.showScreen('enneagramme');

    EnneagrammeTest.init(state.enneagrammeAnswers, {
      onProgress: function(done, total) {
        state.enneagrammeAnswers = EnneagrammeTest.getAnswers();
        saveState();
        UI.updateProgress(done, total, 'Ennéagramme (' + total + ' questions)');
      },
      onComplete: function(answers) {
        state.enneagrammeAnswers = answers;
        saveState();
        computeAndShowResults();
      }
    });

    UI.updateProgress(Object.keys(state.enneagrammeAnswers).length, 45, 'Ennéagramme (45 questions)');
  }

  function computeAndShowResults() {
    var mbtiResult   = scoreMBTI(state.mbtiAnswers);
    var bigfiveResult= scoreBigFive(state.bigfiveAnswers);
    var enneaResult  = scoreEnneagramme(state.enneagrammeAnswers);

    state.results = {
      mbti:     mbtiResult,
      bigfive:  bigfiveResult,
      ennea:    enneaResult
    };
    state.currentScreen = 'results';
    saveState();

    UI.showScreen('results');
    UI.hideProgress();
    UI.renderResults(mbtiResult, bigfiveResult, enneaResult, state.candidatName, state.testDate);
    UI.initAccordions();
  }

  function resetAll() {
    if (!confirm('Êtes-vous sûr(e) de vouloir tout réinitialiser ? Vos résultats seront perdus.')) return;
    localStorage.removeItem(STORAGE_KEY);
    state = {
      currentScreen: 'welcome',
      mbtiAnswers: {},
      bigfiveAnswers: {},
      enneagrammeAnswers: {},
      results: null,
      candidatName: '',
      testDate: ''
    };
    MBTITest.reset();
    BigFiveTest.reset();
    EnneagrammeTest.reset();
    UI.hideProgress();
    UI.showScreen('welcome');
    var btn = document.getElementById('btn-resume');
    if (btn) btn.style.display = 'none';
  }

  function exportPDF() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'light');
      setTimeout(function() {
        window.print();
        document.documentElement.setAttribute('data-theme', 'dark');
      }, 300);
    } else {
      window.print();
    }
  }

  // ── Gestion des événements ────────────────────────────────────────────────
  function bindGlobalEvents() {
    // Thème
    var btnTheme = document.getElementById('btn-theme');
    if (btnTheme) btnTheme.addEventListener('click', UI.toggleTheme);

    // Démarrer les tests
    var btnStart = document.getElementById('btn-start');
    if (btnStart) btnStart.addEventListener('click', goToMBTI);

    // Reprendre
    var btnResume = document.getElementById('btn-resume');
    if (btnResume) btnResume.addEventListener('click', resumeFromSave);

    // Boutons de navigation inter-tests
    var btnMBTItoBF = document.getElementById('btn-mbti-to-bigfive');
    if (btnMBTItoBF) btnMBTItoBF.addEventListener('click', goToBigFive);

    var btnBFtoEn = document.getElementById('btn-bigfive-to-ennea');
    if (btnBFtoEn) btnBFtoEn.addEventListener('click', goToEnneagramme);

    var btnEnToRes = document.getElementById('btn-ennea-to-results');
    if (btnEnToRes) btnEnToRes.addEventListener('click', computeAndShowResults);

    // Reset
    var btnReset = document.getElementById('btn-reset');
    if (btnReset) btnReset.addEventListener('click', resetAll);

    // Export PDF
    var btnPDF = document.getElementById('btn-pdf');
    if (btnPDF) btnPDF.addEventListener('click', exportPDF);

    // Boutons mentions légales
    var btnLegal  = document.getElementById('btn-legal');
    var btnLegalClose  = document.getElementById('btn-legal-close');
    var btnLegalClose2 = document.getElementById('btn-legal-close2');
    var modal = document.getElementById('modal-legal');

    function openLegal()  { if (modal) { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; } }
    function closeLegal() { if (modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true');  document.body.style.overflow = ''; } }

    if (btnLegal)       btnLegal.addEventListener('click', openLegal);
    if (btnLegalClose)  btnLegalClose.addEventListener('click', closeLegal);
    if (btnLegalClose2) btnLegalClose2.addEventListener('click', closeLegal);
    if (modal) modal.addEventListener('click', function(e) { if (e.target === modal) closeLegal(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeLegal(); });

    // Redessiner les graphiques si redimensionnement
    window.addEventListener('resize', function() {
      if (state.results) {
        setTimeout(function() {
          UI.renderCharts(state.results.mbti, state.results.bigfive, state.results.ennea);
        }, 200);
      }
    });

    // Redessiner les graphiques si changement de thème
    document.documentElement.addEventListener('data-theme', function() {
      if (state.results) {
        setTimeout(function() {
          UI.renderCharts(state.results.mbti, state.results.bigfive, state.results.ennea);
        }, 100);
      }
    });
  }

  function resumeFromSave() {
    if (state.results) {
      UI.showScreen('results');
      UI.hideProgress();
      UI.renderResults(state.results.mbti, state.results.bigfive, state.results.ennea, state.candidatName, state.testDate);
      UI.initAccordions();
    } else if (Object.keys(state.enneagrammeAnswers).length > 0) {
      goToEnneagramme();
    } else if (Object.keys(state.bigfiveAnswers).length > 0) {
      goToBigFive();
    } else {
      goToMBTI();
    }
  }

  return { init: init };
})();

// Démarrer l'application une fois le DOM prêt
document.addEventListener('DOMContentLoaded', function() {
  App.init();
});
