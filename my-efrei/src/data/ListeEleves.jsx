import '../App.css'
import { FicheEleve } from "./eleve/FicheEleve"

export const ListeEleves = ({liste}) => {

    console.log(liste);

    return (
        <div className="container">
            {liste.map((value, index) => {  
                return(
                    <div className="container-eleve">
                        <FicheEleve  key={index} nom={value.nom} prenom={value.prenom} image={value.image}/>
                    </div>
                )
            })}
        </div>
    )
}