import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const AjouterEleve = ({liste, setGetListe}) => {

    const [temp, setTemp] = useState({nom:"", prenom:"",age:"", image:""  })

    const onSubmit = (e) => {
        e.preventDefault();
        setGetListe([...liste, temp]);
        setTemp({ nom: "", prenom: "", age: "", image: "" });
    };


    const onChange = (e) => {
        temp[e.target.name] = e.target.value
        setTemp(temp)
    }

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
                        <i class="bi bi-plus-circle-dotted"></i>
                        Ajouter
                    </button>
                </div>
            </form>
        </div>
    )
}