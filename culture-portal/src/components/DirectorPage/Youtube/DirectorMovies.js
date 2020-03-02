import React from "react";
import ModalVideo from "react-modal-video";
import "./DirectorMovies.scss";
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
    let id = this.props.link;
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay="1" videoId={id} onClose={() => this.setState({isOpen: false})} />
        <div className="about__video-container" style={{backgroundImage:`url(https://img.youtube.com/vi/${id}/0.jpg)`}}>
          <div className="about__video-button" onClick={this.openModal}/>
        </div>
      </div>
    )
  }
}
