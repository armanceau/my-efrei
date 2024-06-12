import logo from './logo.svg';
import './App.css';
import {classes} from './data/data';
import { ListeCLasse } from './data/ListeClasses';


function App() {
    return (
        <div className="App">
            <ListeCLasse liste={classes}/>
        </div>
    );
}

export default App;
