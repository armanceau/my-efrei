import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const AjouterMatiere = ({ liste, setGetNote }) => {
    const [temp, setTemp] = useState({ matiere: "" });

    const onSubmit = (e) => {
        e.preventDefault();
        setGetNote([...liste, temp]);
        setTemp({ matiere: "" });
    };

    //savoir expliquer
    const onChange = (e) => {
        temp[e.target.name] = e.target.value
        setTemp(temp)
    }

    return (
        <div>
            <form name="addNote" onSubmit={onSubmit} enctype="multipart/form-data" className="form-group">
                <div className="d-flex w-100 gap-20">
                    <div className="d-flex align-items-start flex-column w-50">
                        <label htmlFor="matiere">Matière :</label>
                        <input type="text" name="matiere" className="form-control" onChange={onChange} />
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
    );
};
