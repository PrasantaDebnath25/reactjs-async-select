import { useState, useEffect, useReducer } from 'react'
import axios from "axios";
import './App.css'
import Multiple from './component/MultipleSelection/Multiple';
import Single from './component/SingleSelection/Single';

const initState = {
  caseListForSelect: [],
  selectedCases: [],


  selectedPeople: '',
  selectedProfile: "",

};

function App() {
  

  return (
    <>
      <h1>React Select Selection</h1>

      {/* Single Select */}
      <div className="card">
        <p>
          Single
        </p>
      </div>
      <p className="read-the-docs">
        <Single />
      </p>
      {/* Multiple Select */}
      <div className="card">
        <p>
          Multiple
        </p>
      </div>
      <p className="read-the-docs">
        <Multiple />
      </p>
    </>
  )
}

export default App
