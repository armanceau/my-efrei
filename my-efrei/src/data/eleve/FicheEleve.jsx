import "./FicheEleve.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const FicheEleve = ({nom, prenom, image, age, notes}) => {
    console.log(notes)
    //const resolvedImage = require(`${image}`).default;
    //console.log(document.getElementById("test"))
    return(
        
        <div class="eleve">
            <img src={image} alt={nom + " " + prenom} class="img-profil" />
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
                        <button className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center" onClick={close}>          
                            <i class="bi bi-x"></i>
                        </button>        
                        <div className="header"> 
                            <h2>
                                {nom} {prenom} 
                            </h2>
                        </div>        
                        <div className="content">          
                            {' '}          
                            <p>
                                {notes && notes.length > 0 ? (
                                    <ul>
                                        {notes.map((note, index) => (
                                            <li key={index}>{note.matiere}: {note.note}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span>Pas de notes disponibles</span>
                                )}
                            </p>
                            <br />
                            Age : {age}
                            <br />
                            <i>
                                fgezuyfez
                            </i>
                        </div>        
                    </div>    
                )}  
			</Popup>

        </div>
    )
}