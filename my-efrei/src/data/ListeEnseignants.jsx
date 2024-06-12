import '../App.css'
import { FicheEnseignant } from "./enseignant/FicheEnseignant"
import { useParams } from "react-router-dom"
import {classes} from './data';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export const ListeEnseignants = () => {

    const {id} = useParams()

    return (
        <div>
            Liste enseignant :
            {classes[id].enseignants.map((value, index) => {  
                return(
                    <div className="container-enseignant">
                        <FicheEnseignant key={index} nom={value.nom} prenom={value.prenom} matiere={value.matiere} image={value.image} age={value.age}/>
                    </div>
                )
            })}
            <hr />
        </div>
    )
}