import "./FicheEleve.css"

export const FicheEleve = ({nom, prenom, image, age, notes}) => {
    console.log(image)
    //const resolvedImage = require(`${image}`).default;
    console.log(document.getElementById("test"))
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