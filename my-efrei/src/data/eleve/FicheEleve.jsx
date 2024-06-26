import "./FicheEleve.css";
import { useEffect, useState, useRef } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AjouterNote } from "./ajouterNote/AjouterNote"
import { ModifierEleve } from "./modifierEleve/ModifierEleve"


export const FicheEleve = ({index, nom, prenom, image, age, notes}) => {
    
    const [getNom, setGetNom] = useState(nom);
    const [getPrenom, setGetPrenom] = useState(prenom);
    const [getImage, setGetImage] = useState(image);
    const [getAge, setGetAge] = useState(age);
    const [getNote, setGetNote] = useState(notes || []);
    
    useEffect(() => {
        setGetNom(nom);
        setGetPrenom(prenom);
        setGetImage(image);
        setGetAge(age);
        }, [nom, prenom, image, age]);

    // suppression d'un eleve
    const removeEleve = (id) => {
        setTimeout(() => {
            const eleveElement = document.getElementById(id);
            if (eleveElement) {
                eleveElement.remove();
            }
        }, 200);
    };
    
    // suppression d'une note
    const removeNote = (id) => {
        setTimeout(() => {
            const noteElement = document.getElementById(id);
            if (noteElement) {
                noteElement.remove();
            }
        }, 200);
    };
    

        return(
        <div id={index + "_" +  getNom} className="border shadow-sm br-20 d-flex align-items-center flex-column p-1">
            <img src={image} alt={nom + " " + prenom} className="img-profil br-20" />
            <div className="info">
                <p>{getNom} {getPrenom}</p>
            </div>

            <Popup
                trigger={
                <button className="btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-05 br-20"> 
                    <i className="bi bi-search"></i> 
                    Détails 
                </button>}
                modal nested>    
                {close => (      
                    <div className="popup"> 
                        <div className="w-100 d-flex justify-content-end">
                            <button className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center" onClick={close}>          
                                <i className="bi bi-x"></i>
                            </button>        
                        </div>        
                        <div className="header d-flex gap-2 align-items-center"> 
                            <h2 className="mb-0">
                                {getNom} {getPrenom} 
                            </h2>
                            <div>
                                <button className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center" onClick={() => removeEleve(index + "_" + getNom)}><i className="bi bi-trash"></i></button>
                            </div>
                        </div>        
                            <p>Age : {getAge}</p>
                        <div className="content">          
                            {' '}          
                            <p>
                                Notes :
                                {getNote && getNote.length > 0 ? (
                                    <ul>
                                        {getNote.map((note, index) => (
                                            <li className="d-flex gap-2 align-items-center mt-2" id={index + "_" + note.matiere} key={index}>{note.matiere}: {note.note}
                                                <div>
                                                    <button className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center" onClick={() => removeNote(index + "_" + note.matiere)}><i className="bi bi-trash"></i></button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <i>
                                        <span className="text-muted">Pas de notes disponibles.</span>
                                    </i>
                                )}
                            </p>
                            <hr />
                            <h5>Ajouter une note :</h5>
                            <AjouterNote liste={getNote} setGetNote={setGetNote} />
                            <hr />
                            <h5>Modifier l'élève :</h5>
                            <ModifierEleve 
                                nom={getNom}
                                setNom={setGetNom}
                                prenom={getPrenom}
                                setPrenom={setGetPrenom}
                                image={getImage}
                                setImage={setGetImage}
                                age={getAge}
                                setAge={setGetAge} />
                        </div>        
                    </div>    
                )}  
			</Popup>

        </div>
    )
}