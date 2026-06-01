/**
 * ui.js — Utilitaires d'interface (transitions, thème, progress bar, rendu résultats)
 */
var UI = (function() {

  // ── Thème ────────────────────────────────────────────────────────────────
  function initTheme() {
    var saved = localStorage.getItem('personnalitest_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
  }

  function toggleTheme() {
    var html    = document.documentElement;
    var current = html.getAttribute('data-theme') || 'light';
    var next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('personnalitest_theme', next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    var btn = document.getElementById('btn-theme');
    if (!btn) return;
    btn.innerHTML = theme === 'dark'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>';
    btn.title = theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre';
  }

  // ── Écrans ───────────────────────────────────────────────────────────────
  function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(function(s) {
      s.classList.remove('active');
    });
    var target = document.getElementById('screen-' + screenId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ── Barre de progression ─────────────────────────────────────────────────
  function updateProgress(current, total, label) {
    var container = document.getElementById('progress-container');
    var bar       = document.getElementById('progress-bar');
    var lbl       = document.getElementById('progress-label');
    var pct       = total > 0 ? Math.round((current / total) * 100) : 0;

    if (container) container.style.display = total > 0 ? 'block' : 'none';
    if (bar)       bar.style.width = pct + '%';
    if (lbl)       lbl.textContent = label ? label + ' — ' + pct + '%' : pct + '%';
  }

  function hideProgress() {
    var container = document.getElementById('progress-container');
    if (container) container.style.display = 'none';
  }

  // ── Résultats : rendu complet ─────────────────────────────────────────────
  function renderResults(mbtiResult, bigFiveResult, enneaResult, candidatName, testDate) {
    var mbtiInterp   = getMBTIInterpretation(mbtiResult.type);
    var bigFiveInterp= getBigFiveInterpretation(bigFiveResult);
    var enneaInterp  = getEnneagrammeInterpretation(enneaResult.dominantType);
    var synthese     = buildSynthese(mbtiResult.type, bigFiveResult, enneaResult.dominantType);

    renderCandidatInfo(candidatName, testDate);
    renderSummaryCards(mbtiResult, bigFiveResult, enneaResult, mbtiInterp, enneaInterp);
    renderMBTISection(mbtiResult, mbtiInterp);
    renderBigFiveSection(bigFiveResult, bigFiveInterp);
    renderEnneaSection(enneaResult, enneaInterp);
    renderSyntheseSection(synthese);

    // Graphiques (avec délai pour que le DOM soit prêt)
    setTimeout(function() {
      renderCharts(mbtiResult, bigFiveResult, enneaResult);
    }, 100);
  }

  function renderCandidatInfo(candidatName, testDate) {
    var el = document.getElementById('results-candidat');
    if (!el) return;
    if (!candidatName && !testDate) {
      el.innerHTML = '';
      return;
    }
    var parts = [];
    if (candidatName) parts.push('<span class="candidat-name">' + candidatName + '</span>');
    if (testDate)     parts.push('<span class="candidat-date">Passé le ' + testDate + '</span>');
    el.innerHTML = '<div class="candidat-banner">' + parts.join('<span class="candidat-sep">·</span>') + '</div>';

    // En-tête flottant répété sur chaque page imprimée
    var ph = document.getElementById('print-page-header');
    if (ph) {
      var headerParts = ['PersonaliTest'];
      if (candidatName) headerParts.push(candidatName);
      if (testDate)     headerParts.push('Passé le ' + testDate);
      ph.textContent = headerParts.join('  ·  ');
    }
  }

  function renderSummaryCards(mbtiResult, bf, ennea, mbtiInterp, enneaInterp) {
    var container = document.getElementById('results-summary');
    if (!container) return;

    var isDark    = document.documentElement.getAttribute('data-theme') === 'dark';
    var textColor = isDark ? '#e2e8f0' : '#1e293b';

    container.innerHTML = [
      '<div class="summary-card card-mbti">',
      '  <div class="summary-card-icon">🧠</div>',
      '  <div class="summary-card-body">',
      '    <div class="summary-label">MBTI</div>',
      '    <div class="summary-type">' + mbtiResult.type + '</div>',
      '    <div class="summary-name">' + (mbtiInterp ? mbtiInterp.name : '') + '</div>',
      '    <div class="summary-tagline">' + (mbtiInterp ? mbtiInterp.tagline : '') + '</div>',
      '  </div>',
      '</div>',
      '<div class="summary-card card-bigfive">',
      '  <div class="summary-card-icon">📊</div>',
      '  <div class="summary-card-body">',
      '    <div class="summary-label">Big Five</div>',
      '    <div class="summary-ocean">',
      ['O','C','E','A','N'].map(function(d) {
        return '<span class="ocean-badge" style="background:' + BIGFIVE_DATA[d].color + '22;color:' + BIGFIVE_DATA[d].color + '">' +
               d + ':' + bf[d].normalized + '%</span>';
      }).join(''),
      '    </div>',
      '  </div>',
      '</div>',
      '<div class="summary-card card-ennea">',
      '  <div class="summary-card-icon">' + (enneaInterp ? enneaInterp.emoji : '✨') + '</div>',
      '  <div class="summary-card-body">',
      '    <div class="summary-label">Ennéagramme</div>',
      '    <div class="summary-type" style="color:' + (enneaInterp ? enneaInterp.color : '#6366f1') + '">Type ' + ennea.dominantType + '</div>',
      '    <div class="summary-name">' + (enneaInterp ? enneaInterp.name : '') + '</div>',
      '    <div class="summary-tagline">Aile ' + ennea.wing + '</div>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  function renderMBTISection(mbtiResult, interp) {
    var el = document.getElementById('mbti-result-content');
    if (!el || !interp) return;

    el.innerHTML = [
      '<div class="result-type-hero">',
      '  <span class="result-type-code">' + mbtiResult.type + '</span>',
      '  <span class="result-type-name">' + interp.name + '</span>',
      '  <p class="result-type-tagline">' + interp.tagline + '</p>',
      '</div>',
      '<p class="result-description">' + interp.description + '</p>',
      '<div class="result-grid">',
      '  <div class="result-block">',
      '    <h4>✅ Points forts</h4>',
      '    <ul>' + interp.strengths.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ul>',
      '  </div>',
      '  <div class="result-block">',
      '    <h4>⚠️ Points de vigilance</h4>',
      '    <ul>' + interp.weaknesses.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ul>',
      '  </div>',
      '</div>',
      '<div class="result-grid">',
      '  <div class="result-block">',
      '    <h4>🧩 Style cognitif</h4><p>' + interp.cognitiveStyle + '</p>',
      '  </div>',
      '  <div class="result-block">',
      '    <h4>🤝 Style relationnel</h4><p>' + interp.relationalStyle + '</p>',
      '  </div>',
      '  <div class="result-block">',
      '    <h4>💼 Style professionnel</h4><p>' + interp.professionalStyle + '</p>',
      '  </div>',
      '</div>',
      '<div class="result-block">',
      '  <h4>🎯 Métiers compatibles</h4>',
      '  <div class="tag-list">' + interp.careers.map(function(c){ return '<span class="tag">' + c + '</span>'; }).join('') + '</div>',
      '</div>',
      '<div class="chart-container">',
      '  <h4>Répartition des 4 dimensions</h4>',
      '  <canvas id="chart-mbti-bars" width="600" height="200"></canvas>',
      '</div>'
    ].join('\n');
  }

  function renderBigFiveSection(bf, interp) {
    var el = document.getElementById('bigfive-result-content');
    if (!el) return;

    var dims = ['O','C','E','A','N'];
    var rows = dims.map(function(d) {
      var info = interp[d];
      return [
        '<div class="bf-row">',
        '  <div class="bf-header">',
        '    <span class="bf-letter" style="color:' + info.color + '">' + d + '</span>',
        '    <span class="bf-name">' + info.name + '</span>',
        '    <span class="bf-score" style="color:' + info.color + '">' + info.score.normalized + '%</span>',
        '    <span class="bf-level-badge" style="background:' + info.color + '22;color:' + info.color + '">' + info.levelLabel + '</span>',
        '  </div>',
        '  <div class="bf-bar-wrap">',
        '    <div class="bf-bar" style="width:' + info.score.normalized + '%;background:' + info.color + '"></div>',
        '  </div>',
        '  <p class="bf-desc">' + info.description + '</p>',
        '  <p class="bf-tip"><strong>Conseil :</strong> ' + info.tip + '</p>',
        '</div>'
      ].join('\n');
    }).join('');

    el.innerHTML = [
      '<div class="chart-container">',
      '  <h4>Profil radar Big Five</h4>',
      '  <canvas id="chart-bigfive-radar" width="400" height="400"></canvas>',
      '</div>',
      '<div class="bf-dimensions">' + rows + '</div>'
    ].join('\n');
  }

  function renderEnneaSection(enneaResult, interp) {
    var el = document.getElementById('ennea-result-content');
    if (!el || !interp) return;

    el.innerHTML = [
      '<div class="result-type-hero" style="--accent:' + interp.color + '">',
      '  <span class="result-emoji">' + interp.emoji + '</span>',
      '  <span class="result-type-code" style="color:' + interp.color + '">Type ' + enneaResult.dominantType + '</span>',
      '  <span class="result-type-name">' + interp.name + '</span>',
      '  <p class="result-type-tagline">' + interp.tagline + '</p>',
      '  <p class="result-wing">Aile dominante : <strong>Type ' + enneaResult.wing + '</strong></p>',
      '</div>',
      '<div class="chart-container chart-pie-wrap">',
      '  <h4>Distribution Ennéagramme</h4>',
      '  <canvas id="chart-ennea-pie" width="400" height="400"></canvas>',
      '</div>',
      '<p class="result-description">' + interp.description + '</p>',
      '<div class="result-block motivation-block">',
      '  <h4>🌟 Motivation profonde</h4><p>' + interp.coreMotivation + '</p>',
      '  <h4>😨 Peur fondamentale</h4><p>' + interp.coreFear + '</p>',
      '</div>',
      '<div class="result-grid">',
      '  <div class="result-block">',
      '    <h4>✅ Points forts</h4>',
      '    <ul>' + interp.strengths.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ul>',
      '  </div>',
      '  <div class="result-block">',
      '    <h4>⚠️ Défis</h4>',
      '    <ul>' + interp.weaknesses.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ul>',
      '  </div>',
      '</div>',
      '<div class="result-grid">',
      '  <div class="result-block growth-block">',
      '    <h4>📈 Direction de croissance</h4><p>' + interp.growth + '</p>',
      '  </div>',
      '  <div class="result-block stress-block">',
      '    <h4>📉 Sous stress</h4><p>' + interp.stress + '</p>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  function renderSyntheseSection(synthese) {
    var el = document.getElementById('synthese-content');
    if (!el) return;

    el.innerHTML = [
      '<div class="synthese-header">',
      '  <span class="synthese-badge mbti-badge">' + synthese.mbtiType + ' — ' + synthese.mbtiName + '</span>',
      '  <span class="synthese-badge ennea-badge">Ennéa. Type ' + synthese.enneaType + ' — ' + synthese.enneaName + '</span>',
      '</div>',
      synthese.paragraphs.map(function(p){ return '<p class="synthese-para">' + p + '</p>'; }).join(''),
      '<div class="result-grid">',
      '  <div class="result-block">',
      '    <h4>💪 Vos atouts combinés</h4>',
      '    <ul>' + synthese.strengths.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ul>',
      '  </div>',
      '  <div class="result-block">',
      '    <h4>🎯 Points de développement</h4>',
      '    <ul>' + synthese.watchPoints.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ul>',
      '  </div>',
      '</div>',
      '<div class="result-block">',
      '  <h4>🚀 Pistes de développement personnel</h4>',
      '  <ul>' + synthese.development.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ul>',
      '</div>',
      '<div class="result-block">',
      '  <h4>💼 Suggestions de carrière</h4>',
      '  <div class="tag-list">' + synthese.careerSuggestions.map(function(c){ return '<span class="tag">' + c + '</span>'; }).join('') + '</div>',
      '</div>'
    ].join('\n');
  }

  function renderCharts(mbtiResult, bigFiveResult, enneaResult) {
    var isDark    = document.documentElement.getAttribute('data-theme') === 'dark';
    var textColor = isDark ? '#cbd5e1' : '#334155';
    var accent    = '#6366f1';

    // Radar Big Five
    var radarCanvas = document.getElementById('chart-bigfive-radar');
    if (radarCanvas) {
      var values = ['O','C','E','A','N'].map(function(d){ return bigFiveResult[d].normalized; });
      var labels = ['Ouverture','Conscience','Extraversion','Agréabilité','Stabilité'];
      drawRadarChart(radarCanvas, values, labels, accent, textColor);
    }

    // Barres MBTI
    var barsCanvas = document.getElementById('chart-mbti-bars');
    if (barsCanvas) {
      drawBarChart(barsCanvas, mbtiResult.percentages, textColor);
    }

    // Donut Ennéagramme
    var pieCanvas = document.getElementById('chart-ennea-pie');
    if (pieCanvas) {
      drawPieChart(pieCanvas, enneaResult.percentages, enneaResult.dominantType, textColor);
    }
  }

  // ── Accordéon résultats ────────────────────────────────────────────────
  function initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(function(header) {
      header.addEventListener('click', function() {
        var item = header.parentElement;
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.accordion-item').forEach(function(i) { i.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      });
    });
    // Ouvrir le premier par défaut
    var first = document.querySelector('.accordion-item');
    if (first) first.classList.add('open');
  }

  return {
    initTheme:      initTheme,
    toggleTheme:    toggleTheme,
    showScreen:     showScreen,
    updateProgress: updateProgress,
    hideProgress:   hideProgress,
    renderResults:  renderResults,
    renderCharts:   renderCharts,
    initAccordions: initAccordions
  };
})();
