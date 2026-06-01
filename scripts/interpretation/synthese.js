/**
 * Synthèse croisée MBTI + Big Five + Ennéagramme
 * @param {string}  mbtiType   ex: "INFP"
 * @param {Object}  bigFive    résultat de scoreBigFive()
 * @param {number}  enneaType  1-9
 * @returns {Object}  { title, paragraphs[], strengths[], watchPoints[], careerSuggestions[] }
 */
function buildSynthese(mbtiType, bigFive, enneaType) {
  var mbti  = getMBTIInterpretation(mbtiType)  || {};
  var ennea = getEnneagrammeInterpretation(enneaType) || {};

  // — Traits dominants Big Five —
  var highDims = [], lowDims = [];
  ['O','C','E','A','N'].forEach(function(d) {
    if (bigFive[d].level === 'élevé') highDims.push(d);
    if (bigFive[d].level === 'faible') lowDims.push(d);
  });

  var dimNames = { O:'Ouverture', C:'Conscience', E:'Extraversion', A:'Agréabilité', N:'Neuroticisme' };

  // — Paragraphes —
  var paragraphs = [];

  paragraphs.push(
    "Votre profil MBTI <strong>" + mbtiType + " — " + (mbti.name||'') + "</strong> révèle que vous êtes " +
    (mbti.tagline||'') + ". " + (mbti.description ? mbti.description.split('.')[0] + '.' : '')
  );

  paragraphs.push(
    "L'analyse Big Five confirme et enrichit ce portrait : " +
    (highDims.length > 0
      ? "vous obtenez des scores élevés en " + highDims.map(function(d){return dimNames[d];}).join(', ') + ", ce qui renforce votre profil."
      : "votre profil Big Five est équilibré, sans extrêmes prononcés.") +
    (lowDims.length > 0
      ? " Vos scores plus faibles en " + lowDims.map(function(d){return dimNames[d];}).join(', ') + " indiquent des zones de développement potentiel."
      : "")
  );

  paragraphs.push(
    "Votre type Ennéagramme <strong>" + enneaType + " — " + (ennea.name||'') + "</strong> (" + (ennea.tagline||'') + ") " +
    "éclaire vos motivations profondes : " + (ennea.coreMotivation||'') +
    " Cette dynamique est cohérente avec votre profil MBTI et enrichit la compréhension de vos comportements."
  );

  // — Points de cohérence —
  var strengths = [];
  if (mbti.strengths)  strengths = strengths.concat(mbti.strengths.slice(0,3));
  if (ennea.strengths) strengths = strengths.concat(ennea.strengths.slice(0,2));

  // — Points de vigilance —
  var watchPoints = [];
  if (mbti.weaknesses)  watchPoints = watchPoints.concat(mbti.weaknesses.slice(0,2));
  if (ennea.weaknesses) watchPoints = watchPoints.concat(ennea.weaknesses.slice(0,2));

  // — Suggestions de carrière croisées —
  var careerSuggestions = [];
  if (mbti.careers)  careerSuggestions = careerSuggestions.concat(mbti.careers.slice(0,3));
  if (ennea.professionalStyle) {
    careerSuggestions.push(ennea.professionalStyle.split('.')[0]);
  }

  // — Pistes de développement —
  var development = [];
  if (ennea.growth)  development.push("Croissance (Ennéagramme) : " + ennea.growth);
  if (ennea.stress)  development.push("Sous stress (Ennéagramme) : " + ennea.stress);
  lowDims.forEach(function(d) {
    development.push("Développer votre " + dimNames[d] + " (Big Five) peut élargir votre potentiel.");
  });

  return {
    title:             "Synthèse de votre profil complet",
    mbtiType:          mbtiType,
    mbtiName:          mbti.name || '',
    enneaType:         enneaType,
    enneaName:         ennea.name || '',
    paragraphs:        paragraphs,
    strengths:         strengths,
    watchPoints:       watchPoints,
    careerSuggestions: careerSuggestions,
    development:       development
  };
}
