import { FicheClasse } from "./classe/FicheClasse";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export const ListeClasses = ({classes}) => {
    return (
        <div class="p-4">
            <div class="d-flex justify-content-center">
                <h1>My Efrei</h1>
            </div>
            <hr />
            <h3>Listes des classes :</h3>
            <div class="d-flex gap-20">
                {classes.map((value, index) => {
                    return(
                        <FicheClasse key={index} nom={value.nom} image={value.image} index={index}/>
                    )
                })}
            </div>
        </div>

    )
}