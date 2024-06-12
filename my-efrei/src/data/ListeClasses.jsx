import { FicheClasse } from "./classe/FicheClasse";


export const ListeCLasse = ({classes}) => {
    return (
        <div>
            {classes.map((value, index) => {
                return(
                    <div>
                        <FicheClasse key={index} nom={value.nom} image={value.image} />
                    </div>
                )
            })}
        </div>

    )
}