import React from "react"
import { Container } from 'react-bootstrap'
import "./css/bootstrap.min (10).css"
import Menu from "./components/Menu"
import Chat from "./components/Chat"

function App() {
  return (
    <div className="App">
     <Menu />
     <Chat />
    </div>
  );
}

export default App;
