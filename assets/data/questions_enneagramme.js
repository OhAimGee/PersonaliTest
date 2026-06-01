// Questions Ennéagramme — 45 items, Likert 1-4 (5 questions par type)
// Échelle : 1 = Pas du tout, 2 = Un peu, 3 = Assez, 4 = Tout à fait
window.QUESTIONS_ENNEAGRAMME = [
  // ─── Type 1 — Le Perfectionniste ────────────────────────────────────────
  { id: 1,  type: 1, text: "J'ai des standards très élevés et j'ai du mal à accepter l'imperfection." },
  { id: 2,  type: 1, text: "Une voix critique intérieure me juge souvent et me pousse à m'améliorer." },
  { id: 3,  type: 1, text: "L'éthique et les principes guident fortement mes actions et mes décisions." },
  { id: 4,  type: 1, text: "J'ai toujours envie d'améliorer ce qui pourrait être mieux, même ce qui est déjà bien." },
  { id: 5,  type: 1, text: "Je ressens de la culpabilité ou de l'irritation quand les choses ne sont pas faites correctement." },

  // ─── Type 2 — L'Assistant ───────────────────────────────────────────────
  { id: 6,  type: 2, text: "J'ai naturellement envie d'aider les autres, parfois avant de m'occuper de moi." },
  { id: 7,  type: 2, text: "J'ai un besoin profond d'être aimé(e), apprécié(e) et utile aux autres." },
  { id: 8,  type: 2, text: "J'ai souvent du mal à exprimer mes propres besoins ou à demander de l'aide." },
  { id: 9,  type: 2, text: "Je perçois intuitivement ce dont les autres ont besoin et j'essaie de le leur apporter." },
  { id: 10, type: 2, text: "Je me sens valorisé(e) quand les autres me remercient pour ce que j'ai accompli pour eux." },

  // ─── Type 3 — Le Battant ────────────────────────────────────────────────
  { id: 11, type: 3, text: "Le succès, la réussite et l'atteinte de mes objectifs sont très importants pour moi." },
  { id: 12, type: 3, text: "Je suis très attentif(ve) à l'image que je projette dans mon milieu professionnel et social." },
  { id: 13, type: 3, text: "Je m'adapte facilement à différents contextes et sais me montrer efficace en toutes circonstances." },
  { id: 14, type: 3, text: "J'aime les défis et je suis très orienté(e) vers les résultats et la performance." },
  { id: 15, type: 3, text: "Il m'arrive de perdre de vue qui je suis vraiment derrière mes accomplissements et mon image." },

  // ─── Type 4 — L'Individualiste ──────────────────────────────────────────
  { id: 16, type: 4, text: "Je me sens fondamentalement différent(e) des autres, comme si je n'appartenais pas tout à fait." },
  { id: 17, type: 4, text: "Je vis mes émotions de façon intense et profonde, parfois douloureusement." },
  { id: 18, type: 4, text: "L'authenticité et l'unicité sont essentielles pour moi dans tout ce que je fais." },
  { id: 19, type: 4, text: "J'ai parfois le sentiment qu'il me manque quelque chose d'essentiel que les autres semblent avoir." },
  { id: 20, type: 4, text: "Je suis attiré(e) par la beauté, la mélancolie, la profondeur et les expériences intenses." },

  // ─── Type 5 — L'Observateur ─────────────────────────────────────────────
  { id: 21, type: 5, text: "J'ai besoin de beaucoup de temps et d'espace seul(e) pour me ressourcer et réfléchir." },
  { id: 22, type: 5, text: "Je cherche à comprendre en profondeur avant d'agir ou de m'engager." },
  { id: 23, type: 5, text: "Je m'éloigne naturellement des situations émotionnellement très intenses." },
  { id: 24, type: 5, text: "La connaissance, la compétence et l'expertise sont mes ressources les plus précieuses." },
  { id: 25, type: 5, text: "Je préfère observer et analyser plutôt que de participer activement." },

  // ─── Type 6 — Le Loyaliste ──────────────────────────────────────────────
  { id: 26, type: 6, text: "Je m'inquiète facilement et j'anticipe les problèmes et dangers potentiels." },
  { id: 27, type: 6, text: "La loyauté envers ceux en qui j'ai confiance est une valeur fondamentale pour moi." },
  { id: 28, type: 6, text: "J'ai tendance à douter de moi-même et à chercher des confirmations ou des conseils." },
  { id: 29, type: 6, text: "Je teste la fiabilité des personnes avant de leur accorder ma confiance." },
  { id: 30, type: 6, text: "Je suis très vigilant(e) aux risques, aux menaces et aux dangers potentiels." },

  // ─── Type 7 — L'Épicurien ───────────────────────────────────────────────
  { id: 31, type: 7, text: "J'aime avoir de nombreux projets, activités et expériences en cours en même temps." },
  { id: 32, type: 7, text: "Je cherche à maintenir une humeur positive et j'évite autant que possible la souffrance." },
  { id: 33, type: 7, text: "Je m'ennuie facilement et cherche constamment de la nouveauté et de la stimulation." },
  { id: 34, type: 7, text: "Je suis très optimiste et j'imagine facilement toutes les possibilités enthousiasmantes." },
  { id: 35, type: 7, text: "Il m'est difficile de me limiter à une seule voie quand tant d'autres possibilités s'offrent à moi." },

  // ─── Type 8 — Le Chef ───────────────────────────────────────────────────
  { id: 36, type: 8, text: "J'ai une forte énergie et j'aime naturellement prendre le contrôle et diriger." },
  { id: 37, type: 8, text: "Je défends vigoureusement ce en quoi je crois et les personnes que j'aime." },
  { id: 38, type: 8, text: "J'ai du mal à me montrer vulnérable ou à exposer mes faiblesses aux autres." },
  { id: 39, type: 8, text: "Je confronte les situations directement et avec intensité, sans détour." },
  { id: 40, type: 8, text: "L'injustice et ce que je perçois comme de la faiblesse me mettent profondément en colère." },

  // ─── Type 9 — Le Médiateur ──────────────────────────────────────────────
  { id: 41, type: 9, text: "J'évite les conflits et cherche activement à maintenir la paix et l'harmonie autour de moi." },
  { id: 42, type: 9, text: "J'ai tendance à mettre de côté mes propres désirs pour ne pas contrarier les autres." },
  { id: 43, type: 9, text: "Je peux parfois me sentir effacé(e) ou invisible dans les groupes dominants." },
  { id: 44, type: 9, text: "Il m'est difficile d'exprimer ma colère et je préfère apaiser les tensions." },
  { id: 45, type: 9, text: "Je me perds parfois dans des activités de confort pour éviter ce qui est difficile ou inconfortable." }
];
