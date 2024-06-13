import "./FicheEnseignant.css"
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ModifierEnseignant } from "./modifierEnseignant/ModifierEnseignant"

export const FicheEnseignant = ({index, nom, prenom, image, matiere, classes, age}) => {

    const [getNom, setGetNom] = useState(nom);
    const [getPrenom, setGetPrenom] = useState(prenom);
    const [getImage, setGetImage] = useState(image);
    const [getMatiere, setGetMatiere] = useState(matiere);
    const [getAge, setGetAge] = useState(age);

    useEffect(() => {
        setGetNom(nom);
        setGetPrenom(prenom);
        setGetImage(image);
        setGetMatiere(matiere);
        setGetAge(age);
    }, [nom, prenom, image, age, matiere]);

    const removeElement = () => {
        setTimeout(() => {
            const enseignantElement = document.getElementById(index + "_" + getNom);
            if (enseignantElement) {
                var enseignantToDelete = enseignantElement;
                var idElementToDelete = enseignantToDelete.getAttribute("id");
                const elementToDelete = document.getElementById(idElementToDelete);
                elementToDelete.remove();
            }
        }, 200);
    };

    return(
        <div id={index + "_" +  getNom} className="border shadow-sm br-20 d-flex align-items-center flex-column p-1">
            <img src={image} alt={nom + " " + prenom} className="img-profil br-20" />
            <div className="info">
                <p>{getNom} {getPrenom}</p>
                <p>{classes}</p>
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
                            <div>
                                <button onClick={removeElement}>X</button>
                            </div>
                        </div>       
                        <div className="header"> 
                            <h2>
                                {getNom} {getPrenom} 
                            </h2>
                        </div>        
                        <div className="content">          
                            {' '}          
                            
                            <br />
                            Age : {getAge}
                            <br />
                            Matière : {getMatiere}
                        </div>  
                        <hr />
                        <h5>Modifier Enseignant</h5>
                        <ModifierEnseignant 
                                nom={getNom}
                                setNom={setGetNom}
                                prenom={getPrenom}
                                setPrenom={setGetPrenom}
                                image={getImage}
                                setImage={setGetImage}
                                age={getAge}
                                setAge={setGetAge}
                                matiere={getMatiere}
                                setMatiere={setGetMatiere} />
                    </div>    
                )}  
			</Popup>
        </div>
    )
}