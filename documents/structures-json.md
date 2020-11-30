# Un mot sur les structures de données

## Passage du questionnaire

La représentation des questions est quelque peu contrainte par notre utilisation de la librairie SurveyJS, qui se charge des questions bassements logiques du questionnaire. [La documentation](https://surveyjs.io/Documentation/Library?id=surveymodel) nous éclaire à ce sujet.

Plus particulièrement, j'ai mis en forme quelques questions tirées du brouillon partagé par Bastien, privilégiant les formes et patterns uniques, ainsi que ceux susceptibles de nous poser problème.

Une implémentation-type se trouve dans [`components/Survey.js`](https://github.com/etalab/radar-tech-frontend/blob/master/src/components/Survey.js):

```js
survey = {
    title: 'Sondage type',
    description:
      'Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.',
    pages: [
      {
        name: 'page1',
        elements: [
          {
            type: 'radiogroup',
            name: 'demo_genre',
            title: 'À quel genre vous identifiez-vous ?',
            choices: [
              'Homme',
              'Femme',
              'Non-binaire, genderqueer, ou gender non-conforming',
            ],
          },
          {
            type: 'dropdown',
            name: 'demo_age',
            title: 'Dans quelle tranche d’âge vous situez vous ?',
            choices: [
              '15-19 ans',
              '20-24 ans',
              '25-29 ans',
              '30-34 ans',
              '35-39 ans',
              '40-44 ans',
              '45-49 ans',
              '50-54 ans',
              '55-59 ans',
              '60-64 ans',
              '65 ans et plus',
            ],
          },
          {
            type: 'radiogroup',
            name: 'travail_activite',
            title: 'Avez-vous une autre activité en parallèle ?',
            choices: ['Oui', 'Non'],
          },
          {
            type: 'checkbox',
            name: 'travail_activite_autre',
            title: 'Precisez:',
            visibleIf: "{travail_activite}= 'Oui'",
            choices: ['Freelance', 'CDI', 'CDD'],
            hasOther: true,
          },
          {
            type: 'matrixdropdown',
            name: 'education_formation',
            title: 'Quelle est votre formation ?',
            horizontalScroll: true,
            columnMinWidth: '50px',
            columns: [
              {
                name: 'using',
                title: 'Do you use it?',
                choices: ['Yes', 'No'],
                cellType: 'radiogroup',
              },
              {
                name: 'knowledge',
                title: 'Please describe your experience',
                cellType: 'text',
              },
            ],
            rows: [
              {
                value: 'ecole_inge',
                text: "Ecole d'ingenieur",
              },
              {
                value: 'uni_info',
                text: 'Formation universitaire en informatique',
              },
              {
                value: 'uni_pro',
                text: 'Formation pro',
              },
            ],
          },
        ],
      },
    ]
}
```

---

## Format des résultats

Une fois le questionnaire terminé, une fonction [`onComplete`](https://github.com/etalab/radar-tech-frontend/blob/master/src/components/Survey.js#L101) est appellée, et expose `survey.data`.

La représentation des données dans `survey.data` est importante car notre contrôle de celle-ci est limitée.

Dans cet exemple, l'utilisateur a sauté plusieurs questions, qui ne figurent donc pas dans les résultats:

```js
{
  "demo_genre": "Homme",
  "demo_age": "25-29 ans",
  "travail_activite": "Non"
}
```

Dans l'exemple suivant, toutes les questions ont été remplies. Notons les `arrays` pour les réponses à choix multiples:

```js
{
  "demo_genre": "Homme",
  "demo_age": "25-29 ans",
  "travail_activite": "Oui",
  "travail_activite_autre": [
    "Freelance"
  ],
  "education_formation": {
    "ecole_inge": {
      "using": "Yes",
      "knowledge": "Test Ingé Sup"
    },
    "uni_info": {
      "using": "No"
    },
    "uni_pro": {
      "using": "No"
    }
  }
}
```