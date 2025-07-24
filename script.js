const quizData = {
  1: {
    title: "Le B.A.-BA du Solaire",
    questions: [
      {
        question: "Qu’est-ce qu’un panneau photovoltaïque produit ?",
        options: ["De la chaleur", "De l’électricité", "De l’air comprimé"],
        answer: 1,
        explanation: "Un panneau photovoltaïque transforme la lumière du soleil en électricité grâce à l’effet photovoltaïque."
      },
      {
        question: "Quel est l’avantage principal de l’autoconsommation solaire ?",
        options: ["Réduire sa facture d’électricité", "Faire pousser des légumes", "Augmenter le bruit chez soi"],
        answer: 0,
        explanation: "L’autoconsommation permet d’utiliser l’énergie que vous produisez, ce qui réduit votre dépendance au réseau et vos coûts."
      },
      {
        question: "Quelle durée de vie moyenne pour des panneaux solaires bien entretenus ?",
        options: ["5 à 10 ans", "10 à 15 ans", "25 à 30 ans"],
        answer: 2,
        explanation: "Les panneaux photovoltaïques ont une durée de vie moyenne de 25 à 30 ans, avec une légère perte de rendement progressive."
      },
      {
        question: "Une installation solaire fonctionne-t-elle quand il fait nuageux ?",
        options: ["Non, jamais", "Oui, mais moins efficacement", "Uniquement la nuit"],
        answer: 1,
        explanation: "Les panneaux produisent de l’électricité même par temps couvert, mais avec un rendement plus faible."
      },
      {
        question: "Qui peut installer une solution solaire chez vous ?",
        options: ["Un artisan RGE certifié", "Un plombier sans formation", "N’importe quel bricoleur"],
        answer: 0,
        explanation: "Pour bénéficier d’aides et garantir la qualité, seul un installateur certifié RGE comme Echome peut réaliser l'installation."
      }
    ]
  },
  
  2: {
    title: "Bornes de Recharge : Devenez Incollable sur l’IRVE",
    questions: [
      {
        question: "Que signifie IRVE ?",
        options: ["Installation Réactive de Véhicules Électriques", "Infrastructure de Recharge pour Véhicules Électriques", "Intégration Régionale de Véhicules Écologiques"],
        answer: 1,
        explanation: "IRVE signifie Infrastructure de Recharge pour Véhicules Électriques, qui comprend les bornes, le câblage et la gestion de l’énergie."
      },
      {
        question: "Quelle certification est recommandée pour un installateur IRVE ?",
        options: ["IRVE Pro+", "Recharge Elec+", "PV Ready"],
        answer: 1,
        explanation: "Recharge Elec+ est une certification spécialisée pour les installateurs IRVE, notamment avec intégration solaire possible."
      },
      {
        question: "Peut-on recharger un véhicule électrique avec de l’énergie solaire ?",
        options: ["Non, c’est incompatible", "Oui, si les panneaux sont bien dimensionnés", "Uniquement avec une borne publique"],
        answer: 1,
        explanation: "Oui, avec une installation solaire bien conçue, vous pouvez recharger à domicile votre véhicule avec une énergie propre."
      },
      {
        question: "Quel est l'intérêt d'une borne intelligente ?",
        options: ["Elle s’allume en couleur", "Elle ajuste la recharge selon la production solaire", "Elle fait le café"],
        answer: 1,
        explanation: "Les bornes intelligentes adaptent la puissance de recharge en temps réel selon la disponibilité de l’énergie."
      },
      {
        question: "À quoi sert un pilotage énergétique dans le cadre IRVE ?",
        options: ["À piloter un drone", "À maximiser l’usage solaire pour la recharge", "À allumer les phares automatiquement"],
        answer: 1,
        explanation: "Le pilotage énergétique permet d'optimiser la recharge pour consommer en priorité l'énergie solaire disponible."
      }
    ]
  },
  3: {
    title: "Autoconsommation Collective & PMO",
    questions: [
      {
        question: "Qu'est-ce que l’autoconsommation collective ?",
        options: ["Une initiative communautaire pour vendre du courant", "Le partage d'énergie entre plusieurs usagers", "Une taxe sur les panneaux solaires"],
        answer: 1,
        explanation: "L’autoconsommation collective permet de partager l’électricité produite localement entre plusieurs participants (habitants, entreprises, etc.)."
      },
      {
        question: "Que signifie PMO ?",
        options: ["Partenariat Multi-Offres", "Personne Morale Organisatrice", "Puissance Moyenne d’Organisation"],
        answer: 1,
        explanation: "La PMO est la Personne Morale Organisatrice, en charge de répartir l’énergie entre les membres du collectif."
      },
      {
        question: "Pourquoi l’autoconsommation collective est-elle intéressante ?",
        options: ["Elle diminue les factures", "Elle renforce la résilience locale", "Les deux"],
        answer: 2,
        explanation: "Elle offre des avantages économiques et écologiques en favorisant les circuits courts et la solidarité énergétique."
      },
      {
        question: "Une installation collective peut-elle bénéficier d’aides ?",
        options: ["Oui", "Non", "Uniquement dans le Nord de la France"],
        answer: 0,
        explanation: "Oui, à condition que l’installation soit réalisée par des professionnels qualifiés et que le projet respecte certains critères."
      },
      {
        question: "Quel est le rôle d’Echome Énergies dans un projet collectif ?",
        options: ["Conseil et installation", "Maintenance et supervision", "Les deux"],
        answer: 2,
        explanation: "Echome accompagne de A à Z les projets collectifs avec conseil, installation, supervision, et certifications adaptées."
      }
    ]
  },
  4: {
    title: "Mythes ou Réalités sur l’Énergie Solaire ?",
    questions: [
      {
        question: "Les panneaux solaires ne fonctionnent pas l’hiver.",
        options: ["Mythe", "Réalité"],
        answer: 0,
        explanation: "Mythe : ils produisent même par temps froid ou couvert, bien qu’un peu moins qu’en plein été."
      },
      {
        question: "Une maison avec panneaux solaires ne paie plus rien.",
        options: ["Mythe", "Réalité"],
        answer: 0,
        explanation: "Mythe : vous réduisez fortement la facture, mais des frais fixes restent (abonnement réseau, consommation complémentaire…)."
      },
      {
        question: "Installer des panneaux fait perdre de la valeur à un bien.",
        options: ["Mythe", "Réalité"],
        answer: 0,
        explanation: "Mythe : au contraire, cela valorise votre maison grâce aux économies et à l’image écologique."
      },
      {
        question: "Les panneaux sont recyclables.",
        options: ["Mythe", "Réalité"],
        answer: 1,
        explanation: "Réalité : aujourd’hui, plus de 90 % des composants d’un panneau sont recyclables."
      },
      {
        question: "Un toit orienté Est-Ouest ne permet aucune production.",
        options: ["Mythe", "Réalité"],
        answer: 0,
        explanation: "Mythe : la production sera un peu plus étalée et légèrement réduite, mais reste rentable."
      }
    ]
  },
  5: {
    title: "Echome Énergies et ses Qualifications",
    questions: [
      {
        question: "Quel est le cœur de métier d’Echome Énergies ?",
        options: ["Plomberie", "Énergie solaire et mobilité électrique", "Isolation thermique"],
        answer: 1,
        explanation: "Echome est expert local des solutions solaires photovoltaïques et des bornes de recharge IRVE [cite: 2025-07-24]."
      },
      {
        question: "Que garantit la certification RGE ?",
        options: ["Une aide au bricolage", "La qualité et l’éligibilité aux aides", "Une remise sur le matériel"],
        answer: 1,
        explanation: "Le label RGE garantit un savoir-faire certifié et donne accès aux aides de l’État."
      },
      {
        question: "Quelles qualifications possède Echome ?",
        options: ["QualiPV 36 & 500, QualiPV Elec, Recharge Elec+", "IRVE+, QualiBois", "Eco Artisan"],
        answer: 0,
        explanation: "Echome est certifié pour les installations photovoltaïques (jusqu’à 500 kVA) et IRVE avec intégration solaire [cite: 2025-07-24]."
      },
      {
        question: "Quel est le rôle d’Echome après l’installation ?",
        options: ["Aucun", "Maintenance & supervision énergétique", "Vente de panneaux"],
        answer: 1,
        explanation: "Echome assure le suivi, la maintenance, et l’optimisation énergétique post-installation [cite: 2025-07-24]."
      },
      {
        question: "Quel est le message principal d’Echome ?",
        options: ["Changer le monde", "Produire, consommer, recharger — en toute confiance", "Faire des économies à tout prix"],
        answer: 1,
        explanation: "Echome accompagne ses clients vers l’indépendance énergétique, avec une approche durable et locale [cite: 2025-07-24]."
      }
    ]
  },
};

const quizContainer = document.getElementById("quiz-container");
const quizSelectionSection = document.getElementById("quiz-selection-section");

let currentQuizId = null; // Pour stocker l'ID du quiz en cours
let currentQuestionIndex = 0;
let score = 0;

// Fonction pour afficher une question spécifique d'un quiz
function showQuestion(quizId) {
  const quiz = quizData[quizId];
  if (!quiz) return;

  const q = quiz.questions[currentQuestionIndex];
  quizContainer.innerHTML = `
    <div class="question">${q.question}</div>
    <div class="options">
      ${q.options.map((opt, i) => `
        <label>
          <input type="radio" name="option" value="${i}"> ${opt}
        </label>
      `).join('')}
    </div>
    <button id="nextQuestionBtn">Suivant</button>
  `;

  // Ajout de l'écouteur d'événement pour le bouton "Suivant"
  document.getElementById("nextQuestionBtn").addEventListener("click", handleNextQuestion);
}

// Gère la soumission de la réponse et passe à la question suivante
function handleNextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Veuillez sélectionner une option avant de continuer.");
    return;
  }

  const quiz = quizData[currentQuizId];
  const val = parseInt(selected.value);
  const correct = quiz.questions[currentQuestionIndex].answer;
  const exp = quiz.questions[currentQuestionIndex].explanation;

  // Appliquer les classes correct/incorrect pour le feedback visuel
  const optionsLabels = quizContainer.querySelectorAll('.options label');
  optionsLabels.forEach((label, i) => {
      const radio = label.querySelector('input[type="radio"]');
      radio.disabled = true; // Désactiver les radios après la sélection

      if (i === correct) {
          label.classList.add('correct');
      } else if (i === val) {
          label.classList.add('incorrect');
      }
  });

  // Afficher l'explication et changer le bouton en "Continuer"
  quizContainer.innerHTML += `<p class="explanation">${exp}</p>`;
  const nextBtn = document.getElementById("nextQuestionBtn");
  nextBtn.textContent = "Continuer";
  nextBtn.removeEventListener("click", handleNextQuestion); // Supprimer l'ancien écouteur
  nextBtn.addEventListener("click", moveToNextOrFinish); // Ajouter le nouvel écouteur
  
  if (val === correct) score++;
}

// Fonction pour passer à la question suivante ou terminer le quiz
function moveToNextOrFinish() {
  const quiz = quizData[currentQuizId];
  if (currentQuestionIndex + 1 < quiz.questions.length) {
    currentQuestionIndex++;
    showQuestion(currentQuizId);
  } else {
    showResults(currentQuizId);
  }
}

// Affiche les résultats du quiz
function showResults(quizId) {
  const quiz = quizData[quizId];
  quizContainer.innerHTML = `
    <div class="result">Votre score : ${score} / ${quiz.questions.length}</div>
    <p>${score === quiz.questions.length ? "Bravo ! Vous maîtrisez parfaitement le sujet du " + quiz.title + " !" : "Merci pour votre participation. Continuez à apprendre et n'hésitez pas à nous contacter pour plus d'informations sur l'autonomie solaire et la mobilité électrique !"}</p>
    <button id="restartQuizBtn">Recommencer un quiz</button>
    <button id="backToSelectionBtn">Retour à la sélection</button>
  `;

  // Ajout des écouteurs pour les boutons de fin de quiz
  document.getElementById("restartQuizBtn").addEventListener("click", restartQuiz);
  document.getElementById("backToSelectionBtn").addEventListener("click", backToSelection);
}

// Réinitialise et redémarre le quiz en cours
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion(currentQuizId); // Redémarre le même quiz
}

// Retourne à l'écran de sélection des quiz
function backToSelection() {
  quizContainer.style.display = "none";
  quizSelectionSection.style.display = "grid"; // Réafficher la sélection des quiz en grille
  currentQuizId = null; // Réinitialiser l'ID du quiz en cours
  currentQuestionIndex = 0;
  score = 0;
}

// Initialisation : Attacher les écouteurs aux cartes de quiz
document.addEventListener('DOMContentLoaded', () => {
  const quizCards = document.querySelectorAll('.quiz-card');
  quizCards.forEach(card => {
    card.addEventListener('click', (event) => {
      currentQuizId = parseInt(event.target.dataset.quizId); // Récupérer l'ID du quiz
      currentQuestionIndex = 0; // Réinitialiser pour chaque nouveau quiz
      score = 0; // Réinitialiser le score
      quizSelectionSection.style.display = "none"; // Cacher la sélection
      quizContainer.style.display = "block"; // Afficher le conteneur du quiz
      showQuestion(currentQuizId); // Afficher la première question
    });
  });
});