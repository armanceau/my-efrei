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
    const removeElement = () => {
        setTimeout(() => {
            const eleveElement = document.getElementById(index + "_" + getNom);
            if (eleveElement) {
                var eleveToDelete = eleveElement;
                var idElementToDelete = eleveToDelete.getAttribute("id");
                const elementToDelete = document.getElementById(idElementToDelete);
                elementToDelete.remove();
            }
        }, 200);
    };

        return(
        <div id={index + "_" +  getNom} class="border shadow-sm br-20 d-flex align-items-center flex-column p-1">
            <img src={image} alt={nom + " " + prenom} class="img-profil br-20" />
            <div class="info">
                <p>{getNom} {getPrenom}</p>
            </div>

            <Popup
                trigger={
                <button className="btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-05 br-20"> 
                    <i class="bi bi-search"></i> 
                    Détails 
                </button>}
                modal nested>    
                {close => (      
                    <div className="popup"> 
                        <div class="w-100 d-flex justify-content-end">
                            <button className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center" onClick={close}>          
                                <i class="bi bi-x"></i>
                            </button>        
                            <div>
                                <button onClick={removeElement}>X</button>
                            </div>
                        </div>        
                        <div className="header"> 
                            <h2>
                                {getNom} {getPrenom} 
                            </h2>
                            <p>Age : {getAge}</p>
                        </div>        
                        <div className="content">          
                            {' '}          
                            <p>
                                notes :
                                {getNote && getNote.length > 0 ? (
                                    <ul>
                                        {getNote.map((note, index) => (
                                            <li key={index}>{note.matiere}: {note.note}</li>
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