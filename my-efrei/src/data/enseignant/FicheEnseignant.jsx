import "./FicheEnseignant.css"

export const FicheEnseignant = ({nom, prenom, image, matiere, classes}) => {
    return(
        <div class="enseignant">
            <img src={image} alt={nom + " " + prenom} class="img-profil" />
            <div class="info">
                <p>{nom} {prenom}</p>
                <p>{matiere}</p>
                <p>{classes}</p>
            </div>
        </div>
    )
}