// Questions Big Five (OCEAN) — 50 items, Likert 1-5
// reverse: true = l'item est inversé (score = 6 - score brut)
window.QUESTIONS_BIGFIVE = [
  // ─── O : Ouverture à l'expérience ───────────────────────────────────────
  { id: 1,  dimension: "O", reverse: false, text: "J'aime explorer de nouvelles idées et concepts." },
  { id: 2,  dimension: "O", reverse: false, text: "J'apprécie profondément l'art, la musique ou la littérature." },
  { id: 3,  dimension: "O", reverse: false, text: "J'ai une imagination riche et créative." },
  { id: 4,  dimension: "O", reverse: false, text: "Je suis curieux(se) de nombreux sujets très différents." },
  { id: 5,  dimension: "O", reverse: false, text: "J'aime réfléchir à des questions philosophiques ou abstraites." },
  { id: 6,  dimension: "O", reverse: true,  text: "Je préfère les activités familières aux nouvelles expériences." },
  { id: 7,  dimension: "O", reverse: false, text: "Les discussions intellectuelles me stimulent vraiment." },
  { id: 8,  dimension: "O", reverse: false, text: "J'apprécie les œuvres d'art et les expériences esthétiques." },
  { id: 9,  dimension: "O", reverse: true,  text: "Je préfère la routine à la nouveauté." },
  { id: 10, dimension: "O", reverse: false, text: "J'aime imaginer des mondes ou des situations hypothétiques." },

  // ─── C : Conscience ─────────────────────────────────────────────────────
  { id: 11, dimension: "C", reverse: false, text: "Je termine toujours ce que j'ai commencé." },
  { id: 12, dimension: "C", reverse: false, text: "Je suis organisé(e) et méthodique dans mon travail." },
  { id: 13, dimension: "C", reverse: true,  text: "J'ai tendance à procrastiner les tâches importantes." },
  { id: 14, dimension: "C", reverse: false, text: "Je respecte les règles et les obligations que je me suis fixé(e)." },
  { id: 15, dimension: "C", reverse: false, text: "Je planifie à l'avance avant d'agir." },
  { id: 16, dimension: "C", reverse: true,  text: "Je suis souvent en retard ou j'oublie des rendez-vous." },
  { id: 17, dimension: "C", reverse: false, text: "Je travaille de façon consciencieuse et rigoureuse." },
  { id: 18, dimension: "C", reverse: true,  text: "Il m'arrive souvent de laisser les choses à moitié faites." },
  { id: 19, dimension: "C", reverse: false, text: "Je maintiens mon espace de travail ordonné et fonctionnel." },
  { id: 20, dimension: "C", reverse: false, text: "Je m'efforce de donner le meilleur de moi-même dans tout ce que je fais." },

  // ─── E : Extraversion ───────────────────────────────────────────────────
  { id: 21, dimension: "E", reverse: false, text: "Je me sens à l'aise dans les situations sociales." },
  { id: 22, dimension: "E", reverse: false, text: "J'ai souvent tendance à me retrouver au centre de l'attention." },
  { id: 23, dimension: "E", reverse: true,  text: "Je préfère passer du temps seul(e) plutôt qu'en groupe." },
  { id: 24, dimension: "E", reverse: false, text: "J'aime rencontrer de nouvelles personnes." },
  { id: 25, dimension: "E", reverse: false, text: "Je suis sociable et j'aime les échanges animés." },
  { id: 26, dimension: "E", reverse: true,  text: "Les interactions sociales prolongées m'épuisent souvent." },
  { id: 27, dimension: "E", reverse: false, text: "J'aime me retrouver entouré(e) de beaucoup de gens." },
  { id: 28, dimension: "E", reverse: false, text: "J'ai tendance à prendre des initiatives dans les groupes." },
  { id: 29, dimension: "E", reverse: true,  text: "Je suis plutôt réservé(e) avec les personnes que je ne connais pas." },
  { id: 30, dimension: "E", reverse: false, text: "J'exprime facilement mes émotions et mes opinions." },

  // ─── A : Agréabilité ────────────────────────────────────────────────────
  { id: 31, dimension: "A", reverse: false, text: "Je me soucie sincèrement du bien-être des autres." },
  { id: 32, dimension: "A", reverse: false, text: "J'essaie de voir le meilleur en chaque personne." },
  { id: 33, dimension: "A", reverse: true,  text: "J'ai tendance à être critique et méfiant(e) envers les autres." },
  { id: 34, dimension: "A", reverse: false, text: "Je suis serviable et coopératif(ve) avec les autres." },
  { id: 35, dimension: "A", reverse: false, text: "Je pardonne facilement quand quelqu'un m'a blessé(e)." },
  { id: 36, dimension: "A", reverse: true,  text: "Je peux me montrer froid(e) ou distant(e) envers les autres." },
  { id: 37, dimension: "A", reverse: false, text: "Je fais facilement confiance aux personnes que je rencontre." },
  { id: 38, dimension: "A", reverse: true,  text: "Je peux parfois être arrogant(e) ou dédaigneux(se)." },
  { id: 39, dimension: "A", reverse: false, text: "Je cherche activement à éviter les conflits et les tensions." },
  { id: 40, dimension: "A", reverse: false, text: "Je montre facilement de la compassion et de l'empathie envers les autres." },

  // ─── N : Neuroticisme ───────────────────────────────────────────────────
  { id: 41, dimension: "N", reverse: false, text: "Je me fais facilement du souci pour les choses." },
  { id: 42, dimension: "N", reverse: false, text: "Je me sens souvent stressé(e) ou anxieux(se)." },
  { id: 43, dimension: "N", reverse: true,  text: "Je reste calme et serein(e) dans les situations difficiles." },
  { id: 44, dimension: "N", reverse: false, text: "Mes humeurs changent souvent et rapidement." },
  { id: 45, dimension: "N", reverse: true,  text: "Je me remets facilement et rapidement des contrariétés." },
  { id: 46, dimension: "N", reverse: false, text: "Je me sens souvent insécure ou incertain(e) sur moi-même." },
  { id: 47, dimension: "N", reverse: false, text: "J'ai souvent peur que les choses tournent mal." },
  { id: 48, dimension: "N", reverse: true,  text: "Je suis émotionnellement stable et équilibré(e)." },
  { id: 49, dimension: "N", reverse: false, text: "Je me sens parfois submergé(e) par mes émotions." },
  { id: 50, dimension: "N", reverse: true,  text: "Je gère bien la pression et les situations stressantes." }
];
