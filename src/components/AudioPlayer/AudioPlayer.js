import React, { PropTypes } from 'react'

const AudioPlayer = ({ audioSrc, audioType }) => (
  <div className="audio-player">
    <audio src={audioSrc} type={audioType} autoPlay />
  </div>
)

AudioPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
  audioType: PropTypes.string.isRequired,
}

export default AudioPlayer
