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
            <form name="editEnseignant" onSubmit={onSubmit} enctype="multipart/form-data" className="form-group">
                <div className="d-flex w-100 gap-20">
                    <div className="d-flex align-items-start flex-column w-50">
                        <label htmlFor="nom">Nom :</label>
                        <input type="text" name="nom" className="form-control" onChange={onChange} />
                    </div>

                    <div className="d-flex align-items-start flex-column w-50">
                        <label htmlFor="prenom">Prénom :</label>
                        <input type="text" name="prenom" className="form-control" onChange={onChange} />
                    </div>
                </div>

                <br />

                <div className="d-flex w-100 gap-20">
                    <div className="d-flex align-items-start flex-column w-50">
                        <label htmlFor="age">Age :</label>
                        <input type="number" name="age" className="form-control" onChange={onChange} />
                    </div>

                    <div className="d-flex align-items-start flex-column w-50">
                        <label htmlFor="image">Photo :</label>
                        <input type="file" name="image" className="form-control" onChange={onChange} />
                    </div>
                </div>

                <br />

                <div className="d-flex w-100 gap-20">
                    <div className="d-flex align-items-start flex-column w-50">
                        <label htmlFor="matiere">Matière :</label>
                        <input type="text" name="matiere" className="form-control" onChange={onChange} />
                    </div>

                    <div className="d-flex align-items-start flex-column w-50">
                       
                    </div>
                </div>

                <br />

                <div className="w-100 d-flex justify-content-end">
                    <button className="btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-05 br-20" type="submit">
                        <i className="bi bi-pencil-square"></i>
                        Modifier
                    </button>
                </div>
            </form>
        </div>
    )
}