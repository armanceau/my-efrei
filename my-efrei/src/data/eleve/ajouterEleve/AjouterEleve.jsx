import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const AjouterEleve = ({liste, setGetListe}) => {

    const [temp, setTemp] = useState({nom:"", prenom:"",age:"", image:"", matiere:"", note:""  })

    const onSubmit = (e) => {
        e.preventDefault()
        setGetListe([...liste, temp])
    }

    const onChange = (e) => {
        temp[e.target.name] = e.target.value
        setTemp(temp)
    }

    return(
        <div>
            <form name="addEleve" onSubmit={onSubmit} enctype="multipart/form-data">

                <p>Info</p>
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

                <p>notes</p>
                <label htmlFor="matiere">
                    Matiere
                </label>
                <input type="text" name="matiere" onChange={onChange}/>

                <label htmlFor="note">
                    Note
                </label>
                <input type="number" step="0.1" name="note" onChange={onChange}/>

                <button type="submit">Ajouter élève</button>
            </form>
        </div>
    )
}