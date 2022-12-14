import React from "react";
import { connect } from "react-redux";

const SongDetail = ({song}) => {
  if (!song) {
    return <div>Select a song</div>
  }

  return(
    <div>
      <h3>
        Details For:
      </h3>
      <p>
        {song.title}
        <br/>
        {song.duration}  
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {song : state.reducers.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);