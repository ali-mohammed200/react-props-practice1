import React from "react";

class Artist extends React.Component {
  render(){
    console.log(this.props)
    let artistObj = {
      imgSrc: this.props.imgSrc,
      name: this.props.name,
      song: this.props.song
    };
    return (
      <div>
        <h1>Hi {artistObj.name}</h1>
        <img src={artistObj.imgSrc} alt="AWESOME"/>
        <h1>{artistObj.song}</h1>
      </div>
    );
  }
}

export default Artist;
