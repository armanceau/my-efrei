import "./FicheEleve.css"

export const FicheEleve = ({nom, prenom, image, age, notes}) => {
    return(
        <div class="eleve">
            <img src={image} alt={nom + " " + prenom} class="img-profil" />
            <div class="info">
                <p>{nom}</p>
                <p>{prenom}</p>
                <p>{age}</p>
                <p>{notes}</p>
            </div>
        </div>
    )
}