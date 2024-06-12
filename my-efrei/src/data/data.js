export let classes = [
    {
        "id": "classe_1",
        "nom": "Classe de 6ème A",
        "élèves": [
            {
                "nom": "Manceau",
                "prenom": "Arthur",
                "age": 21
            }, 
            {
                "nom": "Mousset",
                "prenom": "Mathias",
                "age": 20
            }, 
            {
                "nom": "Pierre",
                "prenom": "Paul",
                "age": 19,
                "notes": [
                    {
                        "matière": "React.js",
                        "note": 12
                    },
                    {
                        "matière": "Anglais",
                        "note": 15
                    },
                    {
                        "matière": "Histoire",
                        "note": 17
                    },
                    {
                        "matière": "Histoire",
                        "note": 17
                    }
                ]
            }, 
        ],
        "enseignants": ["enseignant_1", "enseignant_2"]
    },
    {
      "id": "classe_2",
      "nom": "Classe de 6ème B",
      "élèves": ["élève_4", "élève_5", "élève_6"],
      "enseignants": ["enseignant_3", "enseignant_4"]
    }
  ]
  [
    {
      "id": "enseignant_1",
      "nom": "Mme Dupont",
      "matières": ["matière_1", "matière_2"]
    },
    {
      "id": "enseignant_2",
      "nom": "M. Martin",
      "matières": ["matière_3", "matière_4"]
    },
    {
      "id": "enseignant_3",
      "nom": "Mme Durand",
      "matières": ["matière_1", "matière_3"]
    },
    {
      "id": "enseignant_4",
      "nom": "M. Bernard",
      "matières": ["matière_2", "matière_4"]
    }
  ]
  [
    {
      "id": "élève_1",
      "nom": "Alice",
      "classe_id": "classe_1",
      "notes": {
        "matière_1": 15,
        "matière_2": 12,
        "matière_3": 14,
        "matière_4": 10
      }
    },
    {
      "id": "élève_2",
      "nom": "Bob",
      "classe_id": "classe_1",
      "notes": {
        "matière_1": 10,
        "matière_2": 14,
        "matière_3": 12,
        "matière_4": 15
      }
    },
    {
      "id": "élève_3",
      "nom": "Charlie",
      "classe_id": "classe_1",
      "notes": {
        "matière_1": 13,
        "matière_2": 13,
        "matière_3": 11,
        "matière_4": 14
      }
    },
    {
      "id": "élève_4",
      "nom": "David",
      "classe_id": "classe_2",
      "notes": {
        "matière_1": 9,
        "matière_2": 15,
        "matière_3": 13,
        "matière_4": 12
      }
    },
    {
      "id": "élève_5",
      "nom": "Eve",
      "classe_id": "classe_2",
      "notes": {
        "matière_1": 16,
        "matière_2": 14,
        "matière_3": 14,
        "matière_4": 15
      }
    },
    {
      "id": "élève_6",
      "nom": "Frank",
      "classe_id": "classe_2",
      "notes": {
        "matière_1": 14,
        "matière_2": 13,
        "matière_3": 12,
        "matière_4": 11
      }
    }
  ]
  [
    {
      "id": "matière_1",
      "nom": "Mathématiques"
    },
    {
      "id": "matière_2",
      "nom": "Français"
    },
    {
      "id": "matière_3",
      "nom": "Histoire-Géographie"
    },
    {
      "id": "matière_4",
      "nom": "Sciences"
    }
  ]