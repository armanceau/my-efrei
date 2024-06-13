import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const ModifierEleve = ({ nom, setNom, prenom, setPrenom, image, setImage, age, setAge }) => {
        
    const [tempNom, setTempNom] = useState(nom);
    const [tempPrenom, setTempPrenom] = useState(prenom);
    const [tempImage, setTempImage] = useState(image);
    const [tempAge, setTempAge] = useState(age);

    const onSubmit = (e) => {
        e.preventDefault();
        setNom(tempNom);
        setPrenom(tempPrenom);
        setImage(tempImage);
        setAge(tempAge);
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
            default:
                break;
        }
    };


    return(
        <div>
            <form name="addEleve" onSubmit={onSubmit} enctype="multipart/form-data" class="form-group">
                <div class="d-flex w-100 gap-20">
                    <div class="d-flex align-items-start flex-column w-50">
                        <label htmlFor="nom">Nom :</label>
                        <input type="text" name="nom" class="form-control" onChange={onChange} />
                    </div>

                    <div class="d-flex align-items-start flex-column w-50">
                        <label htmlFor="prenom">Prénom :</label>
                        <input type="text" name="prenom" class="form-control" onChange={onChange} />
                    </div>
                </div>

                <br />

                <div class="d-flex w-100 gap-20">
                    <div class="d-flex align-items-start flex-column w-50">
                        <label htmlFor="age">Age :</label>
                        <input type="number" name="age" class="form-control" onChange={onChange} />
                    </div>

                    <div class="d-flex align-items-start flex-column w-50">
                        <label htmlFor="image">Photo :</label>
                        <input type="file" name="image" class="form-control" onChange={onChange} />
                    </div>
                </div>

                <br />

                <div class="w-100 d-flex justify-content-end">
                    <button class="btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-05 br-20" type="submit">
                        <i class="bi bi-pencil-square"></i>
                        Modifier
                    </button>
                </div>
            </form>
        </div>
    )
}