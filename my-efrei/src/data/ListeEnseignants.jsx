import '../App.css'
import { FicheEnseignant } from "./enseignant/FicheEnseignant"

export const ListeEnseignants = ({classes}) => {

    return (
        <div className="container">
            Liste enseignant :
            {classes.map((value, index) => {  
                return(
                    <div className="container-enseignant">
                        <FicheEnseignant  key={index} nom={value.nom} prenom={value.prenom} image={value.image}/>
                    </div>
                )
            })}
            <hr />
        </div>
    )
}