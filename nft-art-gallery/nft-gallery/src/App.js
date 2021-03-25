
import React, { useState, useMemo } from 'react'
import './App.css';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Heading from './components/Heading';
import { UserContext } from './contexts/user';

function App () {


  return (
    <UserContext.Provider value={"hello usecontext"} >
      <div className="App">
        <Heading />
        <UploadForm />
        <ImageGrid />
      </div>
    </ UserContext.Provider>
  );
}

export default App;
