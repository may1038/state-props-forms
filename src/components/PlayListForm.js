import React, { Component } from "react"

class PlayListForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }

  handleUserNameChange = event => {
    this.setState({
      userName: event.target.value
    })
  }

  handleSongArtistChange = event => {
    this.setState({
      songArtist: event.target.value
    })
  }

  handleSongTitleChange = event => {
    this.setState({
      songTitle: event.target.value
    })
  }

  handleSongNotesChange = event => {
    this.setState({
      songNotes: event.target.value
    })
  }

  addToList = event => {
    event.preventDefault()

    let listItem = JSON.stringify(this.state)

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {})
      .catch(err => {})
    this.setState({
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.addToList}>
        <div className="form-group">
          <label className="formLabel" htmlFor="formGroupExampleInput">
            User Name:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div className="form-group">
          <label className="formLabel" htmlFor="formGroupExampleInput2">
            Artist/Band:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            value={this.state.songArtist}
            onChange={this.handleSongArtistChange}
          />
        </div>
        <div className="form-group">
          <label className="formLabel" htmlFor="formGroupExampleInput2">
            Song Title:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            value={this.state.songTitle}
            onChange={this.handleSongTitleChange}
          />
        </div>
        <div className="form-group">
          <label className="formLabel" htmlFor="formGroupExampleInput2">
            Song Notes:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            value={this.state.songNotes}
            onChange={this.handleSongNotesChange}
          />
        </div>
        <div>
          <button className="submitButton" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }
}

export default PlayListForm
