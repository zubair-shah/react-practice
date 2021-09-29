 import React, {useState} from 'react';
 import Header from './components/header'
 import Mycontext from './components/context/Context';
import './App.css';
import Section from './components/section';
import FormikUsing from './components/myformik';

function App() {
let counter = useState(1)
  return (
    <Mycontext.Provider value={counter}>

    <div> 
         <Header />
            <Section />
            <FormikUsing /> 
            
    </div>
    </Mycontext.Provider>
    
  );
}

export default App;
