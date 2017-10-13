import React, { Component } from "react"
import "./styles/App.css"
import NavBar from "./components/NavBar.js"
import PlayList from "./components/PlayList.js"
import PlayListForm from "./components/PlayListForm.js"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PlayListForm />
        <PlayList />
      </div>
    )
  }
}

export default App
