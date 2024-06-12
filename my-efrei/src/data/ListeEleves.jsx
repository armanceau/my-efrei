import '../App.css'
import { FicheEleve } from "./eleve/FicheEleve"

export const ListeEleves = ({classes}) => {

    console.log(classes);

    return (
        <div className="container">
            Liste élève :
            {classes.map((value, index) => {  
                return(
                    <div className="container-eleve">
                        <FicheEleve  key={index} nom={value.nom} prenom={value.prenom} image={value.image}/>
                    </div>
                )
            })}
            <hr />
        </div>
    )
}