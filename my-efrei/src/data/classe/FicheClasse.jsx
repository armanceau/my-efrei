import {classes} from '../data';
// import { ListeEleves } from '../ListeEleves';
// import { ListeEnseignants } from '../ListeEnseignants';

export const FicheClasse = ({nom, image, index}) => {
    return(
        <div>
            <a href={`classe/${index}`}>
                {classes[index].nom}
                <img src={image} alt={classes[index].nom} class="img-profil" />
            </a>
            {/* <ListeEleves classes={classes[index].eleves}/>
            <ListeEnseignants classes={classes[index].enseignants}/> */}
        </div>
    )
}