import '../App.css'
import { FicheEleve } from "./eleve/FicheEleve"
import { useParams } from "react-router-dom"
import {classes} from './data';

export const ListeEleves = () => {

    const {id} = useParams()

    return (
        <div className="container">
            Classe : {classes[id].nom}
            <br />
            <br />
            Liste élève :
            <br />
            <br />
            <div className="container-eleve d-flex">
                {classes[id].eleves.map((value, index) => {  
                    return(                        
                        <FicheEleve key={index} nom={value.nom} notes={value.notes} prenom={value.prenom} age={value.age} image={value.image}/>                      
                    )
                })}
            </div>
            <hr />
        </div>
    )
}