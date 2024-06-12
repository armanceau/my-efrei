import "./FicheEleve.css";
import { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AjouterNote } from "./ajouterNote/AjouterNote"

export const FicheEleve = ({nom, prenom, image, age, notes}) => {

    const [getNote, setGetNote] = useState(notes || []);

    return(
        <div class="border shadow-sm br-20 d-flex align-items-center flex-column p-1">
            <img src={image} alt={nom + " " + prenom} class="img-profil br-top-20" />
            <div class="info">
                <p>{nom} {prenom}</p>
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
                        </div>        
                        <div className="header"> 
                            <h2>
                                {nom} {prenom} 
                            </h2>
                        </div>        
                        <div className="content">          
                            {' '}          
                            <p>
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
                            <AjouterNote liste={getNote} setGetNote={setGetNote} />
                            Age : {age}
                        </div>        
                    </div>    
                )}  
			</Popup>

        </div>
    )
}