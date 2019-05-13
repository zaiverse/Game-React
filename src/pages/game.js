import React, { Component } from "react";
import myImages from "../images.json";
import ImgHolder from "../components/ImgHolder";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";

class Game extends Component {
  // Setting the component's initial state
  state = {
    clickedArray:[],
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
  console.log(spec);
  
  // const currentImage = this.state.imagesClicked.find(item => item.spec === spec);

  if(this.state.clickedArray.includes(spec)){
    alert("first");
      this.setState({
        clickedArray:[],
        myImages: myImages,
        imagesClicked: myImages,
        highestScore: (this.state.currentScore > this.state.highestScore)?this.state.currentScore:this.state.highestScore,
        currentScore: 0,
    });
    }else{
    alert("second");

    // const newId = this.state.imagesClicked.filter(item => item.spec !== spec);

    this.setState(
      {
          clickedArray: this.state.clickedArray.concat([spec]),
          currentScore: this.state.currentScore + 1
      },
      () => {
        if (this.state.currentScore === 6) {
            this.setState({
                clickedArray:[],
                myImages: myImages,
                imagesClicked: myImages,
                highestScore: (this.state.currentScore > this.state.highestScore)?this.state.currentScore:this.state.highestScore,
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
    <Wrapper>
      <Header score={this.state.currentScore} highscore={this.state.highestScore}>Clicky Game</Header>
      {this.state.myImages.map(image => (
        <ImgHolder
          HandleImages={this.HandleImages}
          id={image.id}
          key={image.id}
          image={image.src}
        />
      ))}
    </Wrapper>
  );
}
}

export default Game;
