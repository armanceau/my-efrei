import '../App.css'
import { FicheEnseignant } from "./enseignant/FicheEnseignant"
import { useState } from 'react'
import { useParams } from "react-router-dom"
import {classes} from './data';
import {AjouterEnseignant} from "./enseignant/ajouterEnseignant/AjouterEnseignant"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export const ListeEnseignants = () => {

    const {id} = useParams()

    const [getListe, setGetListe] = useState(classes[id].enseignants)

    return (
        <div>
            Liste enseignant :
            <div className="d-flex gap-20">
                {getListe.map((value, index) => {  
                    return(
                        <FicheEnseignant key={index} nom={value.nom} prenom={value.prenom} matiere={value.matiere} image={value.image} age={value.age}/>
                    )
                })}
            </div>
            <AjouterEnseignant liste={getListe} setGetListe={setGetListe}/>
        </div>
    )
}