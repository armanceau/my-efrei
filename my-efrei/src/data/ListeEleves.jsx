import '../App.css'
import { useState } from 'react'
import { FicheEleve } from "./eleve/FicheEleve"
import { useParams } from "react-router-dom"
import {classes} from './data'
import { AjouterEleve } from "./eleve/ajouterEleve/AjouterEleve"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const ListeEleves = () => {

    const {id} = useParams()

    const [getListe, setGetListe] = useState(classes[id].eleves)

    return (
        <div>
            Classe : {classes[id].nom}
            <br />
            <br />
            Liste des élèves :
            <br />
            <br />
           
            <Popup
                trigger={
                    <button className="btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-05 br-20"> 
                    <i class="bi bi-person-plus-fill"></i>
                    Ajouter un élève 
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
                               Ajouter un élève
                            </h2>                        
                        </div>        
                        <div className="content">          
                            {' '}          
                            
                                <AjouterEleve liste={getListe} setGetListe={setGetListe}/>
                        </div>        
                    </div>    
                )}  
			</Popup>

            <br />

            <div className="d-flex gap-20">
                {getListe.map((value, index) => {  
                    return(
                        <FicheEleve key={index} nom={value.nom} notes={value.notes} prenom={value.prenom} age={value.age} image={value.image}/>                      
                    )
                })}
            </div>

            <hr />
        </div>
    )
}