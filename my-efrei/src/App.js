//import logo from './logo.svg';
import './App.css';
import {classes} from './data/data';
import { ListeClasses } from './data/ListeClasses';
import { ListeEleves } from './data/ListeEleves';
import { ListeEnseignants } from './data/ListeEnseignants';
import { Link, NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: 
        <>
            <ListeClasses classes={classes}/>      
        </>
	},
	{
		path: '/classe/:id',
		element: 
        <>
            <ListeEleves />
            <ListeEnseignants />
        </>
	},
	{
		path: '/eleve/:id',
		element: 
            <ListeEleves classes={classes[0].eleves[0]}/>
	},
]);

function App() {
    return (
        <div>      
            <RouterProvider router={router} /> 
            {/* <ListeClasse classes={classes}/> */}
        </div>
    );
}

export default App;
