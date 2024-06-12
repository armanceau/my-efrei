import { FicheClasse } from "./classe/FicheClasse";


export const ListeClasses = ({classes}) => {
    return (
        <div>
            {classes.map((value, index) => {
                return(
                    <div>
                        <FicheClasse key={index} nom={value.nom} image={value.image} index={index}/>
                    </div>
                )
            })}
            <hr />
        </div>

    )
}