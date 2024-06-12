import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const AjouterEnseignant = ({liste, setGetListe}) => {

    const [temp, setTemp] = useState({nom:"", prenom:"",age:"", image:"", matiere:""   })

    const onSubmit = (e) => {
        e.preventDefault();
        setGetListe([...liste, temp]);
        setTemp({ nom: "", prenom: "", age: "", image: "", matiere:"" });
    };


    const onChange = (e) => {
        temp[e.target.name] = e.target.value
        setTemp(temp)
    }


    return(
        <div>
            <form name="addEnseignant" onSubmit={onSubmit} enctype="multipart/form-data" class="form-group">
                <label htmlFor="nom">
                    Nom
                </label>
                <input type="text" name="nom" onChange={onChange}/>

                <label htmlFor="prenom">
                    Prénom
                </label>
                <input type="text" name="prenom" onChange={onChange}/>

                <label htmlFor="age">
                    Age
                </label>
                <input type="number" name="age" onChange={onChange}/>

                <label htmlFor="image">
                    Photo
                </label>
                <input type="file" name="image" onChange={onChange}/>

                <label htmlFor="matiere">
                    Matière
                </label>
                <input type="text" name="matiere" onChange={onChange}/>

                <button type="submit">Ajouter enseignant</button>
            </form>
        </div>
    )
}