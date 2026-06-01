/**
 * Graphique en barres horizontales pour le MBTI
 * Affiche les 4 dimensions avec la répartition en pourcentage
 *
 * @param {HTMLCanvasElement} canvas
 * @param {Object} percentages  ex: { EI:{E:60,I:40}, SN:{S:30,N:70}, TF:{T:55,F:45}, JP:{J:80,P:20} }
 * @param {string} textColor
 */
function drawBarChart(canvas, percentages, textColor) {
  var ctx  = canvas.getContext('2d');
  var W    = canvas.width;
  var H    = canvas.height;

  ctx.clearRect(0, 0, W, H);

  var dims = [
    { key: 'EI', left: 'E', right: 'I', colorL: '#6366f1', colorR: '#8b5cf6',
      labelL: 'Extraverti(e)', labelR: 'Introverti(e)' },
    { key: 'SN', left: 'S', right: 'N', colorL: '#06b6d4', colorR: '#0284c7',
      labelL: 'Sensitif(ve)',  labelR: 'Intuitif(ve)' },
    { key: 'TF', left: 'T', right: 'F', colorL: '#f59e0b', colorR: '#ec4899',
      labelL: 'Pensée',        labelR: 'Sentiment' },
    { key: 'JP', left: 'J', right: 'P', colorL: '#10b981', colorR: '#64748b',
      labelL: 'Jugement',      labelR: 'Perception' }
  ];

  var rowH    = H / 4;
  var barH    = 28;
  var padLeft = 100;
  var barW    = W - padLeft - 100;

  dims.forEach(function(dim, idx) {
    var y     = idx * rowH;
    var mid   = y + rowH / 2;
    var pctL  = (percentages[dim.key][dim.left]  || 50) / 100;
    var pctR  = (percentages[dim.key][dim.right] || 50) / 100;
    var winner = pctL >= 0.5 ? dim.left : dim.right;

    // Étiquettes gauche / droite
    ctx.font      = '12px system-ui, sans-serif';
    ctx.fillStyle = textColor || '#334155';
    ctx.textAlign = 'right';
    ctx.fillText(dim.labelL + ' (' + Math.round(pctL * 100) + '%)', padLeft - 8, mid + 4);

    ctx.textAlign = 'left';
    ctx.fillText(dim.labelR + ' (' + Math.round(pctR * 100) + '%)', padLeft + barW + 8, mid + 4);

    // Fond de barre
    ctx.fillStyle = 'rgba(148,163,184,0.2)';
    roundRect(ctx, padLeft, mid - barH / 2, barW, barH, barH / 2);
    ctx.fill();

    // Partie gauche
    ctx.fillStyle = dim.colorL;
    roundRect(ctx, padLeft, mid - barH / 2, barW * pctL, barH, { tl: barH/2, bl: barH/2, tr: 0, br: 0 });
    ctx.fill();

    // Partie droite (overlap via right side)
    ctx.fillStyle = dim.colorR;
    var rw = barW * pctR;
    roundRect(ctx, padLeft + barW - rw, mid - barH / 2, rw, barH, { tl: 0, bl: 0, tr: barH/2, br: barH/2 });
    ctx.fill();

    // Lettre dominante au centre
    ctx.font      = 'bold 14px system-ui, sans-serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText(winner, padLeft + barW / 2, mid + 5);
  });
}

/**
 * Dessine un rect avec coins arrondis sélectifs
 * radii peut être un nombre ou { tl, tr, br, bl }
 */
function roundRect(ctx, x, y, w, h, radii) {
  if (w <= 0) return;
  var r = typeof radii === 'number'
    ? { tl: radii, tr: radii, br: radii, bl: radii }
    : radii;

  ctx.beginPath();
  ctx.moveTo(x + r.tl, y);
  ctx.lineTo(x + w - r.tr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r.tr);
  ctx.lineTo(x + w, y + h - r.br);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r.br, y + h);
  ctx.lineTo(x + r.bl, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r.bl);
  ctx.lineTo(x, y + r.tl);
  ctx.quadraticCurveTo(x, y, x + r.tl, y);
  ctx.closePath();
}
