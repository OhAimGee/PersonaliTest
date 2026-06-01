// Données d'interprétation pour les 16 types MBTI
var MBTI_TYPES = {
  ISTJ: {
    name: "L'Inspecteur",
    tagline: "Fiable, méthodique et déterminé",
    description: "Les ISTJ sont des piliers de fiabilité et d'intégrité. Pragmatiques et orientés vers les faits, ils respectent les traditions, les règles et les engagements avec une discipline remarquable. Leur sens du devoir et leur persévérance en font des personnes sur lesquelles on peut toujours compter.",
    strengths: ["Fiabilité et constance", "Sens des responsabilités", "Organisation rigoureuse", "Attention aux détails", "Respect des engagements", "Patience et persévérance"],
    weaknesses: ["Rigidité face au changement", "Difficulté à s'adapter à l'imprévu", "Tendance au jugement sévère", "Résistance aux nouvelles idées", "Peut paraître froid ou distant"],
    cognitiveStyle: "Pensée concrète et factuelle. Traite l'information de façon séquentielle et méticuleuse. S'appuie sur l'expérience passée et les faits vérifiables.",
    relationalStyle: "Loyal et dévoué dans ses relations, mais peu démonstratif. Exprime son affection par les actes plutôt que par les mots. Préfère un petit cercle de relations profondes.",
    professionalStyle: "Excelle dans les rôles structurés avec des procédures claires. Idéal pour la comptabilité, le droit, la gestion de projet, l'administration.",
    careers: ["Comptable", "Auditeur", "Gestionnaire de projet", "Juriste", "Ingénieur", "Analyste financier"],
    compatibilities: ["ESTJ", "ESFJ", "ISFJ", "ESTP"]
  },
  ISFJ: {
    name: "Le Protecteur",
    tagline: "Chaleureux, consciencieux et dévoué",
    description: "Les ISFJ s'investissent profondément dans les personnes qui leur sont chères et dans leurs responsabilités. Discrets mais extrêmement attentionnés, ils cherchent à créer stabilité et confort pour leur entourage. Leur mémoire des détails personnels et leur dévouement en font des amis et collègues incomparables.",
    strengths: ["Chaleur humaine et bienveillance", "Fiabilité et dévouement", "Attention aux détails", "Mémoire exceptionnelle des personnes", "Patience et générosité", "Sens pratique"],
    weaknesses: ["Difficulté à dire non", "Tendance à se surcharger", "Résistance au changement", "Négligence de ses propres besoins", "Trop sensible aux critiques"],
    cognitiveStyle: "Pensée concrète orientée vers les personnes. Excellente mémoire des faits et des détails. Apprend par l'expérience directe.",
    relationalStyle: "Très attentionné et soutenant. Mémorise les préférences et besoins de chacun. Priorité à l'harmonie et au bien-être des autres.",
    professionalStyle: "S'épanouit dans les rôles de soin et de service. Excellent dans les environnements stables et coopératifs.",
    careers: ["Infirmier(ère)", "Enseignant(e)", "Assistant(e) administratif(ve)", "Médecin généraliste", "Bibliothécaire", "Travailleur social"],
    compatibilities: ["ESFJ", "ISTJ", "ESTJ", "INFJ"]
  },
  INFJ: {
    name: "Le Conseiller",
    tagline: "Visionnaire, empathique et altruiste",
    description: "Les INFJ sont les plus rares des types MBTI. Dotés d'une vision profonde de l'humanité et d'une intuition remarquable, ils cherchent à donner un sens à leur vie et à contribuer au bien commun. Leur empathie profonde et leur créativité en font des guides inspirants.",
    strengths: ["Empathie profonde et intuition", "Vision à long terme", "Créativité et originalité", "Intégrité et authenticité", "Capacité à motiver les autres", "Perspicacité psychologique"],
    weaknesses: ["Perfectionnisme excessif", "Sensibilité émotionnelle intense", "Tendance à l'isolement", "Difficulté à déléguer", "Épuisement par sur-implication"],
    cognitiveStyle: "Pensée holistique et symbolique. Fait des connexions profondes entre les idées. Fonctionne par intuitions fortes et vision d'ensemble.",
    relationalStyle: "Recherche des relations intenses, profondes et authentiques. Peu nombreuses mais très significatives. Très attentif au non-dit.",
    professionalStyle: "Idéal dans le conseil, l'écriture, la psychologie, l'enseignement. A besoin d'un travail qui a du sens.",
    careers: ["Psychologue", "Écrivain", "Conseiller", "Enseignant", "Coach de vie", "Médecin spécialiste"],
    compatibilities: ["ENFP", "ENTP", "INTJ", "INFP"]
  },
  INTJ: {
    name: "L'Architecte",
    tagline: "Stratège indépendant et visionnaire",
    description: "Les INTJ sont des penseurs stratégiques dotés d'une volonté de fer. Ils ont toujours une vision claire de leurs objectifs et un plan pour les atteindre. Indépendants et exigeants, ils poussent constamment les limites du possible grâce à leur intellect et leur détermination.",
    strengths: ["Vision stratégique à long terme", "Autonomie et autodiscipline", "Détermination et confiance", "Excellence intellectuelle", "Capacité d'analyse critique", "Créativité théorique"],
    weaknesses: ["Perçu comme arrogant ou froid", "Impatience envers les inefficacités", "Difficulté dans les émotions", "Tendance à l'isolement", "Perfectionnisme paralysant"],
    cognitiveStyle: "Pensée systémique et abstraite. Excellente capacité à modéliser des systèmes complexes. Analyse critique poussée.",
    relationalStyle: "Très sélectif dans ses relations. Préfère la profondeur à la quantité. Peu démonstratif mais profondément loyal.",
    professionalStyle: "Excellent stratège et visionnaire. S'épanouit dans les rôles qui demandent innovation et leadership intellectuel.",
    careers: ["Entrepreneur", "Ingénieur système", "Scientifique", "Architecte", "Directeur stratégique", "Développeur logiciel"],
    compatibilities: ["ENFP", "ENTP", "INFJ", "ENTJ"]
  },
  ISTP: {
    name: "L'Artisan",
    tagline: "Pragmatique, logique et curieux",
    description: "Les ISTP sont des observateurs calmes qui aiment comprendre comment les choses fonctionnent. Excellents résolveurs de problèmes, ils agissent avec efficacité et précision, souvent dans les coulisses. Leur capacité à rester calme sous pression est remarquable.",
    strengths: ["Résolution de problèmes pratiques", "Calme sous pression", "Adaptabilité rapide", "Compétences techniques", "Observation fine", "Efficacité directe"],
    weaknesses: ["Peut paraître froid ou indifférent", "Difficulté à s'engager durablement", "Évitement des émotions", "Impulsivité occasionnelle", "Manque de planification long terme"],
    cognitiveStyle: "Logique pratique et orientée vers les faits. Résolution de problèmes par essai-erreur. Excellent sens de l'espace et des mécanismes.",
    relationalStyle: "Indépendant et peu démonstratif. Exprime son affection par l'action. Difficile à lire émotionnellement.",
    professionalStyle: "Excelle dans les domaines techniques, mécaniques ou d'urgence. Peu à l'aise avec la bureaucratie.",
    careers: ["Mécanicien", "Pilote", "Chirurgien", "Pompier", "Ingénieur", "Développeur"],
    compatibilities: ["ESTJ", "ENTJ", "ESFJ", "ENFJ"]
  },
  ISFP: {
    name: "L'Artiste",
    tagline: "Doux, créatif et authentique",
    description: "Les ISFP sont des esprits libres et sensibles, guidés par leurs valeurs profondes et leur sens esthétique développé. Discrets mais passionnés, ils vivent pleinement le moment présent et cherchent l'authenticité dans toutes leurs expressions.",
    strengths: ["Créativité et sens esthétique", "Flexibilité et ouverture", "Authenticité et valeurs fortes", "Empathie silencieuse", "Présence dans le moment", "Générosité discrète"],
    weaknesses: ["Difficulté à planifier", "Évitement des conflits", "Décision difficile sous pression", "Besoin de validation", "Tendance à ne pas s'affirmer"],
    cognitiveStyle: "Orienté vers les sensations du moment présent. Apprentissage par l'expérience directe. Fort sens esthétique.",
    relationalStyle: "Chaleureux mais discret. Relations authentiques et profondes. Evite les conflits et privilégie l'harmonie.",
    professionalStyle: "S'épanouit dans les domaines créatifs, artistiques ou les soins. A besoin d'autonomie et de liberté.",
    careers: ["Artiste", "Musicien", "Designer", "Soignant", "Chef cuisinier", "Photographe"],
    compatibilities: ["ESFJ", "ESTJ", "ENFJ", "ENTJ"]
  },
  INFP: {
    name: "Le Médiateur",
    tagline: "Idéaliste, créatif et empathique",
    description: "Les INFP sont des idéalistes poétiques guidés par leurs valeurs profondes. Leur riche monde intérieur et leur empathie profonde les poussent à rechercher authenticité et sens. Ils cherchent à comprendre les personnes et à contribuer à un monde meilleur.",
    strengths: ["Créativité et profondeur", "Empathie et compréhension", "Idéalisme et passion", "Authenticité forte", "Flexibilité et ouverture", "Capacité d'écoute"],
    weaknesses: ["Idéalisme parfois excessif", "Haute sensibilité émotionnelle", "Procrastination", "Difficulté avec les critiques", "Tendance à l'isolement"],
    cognitiveStyle: "Pensée imaginative et symbolique. Raisonne en termes de valeurs et de significations. Fait des connexions inattendues.",
    relationalStyle: "Recherche des relations profondes et authentiques. Peu nombreuses mais très significatives. Très attentif aux émotions des autres.",
    professionalStyle: "Excellent dans l'écriture, les arts, le counseling et tout ce qui a du sens. A besoin d'un travail aligné avec ses valeurs.",
    careers: ["Écrivain", "Psychologue", "Artiste", "Professeur", "Travailleur social", "Traducteur"],
    compatibilities: ["ENFJ", "ENTJ", "INFJ", "ENFP"]
  },
  INTP: {
    name: "Le Logicien",
    tagline: "Analytique, inventif et objectif",
    description: "Les INTP se passionnent pour les théories et les systèmes logiques. Ils cherchent à comprendre les principes fondamentaux qui gouvernent l'univers. Innovateurs solitaires, ils se délectent des débats intellectuels et des puzzles complexes.",
    strengths: ["Analyse logique rigoureuse", "Créativité théorique", "Objectivité et impartialité", "Curiosité intellectuelle insatiable", "Résolution de problèmes complexes", "Originalité des idées"],
    weaknesses: ["Procrastination", "Communication émotionnelle difficile", "Perfectionnisme paralysant", "Déconnexion pratique", "Difficulté à finaliser les projets"],
    cognitiveStyle: "Pensée abstraite et systémique. Cherche les patterns et les principes sous-jacents. Excellente logique déductive.",
    relationalStyle: "Indépendant et peu démonstratif. Préfère les échanges intellectuels aux conversations émotionnelles.",
    professionalStyle: "Excelle dans la recherche, la philosophie, l'ingénierie logicielle et tout domaine demandant une pensée originale.",
    careers: ["Chercheur", "Philosophe", "Développeur", "Mathématicien", "Physicien", "Analyste de données"],
    compatibilities: ["ENTJ", "ESTJ", "ENFJ", "INFJ"]
  },
  ESTP: {
    name: "L'Entrepreneur",
    tagline: "Énergique, pragmatique et percutant",
    description: "Les ESTP vivent pour le moment présent et excellent dans les situations qui demandent action et réactivité. Charmeurs naturels, ils ont le don d'observer leur environnement et d'agir avec rapidité et efficacité. Leur énergie et leur charisme sont communicatifs.",
    strengths: ["Adaptabilité et réactivité", "Pragmatisme et sens pratique", "Action rapide", "Charisme et persuasion", "Perception fine de l'environnement", "Gestion des crises"],
    weaknesses: ["Prise de risques excessive", "Impatience avec la théorie", "Difficulté avec les plans long terme", "Impulsivité", "Peut paraître insensible"],
    cognitiveStyle: "Orienté vers l'action et les faits concrets. Apprend par l'expérience directe. Excellent sens tactique.",
    relationalStyle: "Direct, social et énergique. Nombreuses relations légères plutôt que peu de relations profondes.",
    professionalStyle: "Excelle dans les ventes, l'entrepreneuriat, les métiers d'urgence, tout ce qui demande action immédiate.",
    careers: ["Commercial", "Entrepreneur", "Pompier", "Policier", "Courtier", "Coach sportif"],
    compatibilities: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"]
  },
  ESFP: {
    name: "L'Animateur",
    tagline: "Spontané, enthousiaste et attachant",
    description: "Les ESFP vivent avec une joie de vivre communicative et rendent chaque moment mémorable. Centrés sur le moment présent, ils ont un talent naturel pour divertir, soutenir et connecter avec les autres. Leur générosité et leur enthousiasme sont irrésistibles.",
    strengths: ["Enthousiasme communicatif", "Sens pratique et débrouillardise", "Générosité spontanée", "Connexion humaine facile", "Adaptabilité", "Optimisme contagieux"],
    weaknesses: ["Difficulté à planifier", "Évitement des conflits et des émotions difficiles", "Facilement distrait", "Peut négliger les responsabilités à long terme", "Sensibilité aux critiques"],
    cognitiveStyle: "Présent et sensoriel. Apprend en faisant. Attentif aux détails de l'environnement immédiat.",
    relationalStyle: "Chaleureux, généreux et plein d'entrain. Nombreuses relations sociales, facilité à connecter.",
    professionalStyle: "S'épanouit dans les métiers de contact, le spectacle, les soins, tout ce qui demande interaction humaine.",
    careers: ["Acteur/Actrice", "Événementiel", "Infirmier(ère)", "Vendeur", "Animateur", "Guide touristique"],
    compatibilities: ["ISFJ", "ISTJ", "ESFJ", "ESTJ"]
  },
  ENFP: {
    name: "Le Militant",
    tagline: "Enthousiaste, créatif et empathique",
    description: "Les ENFP sont des esprits libres qui voient la vie comme pleine de possibilités infinies. Leur enthousiasme communicatif, leur créativité et leur empathie profonde leur permettent d'inspirer les autres et de créer des connexions humaines profondes. Ils cherchent à donner du sens à tout.",
    strengths: ["Créativité et imagination", "Enthousiasme inspirant", "Empathie profonde", "Adaptabilité et flexibilité", "Communication persuasive", "Vision des possibilités"],
    weaknesses: ["Difficulté à se concentrer", "Tendance à ne pas finaliser", "Sensibilité émotionnelle", "Peut s'éparpiller", "Procrastination"],
    cognitiveStyle: "Intuitif et créatif. Fait des connexions inattendues entre des idées éloignées. Pensée en arborescence.",
    relationalStyle: "Chaleureux, empathique et inspirant. Cherche des connexions authentiques et significatives.",
    professionalStyle: "Excellent dans les domaines créatifs, le counseling, l'enseignement, l'entrepreneuriat social.",
    careers: ["Journaliste", "Coach", "Enseignant", "Entrepreneur", "Psychologue", "Créatif"],
    compatibilities: ["INTJ", "INFJ", "ENTJ", "ENFJ"]
  },
  ENTP: {
    name: "Le Débatteur",
    tagline: "Ingénieux, vif et stimulant",
    description: "Les ENTP adorent explorer des idées complexes et sont excellents pour trouver des solutions innovantes. Esprits vifs et provocateurs, ils questionnent tout et cherchent toujours de nouvelles perspectives. Leur énergie intellectuelle est stimulante mais parfois épuisante pour leur entourage.",
    strengths: ["Créativité et innovation", "Analyse critique acérée", "Adaptabilité rapide", "Charisme intellectuel", "Persuasion par les idées", "Vision systémique"],
    weaknesses: ["Difficulté à finir les projets", "Impulsivité", "Peut blesser avec ses critiques", "Résistance aux routines", "Débat pour le plaisir du débat"],
    cognitiveStyle: "Pensée divergente et exploratoire. Excelle à trouver des failles et des angles nouveaux. Joue avec les idées.",
    relationalStyle: "Stimulant intellectuellement. Nombreuses relations. Peut paraître insensible aux émotions.",
    professionalStyle: "Excelle dans l'innovation, l'entrepreneuriat, le droit, tout ce qui demande argumentation et créativité.",
    careers: ["Entrepreneur", "Avocat", "Consultant", "Inventeur", "Directeur marketing", "Stratège"],
    compatibilities: ["INTJ", "INFJ", "ENTJ", "ENFJ"]
  },
  ESTJ: {
    name: "Le Directeur",
    tagline: "Organisé, déterminé et pragmatique",
    description: "Les ESTJ sont des piliers de l'ordre et de l'organisation. Pragmatiques et décidés, ils excellent dans la gestion d'équipes et de projets. Leur sens du devoir, leur fiabilité et leur leadership pratique en font des managers naturels et des membres essentiels de toute communauté.",
    strengths: ["Leadership pratique", "Sens de l'organisation", "Fiabilité et constance", "Pragmatisme et efficacité", "Courage des décisions", "Respect des engagements"],
    weaknesses: ["Rigidité et résistance au changement", "Difficile d'accepter les opinions différentes", "Tendance à l'autoritarisme", "Insensibilité émotionnelle perçue", "Jugement rapide"],
    cognitiveStyle: "Logique pratique et orientée vers les résultats. Pense en procédures et étapes claires.",
    relationalStyle: "Direct et honnête. Respectueux de la hiérarchie. Relations basées sur le respect mutuel et la fiabilité.",
    professionalStyle: "Excellent gestionnaire opérationnel. S'épanouit dans les structures claires avec des rôles définis.",
    careers: ["Manager", "Directeur", "Militaire", "Juge", "Comptable", "Chef de projet"],
    compatibilities: ["ISTJ", "ISFJ", "ESTP", "ESFP"]
  },
  ESFJ: {
    name: "Le Consul",
    tagline: "Attentionné, sociable et organisateur",
    description: "Les ESFJ sont très attentifs aux besoins des autres et excellent dans la création de cohésion sociale. Chaleureux et organisés, ils créent des environnements harmonieux et prennent soin de chacun. Leur sens du devoir envers leur communauté est profond.",
    strengths: ["Chaleur humaine et bienveillance", "Organisation sociale", "Sens des responsabilités", "Loyauté indéfectible", "Empathie pratique", "Souci des traditions"],
    weaknesses: ["Besoin d'approbation excessive", "Difficulté à traiter les critiques", "Négligence de soi", "Rigidité face aux changements de valeurs", "Difficulté avec le conflit"],
    cognitiveStyle: "Pratique et orienté vers les personnes. Organise l'information en référence à ses valeurs et aux besoins des autres.",
    relationalStyle: "Nourricier et organisateur social. Tisserand de liens. Priorité à l'harmonie du groupe.",
    professionalStyle: "Excellent dans les RH, les soins, l'enseignement, l'administration, tout ce qui sert les autres.",
    careers: ["Ressources humaines", "Infirmier(ère)", "Enseignant(e)", "Assistant(e) social", "Coordinateur", "Médecin"],
    compatibilities: ["ISFJ", "ISTJ", "ESFP", "ESTP"]
  },
  ENFJ: {
    name: "Le Protagoniste",
    tagline: "Charismatique, inspirant et altruiste",
    description: "Les ENFJ sont des leaders nés qui excellent dans la connexion avec les autres et les aident à s'épanouir. Leur charisme naturel, leur empathie profonde et leur capacité à inspirer font d'eux des guides exceptionnels. Ils ont une vision claire pour un avenir meilleur et savent embarquer les autres dans cette vision.",
    strengths: ["Charisme naturel", "Empathie profonde et authentique", "Leadership inspirant", "Capacité à motiver", "Communication remarquable", "Intégrité morale"],
    weaknesses: ["Surmenage par excès de don", "Difficulté à gérer les critiques", "Trop prendre en charge les autres", "Peut négliger ses propres besoins", "Idéalisme excessif"],
    cognitiveStyle: "Orienté vers les personnes, les valeurs et l'avenir. Vision holistique des dynamiques humaines.",
    relationalStyle: "Profondément empathique et inspirant. Cherche à aider chacun à atteindre son plein potentiel.",
    professionalStyle: "Excellent enseignant, coach, leader politique, thérapeute. Tout ce qui implique guider et inspirer.",
    careers: ["Enseignant", "Coach", "Responsable RH", "Politicien", "Thérapeute", "Directeur pédagogique"],
    compatibilities: ["INFP", "ISFP", "INTJ", "INFJ"]
  },
  ENTJ: {
    name: "Le Commandant",
    tagline: "Décidé, stratège et ambitieux",
    description: "Les ENTJ sont des leaders naturels qui excellent dans l'organisation et la réalisation de visions ambitieuses. Décidés, charismatiques et stratèges, ils ont une capacité rare à voir la vue d'ensemble et à mobiliser les ressources pour atteindre leurs objectifs. Leur confiance en soi et leur détermination sont impressionnantes.",
    strengths: ["Leadership stratégique", "Vision à long terme", "Prise de décision rapide", "Efficacité et performance", "Confiance et charisme", "Capacité à déléguer"],
    weaknesses: ["Impatience avec les lenteurs", "Tendance à dominer", "Difficulté à recevoir les critiques", "Peut paraître autoritaire", "Sensibilité émotionnelle limitée"],
    cognitiveStyle: "Pensée stratégique, analytique et systémique. Excellente capacité à planifier et à exécuter.",
    relationalStyle: "Direct, challenging et inspirant. Relations basées sur le respect mutuel de la compétence.",
    professionalStyle: "Excellent PDG, directeur, stratège, entrepreneur. S'épanouit dans les rôles de leadership à fort impact.",
    careers: ["PDG", "Directeur général", "Avocat", "Consultant stratégique", "Entrepreneur", "Directeur financier"],
    compatibilities: ["INFP", "INTP", "ENFP", "INTJ"]
  }
};

/**
 * @param {string} type  ex: "INFP"
 * @returns {Object|null}
 */
function getMBTIInterpretation(type) {
  return MBTI_TYPES[type] || null;
}
