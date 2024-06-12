export let classes = [
    {
        "id": 1,
        "nom": "B3",
        //my-efrei/eleve/1
        "élèves": [
            {
                "id": 1,
                "nom": "Manceau",
                "prenom": "Arthur",
                "age": 21,
                "notes": [
                    {
                        "matière": "React.js",
                        "note": 18
                    },
                    {
                        "matière": "Anglais",
                        "note": 16
                    },
                    {
                        "matière": "Docker",
                        "note": 3
                    },
                    {
                        "matière": "Java",
                        "note": 13
                    }
                ]
            }, 
            {
                "id": 2,
                "nom": "Mousset",
                "prenom": "Mathias",
                "age": 19,
                "notes": [
                    {
                        "matière": "React.js",
                        "note": 17
                    },
                    {
                        "matière": "Anglais",
                        "note": 12
                    },
                    {
                        "matière": "Docker",
                        "note": 12
                    },
                    {
                        "matière": "Java",
                        "note": 14
                    }
                ]
            }, 
            {
                "id": 3,
                "nom": "Pierre",
                "prenom": "Paul",
                "age": 20,
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
                        "matière": "Docker",
                        "note": 5
                    },
                    {
                        "matière": "Java",
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
                "matière": "React.js",
                "classes": [
                    1, 2, 3
                ]
            },
        ]
    },
]