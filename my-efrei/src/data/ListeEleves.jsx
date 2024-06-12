import '../App.css'
import { useState } from 'react'
import { FicheEleve } from "./eleve/FicheEleve"
import { useParams } from "react-router-dom"
import {classes} from './data'
import { AjouterEleve } from "./eleve/ajouterEleve/AjouterEleve"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const ListeEleves = () => {

    const {id} = useParams()

    const [getListe, setGetListe] = useState(classes[id].eleves)

    return (
        <div>
            Classe : {classes[id].nom}
            <br />
            <br />
            Liste élève :
            <br />
            <br />
            <div className="d-flex gap-20">
                {getListe.map((value, index) => {  
                    return(
                        <FicheEleve key={index} nom={value.nom} notes={value.notes} prenom={value.prenom} age={value.age} image={value.image}/>                      
                    )
                })}
            </div>
            <br />
            <AjouterEleve liste={getListe} setGetListe={setGetListe}/>
            <hr />
        </div>
    )
}