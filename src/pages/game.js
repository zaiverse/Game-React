import React, { Component } from "react";
import "./style.css";

class Game extends Component {
  // Setting the component's initial state
  state = {
    firstImage: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjpM-Y1IziAhUJjq0KHSkSBgMQjRx6BAgBEAU&url=http%3A%2F%2Fchillin.sk%2F2015%2F05%2F10-dovodov-preco-pit-kazde-rano-vodu-s-citronom%2F&psig=AOvVaw0vYwnOuXjUO-TM--hOHUaW&ust=1557429625145168",
    secondImage: "http://liuzhou.co.uk/wordpress/wp-content/uploads/2013/07/Lantern-Chillies.jpg",
    ThirdImage: "https://static1.squarespace.com/static/55f32bdde4b0cc7d7c52a9b6/55f9b852e4b046c95b212ab3/55f9b871e4b0f82c9f452de4/1443808357933/.50+Yellow+Bell+Pepper+Dice.jpg",
    fourthImage:"https://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2013/06/ripe-unripe-bananas.jpg",
    fifthImage:"http://leiasgreenliving.files.wordpress.com/2011/07/corn.jpg",
    sixthImage:"https://cdn.pixabay.com/photo/2015/03/23/23/40/noodles-686857_960_720.jpg",
    currentScore: 0,
    highestScore: 0
};


  render() {
    return (
      <div>
          <div className="container">
            <div className="float-left">
                <img src={this.state.secondImage} className="size" />
                <img src={this.state.ThirdImage} className="size" />
                <img src={this.state.fourthImage} className="size" />
                <img src={this.state.fifthImage} className="size" />
            </div>
          </div>
      </div>
    );
  }
}

export default Game;
