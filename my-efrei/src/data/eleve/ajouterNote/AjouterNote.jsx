import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const AjouterNote = ({ liste, setGetNote }) => {
    const [temp, setTemp] = useState({ matiere: "", note: "" });

    const onSubmit = (e) => {
        e.preventDefault();
        setGetNote([...liste, temp]);
        setTemp({ matiere: "", note: "" });
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setTemp(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <form name="addNote" onSubmit={onSubmit} enctype="multipart/form-data" className="form-group">
                <label htmlFor="matiere">Matière</label>
                <input type="text" name="matiere" onChange={onChange} value={temp.matiere} />

                <label htmlFor="note">Note</label>
                <input type="number" step="0.1" name="note" onChange={onChange} value={temp.note} />

                <button type="submit">Ajouter note</button>
            </form>
        </div>
    );
};
