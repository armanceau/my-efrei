import { FicheClasse } from "./classe/FicheClasse";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


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