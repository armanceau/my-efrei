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
            {classes[id].eleves.map((value, index) => {  
                console.log(value.image)
                return(
                    <div className="container-eleve">
                        <FicheEleve key={index} nom={value.nom} prenom={value.prenom} image={value.image}/>
                    </div>
                )
            })}
            <hr />
        </div>
    )
}