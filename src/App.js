import React from 'react';
import './App.css';
import { Button, Dropdown } from 'react-bootstrap';
import Boutique from './Boutique';

function App(){
  return (
    <div className="App">
      <header>
      </header>
      <body>
        <div id="entete">
          <ul id="onglets">
            <li>
              <Button variant="secondary">Homme</Button>
            </li>
            <li>
              <Button variant="secondary">Femme</Button>
            </li>
            <li>
              <Button variant="secondary">Enfant</Button>
            </li>
            <li>
              <Button variant="secondary">Gourdes</Button>
            </li>
            <li>
              <Button variant="secondary">Antivols</Button>
            </li>
            <li>
              <Button variant="secondary">Pneumatiques</Button>
            </li>
          </ul>
        </div>
        
        <table id="tablevelos" border="1">
          <Boutique/>
        </table>
      </body>
    </div>
  );
}

export default App;
