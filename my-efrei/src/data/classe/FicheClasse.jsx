import {classes} from '../data';
import { ListeEleves } from '../ListeEleves';

export const FicheClasse = ({nom, image, index}) => {

    return(
        <div>
            {nom}
            <ListeEleves classes={classes[index].eleves}/>
        </div>
    )
}