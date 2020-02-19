import React from "react";
import ModalVideo from "react-modal-video";

export default class DirectorMovies extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
        <div className="about__video-container">
          <div className="about__video-button" onClick={this.openModal}></div>
        </div>
      </div>
    )
  }
}