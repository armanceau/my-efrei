//import logo from './logo.svg';
import './App.css';
import {classes} from './data/data';
import { ListeCLasse } from './data/ListeClasses';


function App() {
    return (
        <div>       
            <ListeCLasse classes={classes}/>
        </div>
    );
}

export default App;
