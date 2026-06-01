/**
 * Scoring Ennéagramme
 * @param {Object} answers  { [questionId]: 1..4 }
 * @returns {{ scores, dominantType, wing, percentages }}
 */
function scoreEnneagramme(answers) {
  var sums   = {};
  var counts = {};
  for (var t = 1; t <= 9; t++) { sums[t] = 0; counts[t] = 0; }

  window.QUESTIONS_ENNEAGRAMME.forEach(function(q) {
    var score = answers[q.id];
    if (score === undefined || score === null) return;
    sums[q.type]   += Number(score);
    counts[q.type] += 1;
  });

  // Moyenne normalisée 0-100 par type
  var normalized = {};
  for (var t = 1; t <= 9; t++) {
    var avg = counts[t] > 0 ? sums[t] / counts[t] : 1;
    normalized[t] = Math.round((avg - 1) / 3 * 100);
  }

  // Type dominant
  var dominantType = 1;
  var maxScore = -1;
  for (var t = 1; t <= 9; t++) {
    if (normalized[t] > maxScore) { maxScore = normalized[t]; dominantType = t; }
  }

  // Aile : type adjacent (1-9 circulaire) avec le score le plus élevé
  var adjLeft  = dominantType === 1 ? 9 : dominantType - 1;
  var adjRight = dominantType === 9 ? 1 : dominantType + 1;
  var wing     = normalized[adjLeft] >= normalized[adjRight] ? adjLeft : adjRight;

  // Proportions pour le graphique
  var total = 0;
  for (var t = 1; t <= 9; t++) total += normalized[t];
  if (total === 0) total = 1;

  var percentages = {};
  for (var t = 1; t <= 9; t++) {
    percentages[t] = normalized[t] / total;
  }

  return {
    scores:       normalized,
    dominantType: dominantType,
    wing:         wing,
    percentages:  percentages
  };
}
