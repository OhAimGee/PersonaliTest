/**
 * Scoring MBTI
 * @param {Object} answers  { [questionId]: 'A' | 'B' }
 * @returns {{ type: string, scores: Object, percentages: Object }}
 */
function scoreMBTI(answers) {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  window.QUESTIONS_MBTI.forEach(function(q) {
    const answer = answers[q.id];
    if (!answer) return;
    if (answer === 'A') scores[q.directionA]++;
    else               scores[q.directionB]++;
  });

  const safeDiv = function(a, b) {
    return (a + b > 0) ? Math.round(a / (a + b) * 100) : 50;
  };

  const type =
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  const percentages = {
    EI: { E: safeDiv(scores.E, scores.I), I: safeDiv(scores.I, scores.E) },
    SN: { S: safeDiv(scores.S, scores.N), N: safeDiv(scores.N, scores.S) },
    TF: { T: safeDiv(scores.T, scores.F), F: safeDiv(scores.F, scores.T) },
    JP: { J: safeDiv(scores.J, scores.P), P: safeDiv(scores.P, scores.J) }
  };

  return { type: type, scores: scores, percentages: percentages };
}
