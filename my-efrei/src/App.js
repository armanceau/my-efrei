//import logo from './logo.svg';
import './App.css';
import {classes} from './data/data';
import { ListeCLasse } from './data/ListeClasses';
import { ListeEleves } from './data/ListeEleves';


function App() {
    return (
        <div>
            {classes.map((value, index) => {
                return(
                    <div>
                        <ListeCLasse classes={classes}/>
                        <ListeEleves classes={classes[index].eleves}/>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
