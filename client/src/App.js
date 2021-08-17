import './App.css'; 
import LandingPage from '../src/landingpage/Landing';
import Home from './home/Home';
import Form from '../src/componentes/createrecipe/createRecipe';
import { Route, BrowserRouter } from "react-router-dom";
import RecipeDetail from '../src/componentes/recipesDeDtail/RecipesDeTail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>  
      <Route path="/create" component={Form}/>    
      <Route path="/home/:id" render={({match}) => <RecipeDetail match={match}/>}/>      
      </BrowserRouter>
    </div>
  );
}

export default App;
