/**
 * Graphique radar (toile d'araignée) pour le Big Five
 * Utilise le Canvas natif — aucune dépendance externe
 *
 * @param {HTMLCanvasElement} canvas
 * @param {number[]} values   5 valeurs 0-100 [O, C, E, A, N]
 * @param {string[]} labels   5 étiquettes
 * @param {string}   accentColor  couleur principale (ex: '#6366f1')
 * @param {string}   textColor    couleur du texte
 */
function drawRadarChart(canvas, values, labels, accentColor, textColor) {
  var ctx = canvas.getContext('2d');
  var W   = canvas.width;
  var H   = canvas.height;
  var cx  = W / 2;
  var cy  = H / 2;
  var R   = Math.min(W, H) / 2 - 52;
  var N   = values.length;

  ctx.clearRect(0, 0, W, H);

  // — Grille de fond (5 niveaux) —
  for (var level = 1; level <= 5; level++) {
    var r = R * level / 5;
    ctx.beginPath();
    for (var i = 0; i <= N; i++) {
      var angle = (i / N) * 2 * Math.PI - Math.PI / 2;
      var x = cx + r * Math.cos(angle);
      var y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else         ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(148,163,184,0.25)';
    ctx.lineWidth   = 1;
    ctx.stroke();
  }

  // — Axes —
  for (var i = 0; i < N; i++) {
    var angle = (i / N) * 2 * Math.PI - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + R * Math.cos(angle), cy + R * Math.sin(angle));
    ctx.strokeStyle = 'rgba(148,163,184,0.35)';
    ctx.lineWidth   = 1;
    ctx.stroke();
  }

  // — Polygone de données —
  ctx.beginPath();
  for (var i = 0; i < N; i++) {
    var angle = (i / N) * 2 * Math.PI - Math.PI / 2;
    var val   = Math.min(Math.max(values[i], 0), 100) / 100;
    var x     = cx + R * val * Math.cos(angle);
    var y     = cy + R * val * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else         ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle   = accentColor.replace(')', ',0.25)').replace('rgb(', 'rgba(').replace('#', 'rgba(').replace('rgba(', 'rgba(') || 'rgba(99,102,241,0.25)';
  // Fallback propre pour les couleurs hex
  ctx.fillStyle   = hexToRgba(accentColor, 0.25);
  ctx.fill();
  ctx.strokeStyle = accentColor;
  ctx.lineWidth   = 2.5;
  ctx.stroke();

  // — Points sur les axes —
  for (var i = 0; i < N; i++) {
    var angle = (i / N) * 2 * Math.PI - Math.PI / 2;
    var val   = Math.min(Math.max(values[i], 0), 100) / 100;
    var x     = cx + R * val * Math.cos(angle);
    var y     = cy + R * val * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = accentColor;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth   = 2;
    ctx.stroke();
  }

  // — Étiquettes —
  ctx.font      = 'bold 13px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = textColor || '#334155';
  for (var i = 0; i < N; i++) {
    var angle  = (i / N) * 2 * Math.PI - Math.PI / 2;
    var lx     = cx + (R + 32) * Math.cos(angle);
    var ly     = cy + (R + 32) * Math.sin(angle);
    var score  = Math.round(values[i]);
    ctx.fillText(labels[i], lx, ly - 8);
    ctx.font      = '12px system-ui, sans-serif';
    ctx.fillStyle = accentColor;
    ctx.fillText(score + '%', lx, ly + 8);
    ctx.font      = 'bold 13px system-ui, sans-serif';
    ctx.fillStyle = textColor || '#334155';
  }
}

function hexToRgba(hex, alpha) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return 'rgba(99,102,241,' + alpha + ')';
  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}
