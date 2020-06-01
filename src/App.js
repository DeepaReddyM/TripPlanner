import React,{Component} from 'react';
import './App.css';
import Main from './components/mainComponent';
import { BrowserRouter,Route } from 'react-router-dom';
class App extends Component{
  constructor()
  {
    super();
  }
 

  render(){
  return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
     
  );
}
}



export default App;


