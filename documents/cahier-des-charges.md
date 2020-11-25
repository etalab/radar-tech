# Cahier des charges formulaire

Formulaire 
- écrit côté DNUM : 
    - contenant une centaine de question 
    - structuré en section (démographie, outils, expériences) et peut-être en pages
- enregistrement côté front pendant que l'utilisateur saisi ses réponses
- le front envoi un objet JS une fois que l'utilisateur valide son formulaire -> POST à l'API
- le back reçoit l'objet et stocke les données qu'il contient
- il émet un token à l'utilisateur pour validation et adresse un attribut au besoin
    - adresse email potentiellement hashée pour éviter double validation _et_ stockage d'infos persos
    - un mail est envoyé à l'adresse mail pour validation qui permet aussi de supprimer ses données (RGPD)
- l'utilisateur valide par mail qu'il a rempli le formulaire
- à partir d'une adresse mail on peut récupérer l'ensemble des réponses
- à partir d'une adresse mail on peut supprimer les données correspondantes

Analyses des données :
- on peut exporter le dataset sans données personnelles / email au format JSON, faisable manuellement
- l'exploration des résultats et de la base de données sera faites avec python notebook/R : 
    - rapporter les résultats bruts : questions et résultats simples (oui/non, QCMs)
    - partie exploratoire, "peut-être", corrélations intéressantes entre profils et outils et expériences

Page des résultats :
- utilisation de GraphQL possible
- option plus simple on utilise un JSON modélisé par Basile
- design et écriture de graphiques