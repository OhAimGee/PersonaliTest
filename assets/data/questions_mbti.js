// Questions MBTI — 40 questions, 4 dimensions (10 chacune)
// directionA = pôle vers lequel l'option A pointe
// directionB = pôle vers lequel l'option B pointe
window.QUESTIONS_MBTI = [
  // ─── EI : Extraversion / Introversion ───────────────────────────────────
  {
    id: 1, dimension: "EI", directionA: "E", directionB: "I",
    text: "Après une journée chargée avec beaucoup d'interactions sociales, vous avez tendance à :",
    optionA: "Vous sentir rechargé(e) et vouloir continuer à socialiser",
    optionB: "Vous sentir épuisé(e) et avoir besoin de temps seul(e) pour récupérer"
  },
  {
    id: 2, dimension: "EI", directionA: "E", directionB: "I",
    text: "Votre week-end idéal ressemble plutôt à :",
    optionA: "Des sorties avec des amis, une fête ou des activités en groupe",
    optionB: "Rester chez vous à lire, regarder des films ou pratiquer une activité solitaire"
  },
  {
    id: 3, dimension: "EI", directionA: "E", directionB: "I",
    text: "En réunion ou dans une discussion de groupe, vous :",
    optionA: "Intervenez facilement et pensez souvent à voix haute",
    optionB: "Réfléchissez avant de parler et préférez souvent écouter"
  },
  {
    id: 4, dimension: "EI", directionA: "E", directionB: "I",
    text: "Quand vous avez un problème complexe à résoudre :",
    optionA: "Vous aimez en parler avec d'autres pour clarifier vos idées",
    optionB: "Vous préférez y réfléchir seul(e) avant d'en discuter"
  },
  {
    id: 5, dimension: "EI", directionA: "E", directionB: "I",
    text: "Dans une fête ou un grand rassemblement :",
    optionA: "Vous circulez et engagez la conversation avec beaucoup de personnes",
    optionB: "Vous restez avec un petit groupe de personnes que vous connaissez déjà"
  },
  {
    id: 6, dimension: "EI", directionA: "E", directionB: "I",
    text: "Votre style de communication est plutôt :",
    optionA: "Expressif et ouvert — vous partagez facilement vos pensées",
    optionB: "Réservé et sélectif — vous parlez quand vous avez quelque chose d'important à dire"
  },
  {
    id: 7, dimension: "EI", directionA: "E", directionB: "I",
    text: "Concernant vos amis et relations :",
    optionA: "Vous avez un large cercle de connaissances et amis",
    optionB: "Vous avez peu d'amis mais des relations très profondes"
  },
  {
    id: 8, dimension: "EI", directionA: "E", directionB: "I",
    text: "Pour travailler de façon optimale, vous préférez :",
    optionA: "Travailler en équipe dans un environnement dynamique",
    optionB: "Travailler seul(e) dans un endroit calme et sans interruptions"
  },
  {
    id: 9, dimension: "EI", directionA: "E", directionB: "I",
    text: "Quand vous rencontrez de nouvelles personnes :",
    optionA: "Vous trouvez cela facile et stimulant",
    optionB: "Cela vous demande un effort — vous préférez les gens que vous connaissez déjà"
  },
  {
    id: 10, dimension: "EI", directionA: "E", directionB: "I",
    text: "Après des vacances très animées avec beaucoup de monde :",
    optionA: "Vous rentrez revigoré(e) et plein(e) d'énergie",
    optionB: "Vous avez besoin d'une période calme pour récupérer vraiment"
  },

  // ─── SN : Sensation / iNtuition ─────────────────────────────────────────
  {
    id: 11, dimension: "SN", directionA: "S", directionB: "N",
    text: "Face à un nouveau projet, vous focalisez d'abord votre attention sur :",
    optionA: "Les étapes concrètes et les détails pratiques à mettre en place",
    optionB: "Le tableau d'ensemble, les possibilités futures et la vision globale"
  },
  {
    id: 12, dimension: "SN", directionA: "S", directionB: "N",
    text: "Vous faites davantage confiance à :",
    optionA: "Votre expérience passée et les faits concrets et vérifiables",
    optionB: "Votre intuition et vos pressentiments sur ce qui pourrait être"
  },
  {
    id: 13, dimension: "SN", directionA: "S", directionB: "N",
    text: "Ce qui vous intéresse davantage :",
    optionA: "Le présent et ce qui est réel et tangible maintenant",
    optionB: "L'avenir et ce qui pourrait exister ou devenir"
  },
  {
    id: 14, dimension: "SN", directionA: "S", directionB: "N",
    text: "En lisant un manuel d'instructions :",
    optionA: "Vous les lisez et les suivez étape par étape, dans l'ordre",
    optionB: "Vous saisissez l'idée générale et vous adaptez selon les besoins"
  },
  {
    id: 15, dimension: "SN", directionA: "S", directionB: "N",
    text: "Vous décrivez les choses et les situations de façon :",
    optionA: "Concrète, précise et littérale",
    optionB: "Métaphorique, abstraite et en liant à d'autres idées"
  },
  {
    id: 16, dimension: "SN", directionA: "S", directionB: "N",
    text: "Ce que vous préférez faire au travail :",
    optionA: "Appliquer et améliorer des méthodes éprouvées qui fonctionnent",
    optionB: "Inventer de nouvelles approches et explorer des idées originales"
  },
  {
    id: 17, dimension: "SN", directionA: "S", directionB: "N",
    text: "Comment vous vous décririez le mieux :",
    optionA: "Pratique et réaliste — les pieds sur terre",
    optionB: "Imaginatif(ve) et tourné(e) vers les idées et les possibilités"
  },
  {
    id: 18, dimension: "SN", directionA: "S", directionB: "N",
    text: "Pour apprendre quelque chose de nouveau :",
    optionA: "Vous préférez les exemples concrets et les démonstrations pratiques",
    optionB: "Vous préférez comprendre les principes théoriques sous-jacents"
  },
  {
    id: 19, dimension: "SN", directionA: "S", directionB: "N",
    text: "Au quotidien, vous :",
    optionA: "Appréciez les routines et les habitudes établies",
    optionB: "Cherchez de la variété et des nouvelles expériences"
  },
  {
    id: 20, dimension: "SN", directionA: "S", directionB: "N",
    text: "Quand vous lisez ou regardez quelque chose, vous êtes davantage attiré(e) par :",
    optionA: "Les récits concrets et réalistes, les faits et les reportages",
    optionB: "Les récits symboliques, la science-fiction ou les grandes théories"
  },

  // ─── TF : Thinking / Feeling ────────────────────────────────────────────
  {
    id: 21, dimension: "TF", directionA: "T", directionB: "F",
    text: "Quand vous prenez une décision importante, vous :",
    optionA: "Analysez objectivement les faits et la logique, même si cela heurte les sentiments",
    optionB: "Tenez compte d'abord des personnes impliquées et de leurs émotions"
  },
  {
    id: 22, dimension: "TF", directionA: "T", directionB: "F",
    text: "En cas de désaccord avec quelqu'un :",
    optionA: "Vous défendez votre point de vue avec des arguments logiques",
    optionB: "Vous cherchez à trouver un terrain d'entente harmonieux"
  },
  {
    id: 23, dimension: "TF", directionA: "T", directionB: "F",
    text: "Pour vous, une bonne décision est avant tout :",
    optionA: "Logique, cohérente et objectivement défendable",
    optionB: "Juste envers toutes les personnes concernées et respectueuse des valeurs"
  },
  {
    id: 24, dimension: "TF", directionA: "T", directionB: "F",
    text: "Quand un ami vous expose un problème :",
    optionA: "Vous cherchez rapidement des solutions pratiques et efficaces",
    optionB: "Vous offrez d'abord votre soutien émotionnel et votre écoute"
  },
  {
    id: 25, dimension: "TF", directionA: "T", directionB: "F",
    text: "Ce qui vous motive davantage :",
    optionA: "La compétence, l'efficacité et l'excellence dans ce que vous faites",
    optionB: "L'harmonie dans les relations et le bien-être des personnes autour de vous"
  },
  {
    id: 26, dimension: "TF", directionA: "T", directionB: "F",
    text: "Quand vous devez critiquer le travail de quelqu'un :",
    optionA: "Vous êtes direct(e) et objectif(ve), même si c'est difficile à entendre",
    optionB: "Vous cherchez à être diplomatique pour ne pas blesser"
  },
  {
    id: 27, dimension: "TF", directionA: "T", directionB: "F",
    text: "Vous admirez davantage chez les autres :",
    optionA: "La rigueur intellectuelle, la cohérence et la clarté logique",
    optionB: "La chaleur humaine, l'empathie et la capacité à connecter"
  },
  {
    id: 28, dimension: "TF", directionA: "T", directionB: "F",
    text: "Dans un groupe en conflit :",
    optionA: "Vous analysez qui a raison en vous basant sur les faits",
    optionB: "Vous essayez de comprendre les émotions de chacun et de réconcilier"
  },
  {
    id: 29, dimension: "TF", directionA: "T", directionB: "F",
    text: "Le chef idéal pour vous est quelqu'un qui :",
    optionA: "Prend des décisions justes, cohérentes et bien argumentées",
    optionB: "Se soucie profondément de son équipe et de leur épanouissement"
  },
  {
    id: 30, dimension: "TF", directionA: "T", directionB: "F",
    text: "Dans les situations difficiles, vous avez tendance à :",
    optionA: "Rester factuel(le) et analyser calmement la situation",
    optionB: "Être très affecté(e) émotionnellement et ressentir les choses intensément"
  },

  // ─── JP : Judging / Perceiving ──────────────────────────────────────────
  {
    id: 31, dimension: "JP", directionA: "J", directionB: "P",
    text: "Votre espace de travail est généralement :",
    optionA: "Bien organisé et rangé — tout a sa place",
    optionB: "Un peu désordonné, mais vous savez où tout se trouve"
  },
  {
    id: 32, dimension: "JP", directionA: "J", directionB: "P",
    text: "Face à un délai à respecter :",
    optionA: "Vous terminez votre travail bien avant l'échéance",
    optionB: "Vous finissez souvent à la dernière minute (mais vous finissez !)"
  },
  {
    id: 33, dimension: "JP", directionA: "J", directionB: "P",
    text: "Quand vous planifiez un voyage :",
    optionA: "Vous préparez tout à l'avance : réservations, itinéraire, activités",
    optionB: "Vous préférez partir sans plan fixe et voir ce qui se présente"
  },
  {
    id: 34, dimension: "JP", directionA: "J", directionB: "P",
    text: "Au quotidien, vous :",
    optionA: "Faites des listes de tâches et planifiez vos journées",
    optionB: "Préférez improviser et vous adapter selon les circonstances"
  },
  {
    id: 35, dimension: "JP", directionA: "J", directionB: "P",
    text: "Une fois qu'un projet est terminé et rendu, vous :",
    optionA: "Vous sentez soulagé(e) et satisfait(e) de l'avoir complété",
    optionB: "Continuez parfois à y penser et voudriez encore l'améliorer"
  },
  {
    id: 36, dimension: "JP", directionA: "J", directionB: "P",
    text: "Vous préférez avoir :",
    optionA: "Un emploi du temps structuré et des routines claires",
    optionB: "De la flexibilité et la liberté de changer de cap selon l'envie"
  },
  {
    id: 37, dimension: "JP", directionA: "J", directionB: "P",
    text: "Vous prenez vos décisions :",
    optionA: "Assez rapidement — vous aimez trancher et passer à la suite",
    optionB: "En laissant les options ouvertes le plus longtemps possible"
  },
  {
    id: 38, dimension: "JP", directionA: "J", directionB: "P",
    text: "Pour le week-end à venir :",
    optionA: "Vous planifiez vos activités à l'avance",
    optionB: "Vous décidez au dernier moment selon comment vous vous sentez"
  },
  {
    id: 39, dimension: "JP", directionA: "J", directionB: "P",
    text: "Dans un projet de groupe :",
    optionA: "Vous aimez définir les rôles, le planning et les étapes dès le début",
    optionB: "Vous préférez laisser les choses évoluer naturellement"
  },
  {
    id: 40, dimension: "JP", directionA: "J", directionB: "P",
    text: "Face à un imprévu qui bouleverse vos plans :",
    optionA: "Cela vous perturbe — vous préférez que les choses se passent comme prévu",
    optionB: "Vous vous adaptez facilement, voire trouvez cela stimulant"
  }
];
