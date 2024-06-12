import { FicheClasse } from "./classe/FicheClasse";


export const ListeCLasse = ({classes}) => {
    return (
        <div>
           
            {classes.map((value, index) => {
                return(
                    <div>
                        Classe : 
                        <FicheClasse key={index} nom={value.nom} image={value.image} index={index}/>
                    </div>
                )
            })}
            <hr />
        </div>

    )
}