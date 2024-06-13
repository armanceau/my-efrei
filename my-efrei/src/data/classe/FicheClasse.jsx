import {classes} from '../data';
// import { ListeEleves } from '../ListeEleves';
// import { ListeEnseignants } from '../ListeEnseignants';

export const FicheClasse = ({nom, image, index}) => {
    return(
        <div>
            <a href={`classe/${index}`} test={index} class="border shadow-sm br-20 d-flex align-items-center flex-column p-1 custom-card">
                <img src={image} alt={classes[index].nom} class="img-profil br-20" />
                {classes[index].nom}
            </a>
            {/* <ListeEleves classes={classes[index].eleves}/>
            <ListeEnseignants classes={classes[index].enseignants}/> */}
        </div>
    )
}