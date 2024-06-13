import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const ModifierEnseignant = ({ nom, setNom, prenom, setPrenom, image, setImage, age, setAge, matiere, setMatiere }) => {
        
    const [tempNom, setTempNom] = useState(nom);
    const [tempPrenom, setTempPrenom] = useState(prenom);
    const [tempImage, setTempImage] = useState(image);
    const [tempAge, setTempAge] = useState(age);
    const [tempMatiere, setTempMatiere] = useState(matiere);

    const onSubmit = (e) => {
        e.preventDefault();
        setNom(tempNom);
        setPrenom(tempPrenom);
        setImage(tempImage);
        setAge(tempAge);
        setMatiere(tempMatiere);
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'nom':
                setTempNom(value);
                break;
            case 'prenom':
                setTempPrenom(value);
                break;
            case 'image':
                setTempImage(value);
                break;
            case 'age':
                setTempAge(value);
                break;
            case 'matiere':
                setTempMatiere(value);
                break;
            default:
                break;
        }
    };


    return(
        <div>
            <form name="addEleve" onSubmit={onSubmit} enctype="multipart/form-data" class="form-group">
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
                
                <label htmlFor="matiere">
                    Matiere
                </label>
                <input type="text" name="matiere" onChange={onChange}/>

                <label htmlFor="image">
                    Photo
                </label>
                <input type="file" name="image" onChange={onChange}/>

                <button type="submit">Modifier élève</button>
            </form>
        </div>
    )
}