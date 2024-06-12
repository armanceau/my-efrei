import '../App.css'
import { useEffect, useState } from 'react'
import { FicheEleve } from "./eleve/FicheEleve"

export const ListeEleves = ({liste}) => {

    const [getListe, setGetListe] = useState(liste)

    return (
        <div className="container">
            {getListe.map((value, index) => {
                return(
                    <div className="container-eleve">
                        <FicheEleve  key={index} nom={value.nom} prenom={value.prenom} image={value.image}/>
                    </div>
                )
            })}
        </div>
    )
}