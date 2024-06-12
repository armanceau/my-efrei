import {classes} from '../data';
import { ListeEleves } from '../ListeEleves';

export const FicheClasse = ({nom, image, index}) => {
console.log(index);
    return(
        <div>
            {nom}
            {image}
            <ListeEleves classes={classes[index].eleves}/>
        </div>
    )
}