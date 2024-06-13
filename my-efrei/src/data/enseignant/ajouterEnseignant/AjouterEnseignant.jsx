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
            <form name="addEnseignant" onSubmit={onSubmit} enctype="multipart/form-data" className="form-group">
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

                    <div className="w-50">

                    </div>
                </div>

                <br />

                <div className="w-100 d-flex justify-content-end">
                    <button className="btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-05 br-20" type="submit">
                        <i className="bi bi-plus-circle-dotted"></i>
                        Ajouter
                    </button>
                </div>
            </form>
        </div>
    )
}