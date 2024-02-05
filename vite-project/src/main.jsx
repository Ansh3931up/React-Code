import React from 'react'
import ReactDOM from 'react-dom/client'
import {Person,Button,Header} from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header title="Welcome to my new life"/>
    <Person name="ansh" age="19"/>
    <Person name="vinay" age="20"/>
  
    <Button onClick='document.getElementById("root").style.background-color="red"'  text="Helo guys!!"/>
  </React.StrictMode>,
)
