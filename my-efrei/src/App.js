//import logo from './logo.svg';
import './App.css';
import { ListeCLasse } from './data/ListeClasses';
import { ListeEleves } from './data/ListeEleves';


function App() {
    return (
        <div className="App">
            <ListeCLasse classes={classes}/>
        </div>
    );
}

export default App;
