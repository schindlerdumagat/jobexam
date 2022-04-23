import React, { Fragment } from 'react';

import TagLine from './TagFolder/TagLine';
import FormContainer from './FormFolder/FormContainer'

import './App.css';

function App() {
  return (
    <Fragment>
      <div id="main-1">
        <div id='main-2'>
          <TagLine />
        </div>
        <div id='main-3'>
          <FormContainer />
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
