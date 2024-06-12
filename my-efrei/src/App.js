//import logo from './logo.svg';
import './App.css';
import {classes} from './data/data';
import { ListeCLasse } from './data/ListeClasses';


function App() {
    return (
        <div className="App">
            <ListeCLasse classes={classes}/>
        </div>
    );
}

export default App;
