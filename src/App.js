import './App.css';

import 'semantic-ui-css/semantic.min.css'
import DashBoard from './layouts/DashBoard';
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';




function App() {
  return (
    <div className="App">
       <Navi/>
      <Container className="main">
         <DashBoard/>
      </Container>
     
    </div>
  );
}

export default App;
