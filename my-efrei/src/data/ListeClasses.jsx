import { FicheClasse } from "./classe/FicheClasse";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export const ListeClasses = ({classes}) => {
    return (
        <div className="p-4">
            <div className="d-flex justify-content-center">
                <h1>My Efrei</h1>
            </div>
            <hr />
            <h3>Listes des classes :</h3>
            <div className="d-flex gap-20">
                {classes.map((value, index) => {
                    return(
                        <FicheClasse key={index} nom={value.nom} image={value.image} index={index}/>
                    )
                })}
            </div>
        </div>

    )
}