export let classes = [
    {
        "id": 1,
        "nom": "B3",
        //my-efrei/eleve/1
        "eleves": [
            {
                "id": 1,
                "nom": "Manceau",
                "prenom": "Arthur",
                "image": "./asset/img/eleves/Taïs.jpg",
                "age": 21,
                "notes": [
                    {
                        "matiere": "React.js",
                        "note": 18
                    },
                    {
                        "matiere": "Anglais",
                        "note": 16
                    },
                    {
                        "matiere": "Docker",
                        "note": 3
                    },
                    {
                        "matiere": "Java",
                        "note": 13
                    }
                ]
            }, 
            {
                "id": 2,
                "nom": "Mousset",
                "prenom": "Mathias",
                "image": "./asset/img/eleves/Thomas.jpg",
                "age": 19,
                "notes": [
                    {
                        "matiere": "React.js",
                        "note": 17
                    },
                    {
                        "matiere": "Anglais",
                        "note": 12
                    },
                    {
                        "matiere": "Docker",
                        "note": 12
                    },
                    {
                        "matiere": "Java",
                        "note": 14
                    }
                ]
            }, 
            {
                "id": 3,
                "nom": "Pierre",
                "prenom": "Paul",
                "image": "./asset/img/eleves/Lucie.jpg",
                "age": 20,
                "notes": [
                    {
                        "matiere": "React.js",
                        "note": 12
                    },
                    {
                        "matiere": "Anglais",
                        "note": 15
                    },
                    {
                        "matiere": "Docker",
                        "note": 5
                    },
                    {
                        "matiere": "Java",
                        "note": 17
                    }
                ]
            }, 
        ],
        "enseignants": [
            {
                "id": 1,
                "nom": "Bissor",
                "prenom": "Melvin",
                "matiere": "React.js",
                "classes": [
                    1, 2, 3
                ]
            },
            {
                "id": 2,
                "nom": "Jack",
                "prenom": "Jean",
                "matiere": "Anglais",
                "classes": [
                    1, 2
                ]
            },
        ],
        "matieres": [
            "React.js", "Anglais", "Docker", "Java"
        ]
    },
]