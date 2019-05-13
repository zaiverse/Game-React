import React, { Component } from "react";
import myImages from "../images.json";
import "./style.css";
import ImgHolder from "../components/ImgHolder";
import Wrapper from "../components/Wrapper";

class Game extends Component {
  // Setting the component's initial state
  state = {
    myImages,
    imagesClicked: myImages,
    currentScore: 0,
    highestScore: 0
};

  // sort through images
  sortImages = array => {
    array.sort((a, b) => 0.5 - Math.random());
    return array;
  };

//create function that shuffles images and checks whether the image has been clicked before or not
HandleImages = spec =>{
  
  const currentImage = this.state.imagesClicked.find(item => item.spec === spec);

  if(currentImage === undefined){
    alert("first");
      this.setState({
        myImages: myImages,
        imagesClicked: myImages,
        highestScore: (this.state.currentScore > this.state.highestScore)?this.state.currentScore:this.state.highestScore,
        currentScore: 0,
    });
    }else{
    alert("second");

    const newId = this.state.imagesClicked.filter(item => item.spec !== spec);

    this.setState(
      {
          currentScore: this.state.currentScore + 1,
          myImages: myImages,
          imagesClicked: newId
      },
      () => {
        if (this.state.currentScore === 6) {
            this.setState({
                myImages: myImages,
                imagesClicked: myImages,
                currentScore: 0
            });
          }
        }
      );
    }
    this.sortImages(myImages);
}

//setstate

//inside of render...create map loop to loop through array
  render() {
    return (
          <Wrapper className="float-left">
            <h1>current score: {this.state.currentScore}</h1>
            <h1>Highest score: {this.state.highestScore}</h1>
            {this.state.myImages.map(image  => {
            return <ImgHolder 
                  spec={image.id} 
                  onClick={this.HandleImages} 
                  className="size" 
                  src={image.src}>
              /></ImgHolder>
            })};
        </Wrapper>
    );
  }
}

export default Game;
