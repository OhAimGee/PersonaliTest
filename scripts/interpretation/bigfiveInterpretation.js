// Données d'interprétation Big Five (OCEAN)
var BIGFIVE_DATA = {
  O: {
    name: "Ouverture à l'expérience",
    letter: "O",
    color: "#8b5cf6",
    levels: {
      élevé: {
        label: "Très ouvert(e)",
        description: "Vous êtes très curieux(se), créatif(ve) et attiré(e) par les nouvelles idées, les arts et les expériences variées. Vous aimez remettre en question les conventions et explorer de nouveaux territoires intellectuels. Votre imagination est vive et vous trouvez la beauté dans les idées abstraites.",
        tip: "Canalisez cette créativité en vous assurant de finaliser vos projets."
      },
      moyen: {
        label: "Modérément ouvert(e)",
        description: "Vous équilibrez bien curiosité et pragmatisme. Ouvert(e) aux nouvelles idées quand elles s'avèrent utiles, vous appréciez aussi les choses familières et éprouvées. Vous savez apprécier la créativité sans vous perdre dans l'abstraction.",
        tip: "Continuez à explorer tout en ancrant vos idées dans la réalité."
      },
      faible: {
        label: "Conventionnel(le)",
        description: "Vous préférez les approches éprouvées et le concret au spéculatif. Pratique et ancré(e) dans le réel, vous excellez dans les tâches qui demandent précision et constance. Vous faites confiance à l'expérience plutôt qu'à la théorie.",
        tip: "N'hésitez pas à sortir occasionnellement de votre zone de confort — les nouvelles perspectives enrichissent."
      }
    }
  },
  C: {
    name: "Conscience",
    letter: "C",
    color: "#06b6d4",
    levels: {
      élevé: {
        label: "Très consciencieux(se)",
        description: "Vous êtes organisé(e), fiable et orienté(e) vers les objectifs. Votre autodiscipline et votre persévérance vous permettent d'accomplir beaucoup. Vous planifiez soigneusement et respectez vos engagements. Vous portez un grand souci de la qualité dans tout ce que vous faites.",
        tip: "Veillez à ne pas tomber dans le perfectionnisme excessif ou la rigidité."
      },
      moyen: {
        label: "Équilibré(e)",
        description: "Vous savez être organisé(e) quand c'est nécessaire sans pour autant être rigide. Vous équilibrez planification et flexibilité. Vous pouvez travailler de façon structurée mais aussi improviser selon les circonstances.",
        tip: "Maintenez cet équilibre sain entre structure et adaptabilité."
      },
      faible: {
        label: "Flexible et spontané(e)",
        description: "Vous préférez la spontanéité à la planification stricte. Adaptable et flexible, vous vous sentez à l'aise dans les environnements changeants. Vous pouvez parfois avoir du mal à respecter des délais ou à maintenir une organisation rigoureuse.",
        tip: "Des outils de gestion simples (listes, calendrier) peuvent vous aider à structure votre efficacité."
      }
    }
  },
  E: {
    name: "Extraversion",
    letter: "E",
    color: "#f59e0b",
    levels: {
      élevé: {
        label: "Très extraverti(e)",
        description: "Vous êtes sociable, expressif(ve) et vous épanouissez dans les interactions sociales. Vous tirez votre énergie des autres et vous sentez rechargé(e) après les activités sociales. Votre enthousiasme et votre chaleur attirent les gens vers vous naturellement.",
        tip: "Prenez aussi du temps pour vous ressourcer et écouter votre monde intérieur."
      },
      moyen: {
        label: "Ambiverti(e)",
        description: "Vous êtes à l'aise aussi bien en groupe qu'en solitude selon le contexte. Ni totalement extraverti(e) ni introverti(e), vous savez adapter votre niveau d'engagement social à la situation. C'est une position très flexible et adaptable.",
        tip: "Votre flexibilité sociale est un atout précieux — cultivez-la."
      },
      faible: {
        label: "Introverti(e)",
        description: "Vous préférez les interactions profondes et limitées aux interactions superficielles et nombreuses. Vous vous ressourcez dans la solitude et avez besoin de temps calme pour retrouver votre énergie. Votre monde intérieur est riche et vous pensez avant de parler.",
        tip: "Votre capacité de réflexion profonde est un atout majeur — ne sous-estimez pas votre impact en groupe."
      }
    }
  },
  A: {
    name: "Agréabilité",
    letter: "A",
    color: "#10b981",
    levels: {
      élevé: {
        label: "Très agréable",
        description: "Vous êtes coopératif(ve), empathique et orienté(e) vers les autres. Vous faites confiance facilement, pardonnez aisément et cherchez à maintenir l'harmonie. Votre bienveillance sincère crée des relations chaleureuses et durables.",
        tip: "Veillez à ne pas négliger vos propres besoins au profit des autres."
      },
      moyen: {
        label: "Équilibré(e)",
        description: "Vous savez être coopératif(ve) et empathique tout en affirmant vos propres besoins quand nécessaire. Vous pouvez travailler en équipe harmonieusement sans pour autant vous effacer.",
        tip: "Cet équilibre entre ouverture et affirmation est une force précieuse."
      },
      faible: {
        label: "Compétitif(ve) et direct(e)",
        description: "Vous êtes direct(e), compétitif(ve) et moins enclin(e) à faire des compromis. Vous êtes critique et sceptique, ce qui vous rend efficace dans l'analyse mais peut parfois créer des frictions relationnelles.",
        tip: "Développer l'écoute empathique peut enrichir considérablement vos relations professionnelles et personnelles."
      }
    }
  },
  N: {
    name: "Neuroticisme",
    letter: "N",
    color: "#ef4444",
    levels: {
      élevé: {
        label: "Émotionnellement sensible",
        description: "Vous ressentez les émotions de façon intense et êtes plus susceptible de ressentir du stress, de l'anxiété ou des sautes d'humeur. Cette sensibilité peut être une force créative mais peut aussi être épuisante. Vous percevez finement les nuances émotionnelles.",
        tip: "Des pratiques de gestion du stress (méditation, sport, sommeil) peuvent significativement améliorer votre bien-être."
      },
      moyen: {
        label: "Stabilité modérée",
        description: "Vous connaissez des hauts et des bas émotionnels comme la plupart des personnes, mais vous gérez généralement bien la pression ordinaire. Vous n'êtes pas imperméable aux stress mais vous vous en remettez raisonnablement bien.",
        tip: "Maintenez vos routines de bien-être pour rester dans cet équilibre."
      },
      faible: {
        label: "Émotionnellement stable",
        description: "Vous êtes calme, serein(e) et résistant(e) au stress. Vous gérez les pressions et les difficultés sans vous laisser déborder. Votre stabilité émotionnelle est un atout dans les situations de crise et vous permet d'être une présence rassurante pour votre entourage.",
        tip: "Votre stabilité est précieuse — veillez à ne pas passer à côté des signaux émotionnels importants."
      }
    }
  }
};

/**
 * @param {{ O, C, E, A, N }} scores  résultat de scoreBigFive()
 * @returns {Object}  interprétation enrichie par dimension
 */
function getBigFiveInterpretation(scores) {
  var result = {};
  ['O', 'C', 'E', 'A', 'N'].forEach(function(dim) {
    var data  = BIGFIVE_DATA[dim];
    var level = scores[dim].level;
    result[dim] = {
      name:       data.name,
      letter:     data.letter,
      color:      data.color,
      score:      scores[dim],
      levelLabel: data.levels[level].label,
      description:data.levels[level].description,
      tip:        data.levels[level].tip
    };
  });
  return result;
}
