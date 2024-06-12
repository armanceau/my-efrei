//import logo from './logo.svg';
import './App.css';
import {classes} from './data/data';
import { ListeCLasse } from './data/ListeClasses';
import { ListeEleves } from './data/ListeEleves';

const classe = classes.find(classe => classe.id === 1);
const eleves = classe ? classe.élèves : [];

function App() {
    return (
        <div className="App">
            <ListeCLasse classes={classes}/>
            <ListeEleves liste={eleves} />
        </div>
    );
}

export default App;
