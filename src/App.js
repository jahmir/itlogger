import {Fragment, useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';

const App = () => {

  useEffect(() => {
    //initialize materialize JS
    M.AutoInit()
  })
  
  return (
    <Fragment>
      <Searchbar/>
      <Logs/>
    </Fragment>
  );
}

export default App;
