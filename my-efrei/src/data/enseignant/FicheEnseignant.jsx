import "./FicheEnseignant.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const FicheEnseignant = ({nom, prenom, image, matiere, classes, age}) => {
    return(
        <div class="enseignant">
            <img src={image} alt={nom + " " + prenom} class="img-profil" />
            <div class="info">
                <p>{nom} {prenom}</p>
                <p>{classes}</p>
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
                            
                            <br />
                            Age : {age}
                            <br />
                            Matière : {matiere}
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