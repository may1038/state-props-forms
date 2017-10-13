import React, { Component } from "react"

class PlayListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const item = this.props.songs.map(song => {
      return (
        <div className="sectionDiv" key={song._id}>
          <ul className="list">
            <li className="listItem">
              User: <h4 className="listResult">{song.userName}</h4>
            </li>
            <li className="listItem">
              Artist: <h4 className="listResult">{song.songArtist}</h4>
            </li>
            <li className="listItem">
              Title: <h4 className="listResult">{song.songTitle}</h4>
            </li>
            <li className="listItem">
              Notes: <h4 className="listResult">{song.songNotes}</h4>
            </li>
          </ul>
        </div>
      )
    })
    return (
      <div>
        {item}
      </div>
    )
  }
}

export default PlayListItem
