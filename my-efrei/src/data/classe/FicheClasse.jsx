import {classes} from '../data';
import { ListeEleves } from '../ListeEleves';
import { ListeEnseignants } from '../ListeEnseignants';

export const FicheClasse = ({nom, image, index}) => {
    return(
        <div>
            {nom}
            {image}
            <ListeEleves classes={classes[index].eleves}/>
            <ListeEnseignants classes={classes[index].enseignants}/>
        </div>
    )
}