import '../App.css'
import { FicheEnseignant } from "./enseignant/FicheEnseignant"
import { useState } from 'react'
import { useParams } from "react-router-dom"
import {classes} from './data';
import {AjouterEnseignant} from "./enseignant/ajouterEnseignant/AjouterEnseignant"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export const ListeEnseignants = () => {

    const {id} = useParams()

    const [getListe, setGetListe] = useState(classes[id].enseignants)

    return (
        <div className="p-border-4">
            <div>
                Liste des enseignants :          
            </div>

            <br />
           
            <Popup
                trigger={
                    <button className="btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-05 br-20"> 
                    <i className="bi bi-person-plus-fill"></i>
                    Ajouter un enseignant 
                </button>} 
                modal nested>    
                {close => (      
                    <div className="popup"> 
                        <div className="w-100 d-flex justify-content-end">
                            <button className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center" onClick={close}>          
                                <i className="bi bi-x"></i>
                            </button>        
                        </div>        
                        <div className="header"> 
                            <h2>
                               Ajouter un enseignant
                            </h2>                        
                        </div>        
                        <div className="content">          
                            {' '}                                     
                            <AjouterEnseignant liste={getListe} setGetListe={setGetListe}/>
                        </div>        
                    </div>    
                )}  
			</Popup>

            <br />

            <div className="d-flex gap-20">
                {getListe.map((value, index) => {  
                    return(
                        <FicheEnseignant key={index} index={index} nom={value.nom} prenom={value.prenom} matieres={value.matieres} image={value.image} age={value.age}/>
                    )
                })}
            </div>           
        </div>
    )
}