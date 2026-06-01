/**
 * Scoring Big Five (OCEAN)
 * @param {Object} answers  { [questionId]: 1..5 }
 * @returns {{ O, C, E, A, N }}  chacun avec { raw, normalized, level }
 */
function scoreBigFive(answers) {
  var raw = { O: [], C: [], E: [], A: [], N: [] };

  window.QUESTIONS_BIGFIVE.forEach(function(q) {
    var score = answers[q.id];
    if (score === undefined || score === null) return;
    score = Number(score);
    if (q.reverse) score = 6 - score;
    raw[q.dimension].push(score);
  });

  var result = {};
  ['O', 'C', 'E', 'A', 'N'].forEach(function(dim) {
    var arr = raw[dim];
    if (arr.length === 0) {
      result[dim] = { raw: 3, normalized: 50, level: 'moyen' };
      return;
    }
    var avg = arr.reduce(function(a, b) { return a + b; }, 0) / arr.length;
    var normalized = Math.round((avg - 1) / 4 * 100);
    var level = normalized >= 65 ? 'élevé' : (normalized <= 35 ? 'faible' : 'moyen');
    result[dim] = { raw: avg, normalized: normalized, level: level };
  });

  return result;
}
