/**
 * Graphique circulaire (donut) pour l'Ennéagramme
 * Affiche les 9 types proportionnellement
 *
 * @param {HTMLCanvasElement} canvas
 * @param {Object} percentages   { 1: 0.12, 2: 0.08, ..., 9: 0.10 }
 * @param {number} dominantType  type dominant (1-9)
 * @param {string} textColor
 */
function drawPieChart(canvas, percentages, dominantType, textColor) {
  var ctx     = canvas.getContext('2d');
  var W       = canvas.width;
  var H       = canvas.height;
  var cx      = W / 2;
  var cy      = H / 2;
  var outerR  = Math.min(W, H) / 2 - 40;
  var innerR  = outerR * 0.45;

  ctx.clearRect(0, 0, W, H);

  var colors = {
    1: '#f59e0b', 2: '#ec4899', 3: '#f97316',
    4: '#8b5cf6', 5: '#06b6d4', 6: '#3b82f6',
    7: '#10b981', 8: '#dc2626', 9: '#64748b'
  };

  var typeNames = {
    1:'Perfectionniste', 2:'Assistant', 3:'Battant',
    4:'Individualiste',  5:'Observateur', 6:'Loyaliste',
    7:'Épicurien',       8:'Chef',        9:'Médiateur'
  };

  // Accumulate angles
  var startAngle = -Math.PI / 2;
  var types      = [1,2,3,4,5,6,7,8,9];
  var slices     = [];

  types.forEach(function(t) {
    var pct   = percentages[t] || 0;
    var sweep = pct * 2 * Math.PI;
    slices.push({ type: t, start: startAngle, end: startAngle + sweep });
    startAngle += sweep;
  });

  // Draw slices
  slices.forEach(function(s) {
    var isDominant = s.type === dominantType;
    var r = isDominant ? outerR + 8 : outerR;

    // Shadow for dominant
    if (isDominant) {
      ctx.shadowColor   = colors[s.type];
      ctx.shadowBlur    = 12;
    }

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, s.start, s.end);
    ctx.closePath();
    ctx.fillStyle = colors[s.type];
    ctx.fill();

    ctx.shadowBlur  = 0;
    ctx.shadowColor = 'transparent';

    // Séparateur blanc
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.lineWidth   = 2;
    ctx.stroke();
  });

  // Trou central (donut)
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, 2 * Math.PI);
  ctx.fillStyle = 'var(--bg, #fff)';

  // On utilise une couleur fixe, le CSS s'occupera du reste via la variable
  // Fallback: détecter dark mode
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  ctx.fillStyle = isDark ? '#0f172a' : '#ffffff';
  ctx.fill();

  // Texte central
  var enData = ENNEAGRAMME_TYPES[dominantType];
  ctx.fillStyle = textColor || (isDark ? '#e2e8f0' : '#1e293b');
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 22px system-ui, sans-serif';
  ctx.fillText('Type ' + dominantType, cx, cy - 14);
  ctx.font = '13px system-ui, sans-serif';
  ctx.fillStyle = colors[dominantType];
  ctx.fillText(enData ? enData.name : '', cx, cy + 10);

  // Étiquettes de type (petites, sur les tranches)
  slices.forEach(function(s) {
    var midAngle = (s.start + s.end) / 2;
    var sweep    = s.end - s.start;
    if (sweep < 0.18) return; // trop petite

    var lr = outerR * 0.72;
    var lx = cx + lr * Math.cos(midAngle);
    var ly = cy + lr * Math.sin(midAngle);

    ctx.font      = 'bold 12px system-ui, sans-serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(s.type, lx, ly);
  });
}
